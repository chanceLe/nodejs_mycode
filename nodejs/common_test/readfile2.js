var fs = require('fs');
var data = fs.readFileSync("package.json","utf-8")
console.log(data);
console.log("readfile end!")
