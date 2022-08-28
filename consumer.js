// consumer listens for messages from RabbitMQ

// dependency
// npm install amqplib

// we open a connection and a channel, and declare the queue from which we're going to consume.
var amqp = require('amqplib/callback_api');

const QUEUE_URL='amqp://localhost'
const QUEUE_NAME='hello'

amqp.connect(QUEUE_URL , function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = QUEUE_NAME;

        channel.assertQueue(queue, {
            durable: false
        });

        // Since it will push us messages asynchronously, 
        // we provide a callback that will be executed when RabbitMQ pushes messages to our consumer.

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received '%s'", msg.content.toString());
        }, {
            noAck: true
        });
    });
});