var express =require("express");
var app=express();
app.get('/',function(req,res){
    res.sendFile("index.html",{root:__dirname});

})
app.listen(6500);
console.log("server is listening at port");