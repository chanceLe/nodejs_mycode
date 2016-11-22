//fs操作
/*
var fs = require("fs");

fs.readFile("./hello.md","utf-8",function(err,data){
  if (err){
    console.log(err);
  } else{
     console.log(data);
  }
})

 // var fs = require("fs");
  //var data = fs.readFileSync("hello.md","utf-8")
 //console.log(data);



var fs = require("fs");
var filename = "./hello.md"
fs.writeFile(filename,"hello angularjs",function(err){
  if(err){
    console.log(err);
  }
})


var fs = require("fs")
fs.writeFileSync("./hello.md","hello china","utf-8")

var fs = require("fs");
var util = require("util");
var exists = fs.exists("./event.md",function(exists){
   util.debug(exists ? "exists" : "not found");
})


var fs = require("fs");
var util = require("util");
var exists = fs.exists("./tmp/",function(exists){
  exists ? (fs.rmdir("./tmp/",function(err){
    if(err){
    console.error(err);}
    else{
      console.log("Rmdir end.")
    }
  })) :( fs.mkdir("./tmp/",function(err){
    if(err){
    console.error(err);}else{
      console.log("Makedir Complete!")
    }
  }))
})
*/

//目录和文件跨级操作
/*
var fs = require("fs");
var util = require("util");
var exists = fs.exists("./tmp/",function(exists){
    if(exists){
      fs.readFile("./tmp/hello.md","utf-8",function(err,data){
          err ? console.log(err) : console.log(data);
      })
      fs.unlink("./tmp/hello.md",function(err){
          err ? console.log(err) : console.log("Unlink is Ok!");
      });
      fs.rmdir("./tmp/",function(err){
          err ? console.log(err) : console.log("Rmdir is OK!");
      });
    }else{
      fs.mkdir("./tmp/",function(err){
          err ? console.log(err) : console.log("Create Complete!");
    })
      fs.writeFile("./tmp/hello.md","hello world",function(err){
          err ? console.log(err) : console.log("Write is OK!");
    })
    }
})*/

// var fs = require("fs");
// fs.stat("./tmp",function(err,stats){
//   err ? console.log(err) : console.log(stats);
// })
// fs.stat("./test.js",function(err,stats){
//   err ? console.error(err) : console.log(stats);
// })
var s='';
console.log(!s)
