var express = require('express');
var router = express.Router();
//-----------------------------------------------------------------
//添加对数据库的操作
var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");
var url = 'mongodb://chancele:buer1992@ds159517.mlab.com:59517/student';

//插入操作
var insertOperation  = function(db,info,callback){
  db.collection('students').insertOne(info,function(err,result){
    assert.equal(err,null);
    console.log("insertone");
    callback();
  })
}

//查询操作
var findDB = function(db,callback){
  var finddata=new Array();
var cursor = db.collection("students").find();
cursor.each(function(err,doc){
  assert.equal(err,null);
  if(doc != null){ console.log(doc);finddata.push(doc);return "hello";}else{callback();}
})
return finddata;
}

MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  console.log("Connected correctly to server.");

 //首页
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  //查询操作
  // router.get("/find",function(req,res,next){
  //   res.render("find",{ title:"find"})
  // })
  router.get('/find', function(req, res, next) {

    var doc = findDB(db,function(){
      console.log("find all data is Ok!")
      console.log(doc);
    });
    res.render('find',{title:"find result",info:doc});
  })


  // 插入操作
  router.get("/add",function(req,res,next){
    res.render("add",{ title:"add"})
  })
  router.post('/add', function(req, res, next) {

     var info = {
      name:req.body.name,
      age:req.body.age,
      email:req.body.email,
      phone:req.body.phone
     }
     insertOperation(db,info,function(){
       console.log("Insert OK!")
     })
     //返回结果。
    res.render('result',{title:"result"});
  })
})

/* GET home page. */
module.exports = router;
