// server.js
var express = require('express');
var app = express();
var httpServer = require("http").createServer(app);
var five = require("johnny-five");
var io = require('socket.io')(httpServer);

var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/main.html');
});

httpServer.listen(port);
console.log('Server available at http://localhost:' + port);
var led;

//Arduino board connection

var board = new five.Board();
board.on("ready", function () {
    console.log('Arduino is ready.');
    led = new five.Led(13);
    led.on();
});

//Socket connection handler
io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('led:on', function (data) {
        led.on();
        console.log(data);
    });

    socket.on('led:off', function (data) {
        led.off();
        console.log('LED OFF RECEIVED');

    });
    socket.on('new', function (msg) {
        console.log(msg);
        socket.broadcast.emit(msg);
    })
    socket.on('newanalysis', function (msg) {
        console.log(msg);
        socket.broadcast.emit(msg);
    })
});

console.log('Waiting for connection');
