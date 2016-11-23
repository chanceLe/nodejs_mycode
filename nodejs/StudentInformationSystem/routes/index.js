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
  if(doc != null){  // console.log(doc);
    finddata.push(doc);
  }else{callback();}
})
 // console.log("finddata",finddata);
 return finddata;
}

//删除操作
var  removeDB = function(db,info,callback){
  db.collection("students").deleteMany(info,function(err,results){
    console.log(results);
    console.log("info",info);
    callback();
  })
}
// 更新操作
var updateDB = function(db,arr,callback){
  for(var i=1;i<arr.length;i++){
    console.log(arr[i]);
    var s=arr[i];
    console.log("ssssssssss",s)
    db.collection("students").updateOne({'name':arr[0]},{$set:s},function(err,results){
      // console.log(results);
      callback();
    });
  }

};



//连接  进行mongodb的操作
MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  console.log("Connected correctly to server.");

 //首页
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  //查询操作
  router.get('/find', function(req, res, next) {
    var doc = findDB(db,function(){
      console.log("find all data is Ok!")
      console.log("doc",doc);
     res.render('find',{title:"find result",info:doc});
    });

    //  console.log("doc1",doc)
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


//删除操作
router.get('/delete', function(req, res, next){
    res.render('delete', { title: 'Delete information'});
});
router.post('/delete', function(req, res, next){

    var name = req.body.name;
    //筛选比较复杂，且以名字为参数，也可以用__id字段来删除。
    // var age = req.body.age;
    // var email = req.body.email;
    // var tel = req.body.tel;
    console.log("name",name)
  removeDB(db,{name:name},function(err){
    if(err){ console.log("Delete is wrong!")}else{
      res.render("result",{title:"Delete"})
    }
  });
});

//更新操作
router.get('/update', function(req, res, next){
    res.render('update', { title: 'Update information'});
});
router.post('/update',function(req,res,next){
     var oldname = req.body.oldname;
     var name = req.body.name;
     var age = req.body.age;
     var email = req.body.email;
     var phone = req.body.phone;
     var info= [name,age,email,phone];
     var arr =[oldname];
     if(name){
       arr.push({name:name});
     }
     if(age){
       arr.push({age:age});
     }
     if(email){
       arr.push({email:email});
     }
     if(phone){
       arr.push({phone:phone});
     }

     console.log("arrrrrr",arr);
    //  {"name":name},{"age":age},{"email":email},{'phone':phone}
     updateDB(db,arr,function(err){
        console.log(err?err:"Update is OK!")
     })
     res.render("result",{title:"Update"})


})


});
/* GET home page. */
module.exports = router;
