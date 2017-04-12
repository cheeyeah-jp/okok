var express = require('express');
var router = module.exports=express.Router();

/* GET home page. */
router.all('/', function(req, res) {
var get=req.body;
console.log("名字："+get.name+"  密码："+get.psw);
  res.render('index');
});




