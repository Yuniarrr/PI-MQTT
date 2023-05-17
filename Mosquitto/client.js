const mqtt = require('mqtt');

// docker pull eclipse-mosquitto
// docker run -it --name mqtt-mosquitto -p 1883:1883 -p 9001:9001 eclipse-mosquitto

const brokerUrl = 'mqtt://localhost:1883'; // Replace with the IP or hostname of your broker

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('Connected to MQTT broker');
});

client.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on('error', (error) => {
    console.log('Error:', error);
});

client.subscribe('my/topic');