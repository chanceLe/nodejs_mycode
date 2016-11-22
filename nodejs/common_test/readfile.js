var fs = require('fs');
fs.readFile('package',"utf-8",function(err,data){
    if(err){
    console.error(err)
    }else{
    console.log(data)}
})
console.log("Complete readfile!")
