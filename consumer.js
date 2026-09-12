// consumer.js
const { PubSub } = require('@google-cloud/pubsub');
const { PrismaClient, Prisma } = require('./prisma/generated/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Cria o adapter do PostgreSQL
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

// Instancia o PrismaClient com o adapter
const prisma = new PrismaClient({ adapter });
const testeValidacao = false;

// Erro específico para indicar que o pedido (ou alguma entidade) já existe
class DuplicateOrderError extends Error {
    constructor(entity, id) {
        super(`Registro duplicado: ${entity} com id=${id} já existe no banco`);
        this.name = 'DuplicateOrderError';
        this.entity = entity;
        this.entityId = id;
    }
}

class PubSubConsumer {

    // Construtor
    constructor(projectId, subscriptionName, keyFilename = null) {
        const config = { projectId };
        if (keyFilename) config.keyFilename = keyFilename;

        this.pubsub = new PubSub(config);
        this.subscriptionName = subscriptionName;
        this.subscription = null;

        this.isProcessing = false;
        this.messageQueue = [];
        this.processingInterval = 5000;
        this.errorHandler = null;
    }

    // Conectando a subscrição
    async initialize() {
        try {
            this.subscription = this.pubsub.subscription(this.subscriptionName);
            console.log(`✅ Conectado à subscription: ${this.subscriptionName}`);
            return true;
        } catch (error) {
            console.error('❌ Erro ao inicializar:', error.message);
            return false;
        }
    }

    // Método para aguardar
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Método para a persistencia dos dados no BD
    async persistOrder(order) {
        console.log(`\n💾 Processando pedido ${order.uuid}...`);

        const resultado = await prisma.$transaction(async (tx) => {

            // ============================================================
            // 0. PEDIDO JÁ EXISTE?
            // Se sim, é duplicata: não mexe em nada e retorna cedo.
            // (Caso contrário, duplicaríamos ItemPedido/Metadados/etc.)
            // ============================================================
            const pedidoExistente = await tx.pedido.findUnique({
                where: { PedidoId: order.uuid },
                select: { PedidoId: true },
            });

            if (pedidoExistente) {
                console.log(`⏭️ Pedido ${order.uuid} já existe — nada será alterado.`);
                return { jaExistia: true, pedido: pedidoExistente };
            }

            // ============================================================
            // 1. CLIENTE — cria só se não existir
            // ============================================================
            const clienteExistente = await tx.cliente.findUnique({
                where: { ClienteId: order.customer.id },
                select: { ClienteId: true },
            });

            if (clienteExistente) {
                console.log(`👤 Cliente ${order.customer.id} já existe — mantido.`);
            } else {
                const cliente = await tx.cliente.create({
                    data: {
                        ClienteId: order.customer.id,
                        ClienteNome: order.customer.name,
                        ClienteEmail: order.customer.email,
                        ClienteDocumento: order.customer.document,
                    },
                });
                console.log(`👤 Cliente criado: ${cliente.ClienteNome} (id=${cliente.ClienteId})`);
            }

            // ============================================================
            // 2. VENDEDOR — cria só se não existir
            // ============================================================
            const vendedorExistente = await tx.vendedor.findUnique({
                where: { VendedorId: order.seller.id },
                select: { VendedorId: true },
            });

            if (vendedorExistente) {
                console.log(`🏪 Vendedor ${order.seller.id} já existe — mantido.`);
            } else {
                const vendedor = await tx.vendedor.create({
                    data: {
                        VendedorId: order.seller.id,
                        VendedorNome: order.seller.name,
                        VendedorCidade: order.seller.city,
                        VendedorUF: order.seller.state,
                    },
                });
                console.log(`🏪 Vendedor criado: ${vendedor.VendedorNome} (id=${vendedor.VendedorId})`);
            }

            // ============================================================
            // 3. CATEGORIA / SUBCATEGORIA / PRODUTO — um a um
            // ============================================================
            let criados = { cat: 0, sub: 0, prod: 0 };
            let mantidos = { cat: 0, sub: 0, prod: 0 };

            for (const item of order.items) {
                const cat = item.category;
                const sub = cat.sub_category;

                // 3.1 — Categoria (PK simples: CategoriaId)
                const catExistente = await tx.categoria.findUnique({
                    where: { CategoriaId: cat.id },
                    select: { CategoriaId: true },
                });
                if (catExistente) {
                    mantidos.cat++;
                } else {
                    await tx.categoria.create({
                        data: { CategoriaId: cat.id, CategoriaNome: cat.name },
                    });
                    criados.cat++;
                }

                // 3.2 — SubCategoria (PK COMPOSTA: [SubCategoriaId, CategoriaId])
                //     A mesma SubCategoriaId pode existir com CategoriaId diferentes.
                //     Verificamos pela chave composta.
                const subExistente = await tx.subCategoria.findUnique({
                    where: {
                        SubCategoriaId_CategoriaId: {   // ← nome gerado pelo Prisma para PK composta
                            SubCategoriaId: sub.id,
                            CategoriaId: cat.id,
                        },
                    },
                    select: { SubCategoriaId: true, CategoriaId: true },
                });
                if (subExistente) {
                    mantidos.sub++;
                } else {
                    await tx.subCategoria.create({
                        data: {
                            SubCategoriaId: sub.id,
                            SubCategoriaNome: sub.name,
                            CategoriaId: cat.id,
                        },
                    });
                    criados.sub++;
                }

                // 3.3 — Produto (PK simples: ProdutoId)
                //     Não tem mais SubCategoriaId — a associação é feita no ItemPedido.
                const prodExistente = await tx.produto.findUnique({
                    where: { ProdutoId: item.product.id },
                    select: { ProdutoId: true },
                });
                if (prodExistente) {
                    mantidos.prod++;
                } else {
                    await tx.produto.create({
                        data: {
                            ProdutoId: item.product.id,
                            ProdutoNome: item.product.title,
                        },
                    });
                    criados.prod++;
                }
            }

            console.log(
                `🏷️ Categorias → ${criados.cat} criada(s), ${mantidos.cat} mantida(s) | ` +
                `SubCats → ${criados.sub} criada(s), ${mantidos.sub} mantida(s) | ` +
                `Produtos → ${criados.prod} criado(s), ${mantidos.prod} mantido(s)`
            );

            // ============================================================
            // 4. PEDIDO (só chega aqui se não existia antes)
            // ============================================================
            const valorTotal = order.items.reduce(
                (acc, it) => acc + Number(it.unit_price) * Number(it.quantity),
                0
            );

            const pedido = await tx.pedido.create({
                data: {
                    PedidoId: order.uuid,
                    PedidoDtCriacao: new Date(order.created_at),
                    PedidoTipoCriacao: order.channel,
                    PedidoStatus: order.status,
                    PedidoValorTotal: new Prisma.Decimal(valorTotal),
                    ClienteId: order.customer.id,
                    VendedorId: order.seller.id,
                },
            });
            console.log(`📦 Pedido criado: ${pedido.PedidoId}`);

            // ============================================================
            // 5. ITENS DO PEDIDO
            // ============================================================
            for (const item of order.items) {
                const valorItem = Number(item.unit_price) * Number(item.quantity);
                const cat = item.category;
                const sub = cat.sub_category;

                await tx.itemPedido.create({
                    data: {
                        ItemPedidoId: item.id,
                        PedidoId: order.uuid,
                        ProdutoId: item.product.id,
                        SubCategoriaId: sub.id,
                        CategoriaId: cat.id,        // ← NOVO campo na FK composta
                        ItemPedidoQuantidade: item.quantity,
                        ItemPedidoPrecoUnitario: new Prisma.Decimal(item.unit_price),
                        ItemPedidoValorTotal: new Prisma.Decimal(valorItem),
                    },
                });
            }
            console.log(`🛒 ${order.items.length} item(ns) inserido(s)`);

            // ============================================================
            // 6. METADADOS
            // ============================================================
            await tx.metadadosPedido.create({
                data: {
                    PedidoId: order.uuid,
                    MetadadosSource: order.metadata.source,
                    MetadadosUserAgent: order.metadata.user_agent,
                    MetadadosIP: order.metadata.ip_address,
                },
            });

            // ============================================================
            // 7. PAGAMENTO
            // ============================================================
            await tx.pagamentoPedido.create({
                data: {
                    PedidoId: order.uuid,
                    PagamentoMetodo: order.payment.method,
                    PagamentoStatus: order.payment.status,
                    PagamentoTransacao: order.payment.transaction_id,
                },
            });

            // ============================================================
            // 8. CARREGAMENTO
            // ============================================================
            await tx.carregamentoPedido.create({
                data: {
                    PedidoId: order.uuid,
                    CarregamentoOperadora: order.shipment.carrier,
                    CarregamentoServico: order.shipment.service,
                    CarregamentoStatus: order.shipment.status,
                    CarregamentoCodigoRastreio: order.shipment.tracking_code,
                },
            });

            console.log(`✅ Pedido ${order.uuid} gravado com sucesso`);

            // ============================================================
            // 9. GRAVAR JSON PROCESSADO EM ARQUIVO (para conferência)
            // ============================================================
            // Somente na fase de testes
            if (testeValidacao) {
                // Acrescenta total_item a cada item SEM renomear os campos originais
                const itensComTotais = order.items.map((it) => ({
                    ...it,                                                     // mantém o item original intacto
                    total_item: Number(it.unit_price) * Number(it.quantity),   // só adiciona o total
                }));

                await this.salvarArquivoProcessado(order, valorTotal, itensComTotais);
            }

            return { jaExistia: false, pedido };
        });

        return resultado;
    }

    // Processamento fila
    async processQueue() {
        if (this.isProcessing || this.messageQueue.length === 0) return;

        this.isProcessing = true;

        while (this.messageQueue.length > 0) {
            const message = this.messageQueue.shift();
            let processedSuccessfully = false;

            try {
                const rawData = message.data ? message.data.toString() : null;
                const messageId = message.id;

                console.log('\n' + '='.repeat(80));
                console.log(`📨 MENSAGEM RECEBIDA [ID: ${messageId}]`);
                console.log('='.repeat(80));

                const order = JSON.parse(rawData);
                console.log(`📄 Pedido: ${order.uuid} | Cliente: ${order.customer.name}`);

                if (testeValidacao) {
                    console.log(`📄 Dados Pedido: ${order.uuid} Dados =>`);
                    console.dir(order, { depth: null, colors: true });
                }

                const resultado = await this.persistOrder(order);

                if (resultado.jaExistia) {
                    console.log(`⏭️ Pedido ${order.uuid} já estava no banco — ignorado (nada foi alterado).`);
                } else {
                    console.log(`🎉 Pedido ${order.uuid} processado com sucesso.`);
                }

                processedSuccessfully = true;
                console.log('='.repeat(80));

            } catch (error) {
                console.error(`❌ Erro ao processar mensagem ${message.id}:`, error.message);
                console.error(error.stack);
                if (this.errorHandler) this.errorHandler(error, message);
            }

            // Se processou a mensagem e se não esá em validação
            if (processedSuccessfully && !testeValidacao) {
                message.ack();
                console.log(`✅ MENSAGEM CONFIRMADA [ID: ${message.id}]`);
            } else {
                message.nack();
                console.log(`🔁 MENSAGEM NACKED — será reprocessada [ID: ${message.id}]`);
            }
            console.log('='.repeat(80));

            // Para testes aguardar visualização
            if (this.messageQueue.length > 0 && testeValidacao) {
                console.log(`\n⏳ Aguardando 5s para a próxima mensagem...\n`);
                await this.sleep(this.processingInterval);
            }
        }

        this.isProcessing = false;
        console.log('\n✅ Fila processada. Aguardando novas mensagens...\n');
    }

    // Consumo
    async startConsuming(errorHandler = null) {
        if (!this.subscription) {
            console.error('❌ Subscription não inicializada');
            return;
        }

        this.errorHandler = errorHandler;

        console.log(`📡 Aguardando mensagens da subscription: ${this.subscriptionName}`);
        console.log(`💾 Modo: PERSISTÊNCIA (mensagens serão confirmadas após gravar no BD)\n`);

        const messageHandlerWrapper = (message) => {
            this.messageQueue.push(message);
            console.log(`\n📥 Nova mensagem na fila [ID: ${message.id}] — Total: ${this.messageQueue.length}`);

            if (!this.isProcessing) this.processQueue();
        };

        this.subscription.on('message', messageHandlerWrapper);
        this.subscription.on('error', (error) => {
            console.error('❌ Erro na subscription:', error.message);
            if (errorHandler) errorHandler(error);
        });

        this.subscription.setOptions({
            maxAckExtension: 600,
            ackDeadline: 120,
            flowControl: {
                maxMessages: 1,
                maxBytes: 10 * 1024 * 1024,
            },
        });

        console.log('✅ Consumer iniciado com sucesso\n');
    }

    // Para consumo
    async stopConsuming() {
        if (this.subscription) {
            this.subscription.removeAllListeners();
            this.messageQueue = [];
            this.isProcessing = false;
            console.log('\n⏹️ Consumer parado');
        }
    }

    // Parar consumo e fechar conexão com prisma
    async close() {
        await this.stopConsuming();
        await prisma.$disconnect();
        console.log('🔒 Conexão (Pub/Sub + Prisma) fechada');
    }

    // Grava o JSON processado em arquivo para conferência / Teste validação
    async salvarArquivoProcessado(order, valorTotal, itensComTotais) {
        // Mantém TUDO do JSON original (order) e apenas substitui "items"
        // pelos itens com o campo total_item adicionado.
        // Nenhum campo é renomeado, nenhum campo é removido.
        const payloadProcessado = {
            ...order,                       // JSON cru original (customer, seller, shipment, payment, metadata, etc.)
            items: itensComTotais,          // itens originais + total_item
            totais: {
                valor_total_pedido: valorTotal,
                total_itens: itensComTotais.length,
            },
            processado_em: new Date().toISOString(),
        };

        // Pasta onde os arquivos serão salvos
        const pastaSaida = path.join(__dirname, 'processados');
        if (!fs.existsSync(pastaSaida)) {
            fs.mkdirSync(pastaSaida, { recursive: true });
        }

        // Nome do arquivo: <uuid>_<timestamp>.json
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const nomeArquivo = `${order.uuid}_${timestamp}.json`;
        const caminhoArquivo = path.join(pastaSaida, nomeArquivo);

        fs.writeFileSync(caminhoArquivo, JSON.stringify(payloadProcessado, null, 2), 'utf-8');

        console.log(`📝 Arquivo processado gravado: ${caminhoArquivo}`);
        return caminhoArquivo;
    }
}

// Main
async function main() {
    const projectId = process.env.PROJECT_ID;
    const subscriptionName = process.env.SUBSCRIPTION_NAME;
    const keyFilename = process.env.KEY_FILENAME;

    if (!projectId || !subscriptionName) {
        console.error('❌ PROJECT_ID e SUBSCRIPTION_NAME são obrigatórios');
        process.exit(1);
    }

    const consumer = new PubSubConsumer(projectId, subscriptionName, keyFilename);

    if (!(await consumer.initialize())) {
        console.log('❌ Falha ao inicializar o consumer');
        process.exit(1);
    }

    const errorHandler = (error, message) => {
        console.error('🚨 Erro:', error.message);
        if (message) console.error('   Mensagem:', message.id);
    };

    await consumer.startConsuming(errorHandler);

    console.log('🔄 Consumer em execução. Ctrl+C para parar.\n');

    process.on('SIGINT', async () => {
        console.log('\n\n🛑 Encerrando...');
        await consumer.close();
        process.exit(0);
    });
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = PubSubConsumer;
module.exports.DuplicateOrderError = DuplicateOrderError;
