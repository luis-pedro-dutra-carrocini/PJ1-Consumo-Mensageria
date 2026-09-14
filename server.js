const express = require('express');
const { PrismaClient } = require('./prisma/generated/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const PubSubPublisher = require('./publisher');
require('dotenv').config();

const app = express();
app.use(express.json());

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });

const projectId = process.env.PROJECT_ID;
const topicName = process.env.TOPIC_NAME;
const keyFilename = process.env.KEY_FILENAME;

if (!projectId || !topicName) {
    console.error(' ERRO: PROJECT_ID e TOPIC_NAME devem estar configurados no .env');
    process.exit(1);
}

const publisher = new PubSubPublisher(projectId, topicName, keyFilename);

app.post('/api/pedidos', async (req, res) => {
    try {
        const orderData = req.body;

        if (!orderData.uuid || !orderData.customer || !orderData.items || !Array.isArray(orderData.items)) {
            return res.status(400).json({
                error: 'Payload inválido. Certifique-se de enviar uuid, customer e um array de items.'
            });
        }

        const pedidoExistente = await prisma.pedido.findUnique({
            where: { PedidoId: orderData.uuid },
            select: { PedidoId: true }
        });

        if (pedidoExistente) {
            return res.status(409).json({
                error: `O pedido ${orderData.uuid} já foi cadastrado anteriormente.`
            });
        }

        const messageId = await publisher.publishOrder(orderData);

        return res.status(202).json({
            message: 'Pedido enviado para processamento com sucesso.',
            pedidoUuid: orderData.uuid,
            messageId: messageId,
            status: 'queued'
        });

    } catch (error) {
        console.error('Erro ao processar criação de pedido:', error);
        return res.status(500).json({
            error: 'Erro interno ao publicar o pedido na mensageria.',
            details: error.message
        });
    }
});

app.get('/api/pedidos', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const [pedidos, total] = await Promise.all([
            prisma.pedido.findMany({
                skip,
                take: limit,
                orderBy: { PedidoDtCriacao: 'desc' },
                include: {
                    Cliente: true,
                    Vendedor: true,
                    PagamentoPedido: true,
                    CarregamentoPedido: true,
                    _count: { select: { ItemPedido: true } }
                }
            }),
            prisma.pedido.count()
        ]);

        return res.json({
            data: pedidos,
            pagination: {
                totalRecords: total,
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                pageSize: limit
            }
        });
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        return res.status(500).json({ error: 'Erro ao consultar pedidos no banco de dados.' });
    }
});

/**
 * GET /api/pedidos/:uuid
 * Detalhes completos de um pedido específico
 */
app.get('/api/pedidos/:uuid', async (req, res) => {
    try {
        const { uuid } = req.params;

        const pedido = await prisma.pedido.findUnique({
            where: { PedidoId: uuid },
            include: {
                Cliente: true,
                Vendedor: true,
                ItemPedido: {
                    include: {
                        Produto: true,
                        SubCategoria: true,
                        Categoria: true
                    }
                },
                MetadadosPedido: true,
                PagamentoPedido: true,
                CarregamentoPedido: true
            }
        });

        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado.' });
        }

        return res.json(pedido);
    } catch (error) {
        console.error('Erro ao buscar detalhes do pedido:', error);
        return res.status(500).json({ error: 'Erro interno ao buscar o pedido.' });
    }
});

app.get('/api/pedidos/status/:status', async (req, res) => {
    try {
        const { status } = req.params;

        const pedidos = await prisma.pedido.findMany({
            where: { PedidoStatus: status },
            include: {
                Cliente: true,
                Vendedor: true,
                PagamentoPedido: true
            },
            orderBy: { PedidoDtCriacao: 'desc' }
        });

        return res.json({
            count: pedidos.length,
            status,
            data: pedidos
        });
    } catch (error) {
        console.error('Erro ao buscar pedidos por status:', error);
        return res.status(500).json({ error: 'Erro ao filtrar pedidos.' });
    }
});

/**
 * GET /api/clientes
 * Lista os clientes cadastrados
 */
app.get('/api/clientes', async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany({
            take: 50,
            orderBy: { ClienteNome: 'asc' }
        });
        return res.json(clientes);
    } catch (error) {
        console.error('Erro ao consultar clientes:', error);
        return res.status(500).json({ error: 'Erro ao buscar clientes.' });
    }
});

app.get('/health', (req, res) => {
    return res.json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`🚀 API escutando na porta ${PORT}`);
    console.log(`📌 Publicando no tópico Pub/Sub: ${topicName}`);
    console.log(`🔗 Endpoint para envio de pedidos: POST http://localhost:${PORT}/api/pedidos`);
});

process.on('SIGINT', async () => {
    console.log('\n Encerrando API...');
    await prisma.$disconnect();
    server.close(() => {
        console.log('🔒 Servidor HTTP finalizado.');
        process.exit(0);
    });
});
