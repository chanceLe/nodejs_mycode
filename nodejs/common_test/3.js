var name;
exports.setName = function(myname){
  name = myname;
}
exports.nameHello = function(){
  console.log("hello" + name);
}
