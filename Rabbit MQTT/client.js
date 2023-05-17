var mqtt = require('mqtt');
var url = 'mqtt://localhost:1883';

// docker run -it --name rabbit-mqtt --hostname my-rabbit -p 15672:15672 -p 5672:5672 -p 1883:1883 rabbitmq:3-management
// docker exec -it rabbit-mqtt rabbitmq-plugins enable rabbitmq_mqtt

var client = mqtt.connect(url, { clientId: 'mqtt-sub-', clean: false });

// prints a received message
client.on('message', function (topic, message) {
    console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
});

// reassurance that the connection worked
client.on('connect', () => {
    console.log('Connected!');
});

// prints an error message
client.on('error', (error) => {
    console.log('Error:', error);
});

// subscribe and publish to the same topic
client.subscribe('messages');
// client.on('message', function (topic, message) {
//     console.log('received message ', message.toString());
// });