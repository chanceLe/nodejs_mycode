// var http = require("http");
// var qs = require("querystring");   //把http数据转成json格式.
//
// var serv = http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end("<h1>welcome  to nodejs!</h1>")
// }).listen(3000)


/*
var http  = require("http");

var qs = require("querystring");
console.log(qs.parse("name = jhon"));
var serv = http.createServer(function(req,res){
    console.log(req);
    console.log(res);
    if("/" == req.url){

  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(["<h1>welcome</h1>","<form method='POST' action='/index'>","<fieldset>","<label>Personal information</label>",
"<p>name</p>","<input type='text' name='name'>","<p><button>Submit</button></p>","</form>"].join(' '));
    } else if( "/index" == req.url){
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end("<h1> You sent a "+req.method+" request</h1>")
    }  else{
      res.writeHead(404,{"Content-Type":"text/html"});
      res.end("Not Found");
    }
}).listen(3006);
*/

var http  = require("http");

var qs = require("querystring");
console.log(qs.parse("name = jhon"));
var serv = http.createServer(function(req,res){
    console.log(req);
    console.log(res);
    if("/" == req.url){

  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(["<h1>welcome</h1>","<form method='POST' action='/index'>","<fieldset>","<label>Personal information</label>",
"<p>name</p>","<input type='text' name='name'>","<p><button>Submit</button></p>","</form>"].join(' '));
    } else if( "/index" == req.url & 'POST' == req.method){
      var name = "";
      req.on('data',function(chunk){
        name += chunk;
      })
      req.on("end",function(){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(["<h1> You sent a "+req.method+" request</h1>","<h2>"+qs.parse(name).name+"</h2>"].join(' '));
      })
    }  else{
      res.writeHead(404);
      res.end("Not Found");
    }
}).listen(3010);
