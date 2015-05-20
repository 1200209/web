var express = require('express');
var app = express();

var connect = require('connect');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//app.listen(8080);
var http = require('http').createServer(app).listen(8080);
var io = require('socket.io').listen(http);


 //接続

 io.sockets.on('connection', function (socket) {
     socket.on('count',function(num){ 
 	 num.value = Number(num.value) + 1;
	 console.log(num.value);
 	socket.emit('count send',num);
 	socket.broadcast.emit('count send',num);
     });

     socket.on('dahai',function(img){
	 
     });
	
    
     // 切断
     socket.on('disconnect', function () {
         io.sockets.emit('user disconnected');
	 console.log('disconnected');
     });
 });

