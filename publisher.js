const { PubSub } = require('@google-cloud/pubsub');
require('dotenv').config();

class PubSubPublisher {
    constructor(projectId, topicName, keyFilename = null) {
        const config = { projectId };
        if (keyFilename) config.keyFilename = keyFilename;

        this.pubsub = new PubSub(config);
        this.topicName = topicName;
        this.topic = this.pubsub.topic(this.topicName);
    }

    async publishOrder(orderPayload) {
        try {
            const dataBuffer = Buffer.from(JSON.stringify(orderPayload));
            
            const customAttributes = {
                origin: 'api_rest',
                channel: orderPayload.channel || 'unknown',
                orderUuid: orderPayload.uuid
            };

            const messageId = await this.topic.publishMessage({
                data: dataBuffer,
                attributes: customAttributes,
            });

            console.log(`Mensagem ${messageId} publicada com sucesso no tópico: ${this.topicName}`);
            return messageId;
        } catch (error) {
            console.error('Erro ao publicar mensagem no pub/sub:', error.message);
            throw error;
        }
    }
}

module.exports = PubSubPublisher;
