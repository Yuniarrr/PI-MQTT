const mqtt = require('mqtt');

const brokerUrl = 'mqtt://localhost:1883'; // Replace with the IP or hostname of your broker

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('Connected to MQTT broker');

    // Subscribe to a topic
    client.subscribe('my/topic', function (err) {
        if (!err) {
            // Publish a message
            client.publish('my/topic', 'Hello, MQTT!');
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

