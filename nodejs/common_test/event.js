var EventEmitter = require('events').EventEmitter; //引入模块
var event = new EventEmitter();  //创建事件队列对象

event.on("some_event",function(){
  console.log("some_event occured!")    //注册事件和回调函数。
})

setTimeout(function(){
  event.emit("some_event");       //触发事件，传给事件队列，事件队列调用相应事件回调函数
},1000)
