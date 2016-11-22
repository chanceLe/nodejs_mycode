module.exports = function(app){
app.get("/",function(req,res){
  res.send("./1.html");
})
app.get("/doc",function(req,res){
  res.send("document");
})
app.get("/index",function(req,res){
  res.send("indexhtml");
})
app.get("/file",function(req,res){
  res.sendfile("./routes/1.html");
})
}
