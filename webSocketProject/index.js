var express = require('express');
var app = express();
var http = require('http').Server(app);
var socket = require('socket.io');
var port = 3000;

var server=app.listen(port,()=>{
    console.log("server listening the port "+port);
})

app.use(express.static('public'));

var io = socket(server);
var a=10;

io.on('connection',function(socket){
    console.log("socket got connected");

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })
})
