// consumer.js
const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config();

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

    }

    // Inicializa a conexão
    async initialize() {
        try {
            this.subscription = this.pubsub.subscription(this.subscriptionName);
            console.log(`Conectado à subscription: ${this.subscriptionName}`);
            return true;
        } catch (error) {
            console.error('Erro ao inicializar:', error.message);
            return false;
        }
    }

    // Configura o consumer para receber mensagens
    async startConsuming(messageHandler, errorHandler = null) {

        if (!this.subscription) {
            console.error('Subscription não inicializada');
            return;
        }

        console.log(`Aguardando mensagens da subscription: ${this.subscriptionName}`);

        // Callback para quando receber uma mensagem
        const messageHandlerWrapper = (message) => {
            try {

                // Extrai os dados da mensagem
                const data = message.data ? message.data.toString() : null;
                const attributes = message.attributes || {};
                const messageId = message.id;

                console.log(`Mensagem recebida [ID: ${messageId}]`);

                // Processa a mensagem com o handler fornecido
                const result = messageHandler(data, attributes, message);

                // Se o handler retornar false, não confirma a mensagem
                if (result === false) {
                    console.log(`Mensagem ${messageId} não confirmada`);
                    return;
                }

                // Confirma que a mensagem foi processada
                message.ack();
                console.log(`Mensagem ${messageId} confirmada`);

            } catch (error) {

                console.error(`Erro ao processar mensagem:`, error.message);
                
                // Se tiver um handler de erro, executa
                if (errorHandler) {
                    errorHandler(error, message);
                }

            }
        };

        // Inicia o consumo
        this.subscription.on('message', messageHandlerWrapper);
        this.subscription.on('error', (error) => {
            console.error('Erro na subscription:', error.message);
            if (errorHandler) {
                errorHandler(error);
            }
        });

        // Configura o número máximo de tentativas
        this.subscription.setOptions({
            maxAckExtension: 600, // 10 minutos
            ackDeadline: 60 // 60 segundos
        });

        console.log('Consumer iniciado com sucesso');

    }

    // Para o consumo de mensagens
    async stopConsuming() {
        if (this.subscription) {
            // Remove todos os listeners
            this.subscription.removeAllListeners();
            console.log('Consumer parado');
        }
    }

    // Método para fechar a conexão
    async close() {
        await this.stopConsuming();
        console.log('Conexão fechada');
    }

}

// Teste de uso
async function main() {

    // Configuração - substitua pelos seus dados
    const projectId = process.env.PROJECT_ID;
    const subscriptionName = process.env.SUBSCRIPTION_NAME;
    const keyFilename = process.env.KEY_FILENAME;

    // Cria o consumidor
    const consumer = new PubSubConsumer(projectId, subscriptionName, keyFilename);

    // Inicializa
    const initialized = await consumer.initialize();
    if (!initialized) {
        console.log('Falha ao inicializar o consumer');
        return;
    }

    // Handler para processar mensagens
    const messageHandler = (data, attributes, message) => {
        console.log('Dados da mensagem:', data);
        console.log('Atributos:', attributes);
        console.log('ID da mensagem:', message.id);

        // Seu processamento aqui
        // Exemplo: se for JSON
        try {
            const jsonData = JSON.parse(data);
            console.log('Dados parseados:', jsonData);
        } catch (e) {
            // Não é JSON
        }

        // Retorne false se quiser que a mensagem não seja confirmada
        return true;
    };

    // Handler de erro (opcional)
    const errorHandler = (error, message) => {
        console.error('Erro no processamento:', error.message);
        if (message) {
            console.log('Tentando reprocessar mensagem:', message.id);
            // Aqui você pode implementar lógica de retry
        }
    };

    // Inicia o consumo
    await consumer.startConsuming(messageHandler, errorHandler);

    // Mantém o processo rodando
    console.log('Consumer em execução...');

    // Tratamento para encerramento gracioso
    process.on('SIGINT', async () => {
        console.log('\nEncerrando...');
        await consumer.close();
        process.exit(0);
    });

}

// Executa se for o arquivo principal
if (require.main === module) {
    main().catch(console.error);
}

module.exports = PubSubConsumer;