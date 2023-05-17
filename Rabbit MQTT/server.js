var mqtt = require('mqtt');
var url = 'mqtt://localhost:1883';

var payload = {
    deviceId: '8675309'
};

var client = mqtt.connect(url);

// client.on('connect', function () {

//     client.publish('airasoul', JSON.stringify(payload), { qos: 0 }, function () {
//         client.end();
//         process.exit();
//     });
// });

client.on('connect', () => {
    console.log('Connected!');
});

client.on('error', (error) => {
    console.log('Error:', error);
});

client.publish('messages', `Hello, this message was received!`);