var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'zhangsan' });
});

router.get("/about",function(req,res,next){
  var info = [{name:"zhangsan",age:18},{name:"lisi",age:20},{name:"zhaowu",age:21}];
  res.render('index',{info:info,title:"Information"})
})
module.exports = router;
