var mongoose = require('mongoose');
var url = 'mongodb://chancele:buer1992@ds159517.mlab.com:59517/student';
mongoose.connect(url);
//连接数据库
var db = mongoose.connection;
db.on("error",function(){
  console.log("connect error");
});

db.once("open",function(){
  console.log("mongoose working");
})


//定义一个schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name:String,
  age:Number,
  DOB:Date,
  isAlive:Boolean
});

//将上边的schema发布为model，变量名的首字母一定大写
var User = mongoose.model('user',userSchema);

var arvind = new User({
  name:"zhangsan",
  age:20,
  DOB:2016-11-22,
  isAlive:true
});

//使用entity，存储数据库
arvind.save(function(err,data){})

//使用model进行查询
User.findOne({},function(err,data){
  console.log(data);
})


User.remove({name:'David'},function(err){
  console.log("remove");
  if(err){console.log(err)};
})

User.find({},function(err,data){
  console.log("find");
  console.log(data);
})
