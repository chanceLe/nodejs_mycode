var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
})

io.on('connection',function(socket){
  socket.on("chat message",function(msg){
    io.emit("chat message",msg)
  })
})

io.sockets.on('connection',function(socket){
  socket.on("ferret",function(name,fn){
    fn('woot');
  })
})
http.listen(3030,function(){
  console.log("listenning on 3000 port");
})
