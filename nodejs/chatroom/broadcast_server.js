var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get('/',function(req,res){
  res.sendFile(__dirname + '/broadcast.html');
})

io.on('connection',function(socket){
  socket.broadcast.emit("broadcast");
  socket.on("chat message",function(msg){
    io.emit("chat message",msg);
  })
})

http.listen(3031,function(){
  console.log("listenning on 3031 port");
})
