var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");

var url = 'mongodb://chancele:buer1992@ds159517.mlab.com:59517/student';

//插入操作
var mydbInit  = function(db,callback){
  db.collection('restaurants').insertOne({name:"zhangsan",age:18,city:"Peking"},function(err,result){
    assert.equal(err,null);
    console.log("insertone");
    callback();
  })
}

//查询操作
var findDB = function(db,callback){
  //1代表升序， -1代表降序。
var cursor = db.collection("restaurants").find().sort({'borough':1});
cursor.each(function(err,doc){
  assert.equal(err,null);
  if(doc != null){console.dir(doc);}else{callback();}
})
}

//更新操作
var updateDB = function(db,callback){
  db.collection("restaurants").updateOne({'name':"zhangsan"},{$set:{"age":25,'city':"chengdu"}},function(err,results){
    console.log(results);
    callback();
  });
};

//删除操作
var removeDB = function(db,callback){
  db.collection("restaurants").deleteMany({name:"zhangsan"},function(err,results){
    console.log("results");
    callback();
  })
};
MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  console.log("Connected correctly to server.");

  // 插入操作
  //  mydbInit(db,function(){
  //    console.log("Init OK")
  //  })

  //查询操作
  findDB(db,function(){
    console.log("complete!")
  })

   //更新操作
  // updateDB(db,function(){
  //   console.log("update OK!")
  // })

//查询操作
  // findDB(db,function(){
  //   console.log("complete!")
  // })

//删除操作
  // removeDB(db,function(){
  //   console.log("remove is OK!")
  // })

  db.close();
})
