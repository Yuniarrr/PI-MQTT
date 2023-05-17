const mqtt = require('mqtt');

const brokerUrl = 'mqtt://localhost:1883'; // Replace with the IP or hostname of your broker

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('Connected to MQTT broker');
});

client.on('error', (error) => {
    console.log('Error:', error);
});

client.publish('my/topic', `Hello, this message was received!`);