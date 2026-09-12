// consumer.js
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config();

// Ativar quando for testes, nçao marcar mensagem como lida
const TestesNaoAck = true;

class PubSubConsumer {

    constructor(projectId, subscriptionName, keyFilename = null) {

        // Configuração do cliente Pub/Sub
        const config = {
            projectId: projectId
        };

        // Se tiver um arquivo de chave de serviço
        if (keyFilename) {
            config.keyFilename = keyFilename;
        }

        this.pubsub = new PubSub(config);
        this.subscriptionName = subscriptionName;
        this.subscription = null;

        // Controle de processamento sequencial
        this.isProcessing = false;
        this.messageQueue = [];
        this.processingInterval = 5000; // 5 segundos entre mensagens
    }

    // Inicializa a conexão
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

    // Processa a fila de mensagens sequencialmente
    async processQueue() {
        if (this.isProcessing || this.messageQueue.length === 0) {
            return;
        }

        this.isProcessing = true;

        while (this.messageQueue.length > 0) {
            const message = this.messageQueue.shift();

            try {
                // Extrai os dados da mensagem
                const data = message.data ? message.data.toString() : null;
                const attributes = message.attributes || {};
                const messageId = message.id;
                const publishTime = message.publishTime;

                // Exibe a mensagem formatada
                console.log('\n' + '='.repeat(80));
                console.log(`📨 MENSAGEM RECEBIDA [ID: ${messageId}]`);
                console.log('='.repeat(80));
                console.log(`⏰ Publicada em: ${publishTime}`);
                console.log(`🏷️ Atributos:`, JSON.stringify(attributes, null, 2));
                console.log(`📄 Conteúdo bruto:`, data);

                // Tenta parsear como JSON se possível
                try {
                    const jsonData = JSON.parse(data);
                    console.log(`📊 Conteúdo JSON (formatado):`);
                    console.log(JSON.stringify(jsonData, null, 2));
                } catch (e) {
                    // Não é JSON, apenas mostra como texto
                    console.log(`📝 Conteúdo texto: ${data}`);
                }

                if (TestesNaoAck === false) {
                    message.ack();
                    console.log(`✅ MENSAGEM CONFIRMADA [ID: ${messageId}]`);
                    console.log('='.repeat(80));
                } else {
                    console.log('='.repeat(80));
                    console.log(`⚠️ MENSAGEM NÃO CONFIRMADA - Não foi marcada como lida (Testes)`);
                    console.log('='.repeat(80));
                }

            } catch (error) {
                console.error(`❌ Erro ao processar mensagem ${message.id}:`, error.message);
            }

            // Aguarda 5 segundos antes de processar a próxima mensagem
            if (this.messageQueue.length > 0) {
                console.log(`\n⏳ Aguardando 5 segundos para processar próxima mensagem...\n`);
                await this.sleep(this.processingInterval);
            }
        }

        this.isProcessing = false;
        console.log('\n✅ Fila de mensagens processada. Aguardando novas mensagens...\n');
    }

    // Função auxiliar para sleep
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Configura o consumer para receber mensagens
    async startConsuming(messageHandler = null, errorHandler = null) {

        if (!this.subscription) {
            console.error('❌ Subscription não inicializada');
            return;
        }

        console.log(`📡 Aguardando mensagens da subscription: ${this.subscriptionName}`);

        if (TestesNaoAck === true) {
            console.log(`⚙️ Modo: VISUALIZAÇÃO (mensagens NÃO serão confirmadas)`);
        }

        console.log(`⏱️ Intervalo entre mensagens: 5 segundos\n`);

        // Callback para quando receber uma mensagem
        const messageHandlerWrapper = (message) => {
            try {
                // Adiciona a mensagem à fila
                this.messageQueue.push(message);

                // Log de recebimento
                console.log(`\n📥 Nova mensagem na fila [ID: ${message.id}] - Total na fila: ${this.messageQueue.length}`);

                // Processa a fila se não estiver processando
                if (!this.isProcessing) {
                    this.processQueue();
                }

            } catch (error) {
                console.error(`❌ Erro ao adicionar mensagem à fila:`, error.message);

                if (errorHandler) {
                    errorHandler(error, message);
                }
            }
        };

        // Inicia o consumo
        this.subscription.on('message', messageHandlerWrapper);

        this.subscription.on('error', (error) => {
            console.error('❌ Erro na subscription:', error.message);
            if (errorHandler) {
                errorHandler(error);
            }
        });

        // Configura o ackDeadline para um valor maior
        // Isso dá mais tempo antes da mensagem ser reenviada
        this.subscription.setOptions({
            maxAckExtension: 600,   // 10 minutos
            ackDeadline: 120,       // 2 minutos - tempo antes de reenviar
            flowControl: {
                maxMessages: 1,      // Processa uma mensagem por vez
                maxBytes: 10 * 1024 * 1024
            }
        });

        console.log('✅ Consumer iniciado com sucesso');
        if (TestesNaoAck === true) {
            console.log('⚠️ ATENÇÃO: As mensagens NÃO estão sendo confirmadas (ack)');
            console.log('⚠️ Elas serão reenviadas pelo Pub/Sub após o ackDeadline\n');
        } else {
            console.log('✅ As mensagens ESTÃO sendo confirmadas (ack)');
        }

    }

    // Para o consumo de mensagens
    async stopConsuming() {
        if (this.subscription) {
            // Remove todos os listeners
            this.subscription.removeAllListeners();
            this.messageQueue = [];
            this.isProcessing = false;
            console.log('\n⏹️ Consumer parado');
        }
    }

    // Método para fechar a conexão
    async close() {
        await this.stopConsuming();
        console.log('🔒 Conexão fechada');
    }

}

// Teste de uso
async function main() {

    // Configuração - substitua pelos seus dados
    const projectId = process.env.PROJECT_ID;
    const subscriptionName = process.env.SUBSCRIPTION_NAME;
    const keyFilename = process.env.KEY_FILENAME;

    // Valida configurações
    if (!projectId || !subscriptionName) {
        console.error('❌ Erro: PROJECT_ID e SUBSCRIPTION_NAME são obrigatórios');
        console.error('Configure o arquivo .env com:');
        console.error('  PROJECT_ID=seu-project-id');
        console.error('  SUBSCRIPTION_NAME=sua-subscription-name');
        console.error('  KEY_FILENAME=caminho/para/chave.json (opcional)');
        process.exit(1);
    }

    // Cria o consumidor
    const consumer = new PubSubConsumer(projectId, subscriptionName, keyFilename);

    // Inicializa
    const initialized = await consumer.initialize();
    if (!initialized) {
        console.log('❌ Falha ao inicializar o consumer');
        return;
    }

    // Handler de erro (opcional)
    const errorHandler = (error, message) => {
        console.error('🚨 Erro no processamento:', error.message);
        if (message) {
            console.log('Mensagem relacionada:', message.id);
        }
    };

    // Inicia o consumo (sem handler customizado, usa o padrão)
    await consumer.startConsuming(null, errorHandler);

    // Mantém o processo rodando
    console.log('🔄 Consumer em execução. Pressione Ctrl+C para parar.\n');

    // Tratamento para encerramento gracioso
    process.on('SIGINT', async () => {
        console.log('\n\n🛑 Encerrando...');
        await consumer.close();
        process.exit(0);
    });

}

// Executa se for o arquivo principal
if (require.main === module) {
    main().catch(console.error);
}

module.exports = PubSubConsumer;