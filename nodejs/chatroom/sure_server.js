var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/",function(req,res){
  res.sendFile(__dirname + '/sure_client.html')
})


io.on("connection",function(socket){
  socket.on("chat message",function(msg){
    io.emit("chat message",msg);
  })
})

io.sockets.on("connection",function(socket){
  socket.on("ferret",function(name,fn){
    fn('woot');
  })
})

http.listen(3000,function(){
  console.log("listenning 3000 port");
})
