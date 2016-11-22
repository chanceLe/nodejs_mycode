var http = require('http');
var serv = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Hello welcome to Nodejs</h1>");
    });

serv.listen(3000);
