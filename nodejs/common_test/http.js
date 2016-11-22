var http = require("http");
var qs = require("querystring");   //把http数据转成json格式.

var serv = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>welcome  to nodejs!</h1>")
}).listen(3000)
