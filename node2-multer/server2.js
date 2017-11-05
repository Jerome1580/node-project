const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const pathLib=require('path');
const consolidate=require('consolidate');




var server = express();
server.listen(8080);


// 1.解析cookie

server.use(cookieParser('dsadsaddsadsadggfdgr'))

// 2.使用session
var arr=[];
for (var i = 0; i < 10000; i++) {
    arr.push('keys_'+ Math.random())
}
server.use(cookieSession({name:'sess',keys:arr,maxAge:20*3600*100}))

// 3.post数据
server.use(bodyParser.urlencoded({extended:false}))
server.use(multer({dest:'./www/upload/'}).any())

// 用户请求
server.use('/a',function(req,res,next){

    console.log(req.query,req.body,req.files,req.coolies,req.session)

})


// 4.配置模板引擎

// 输出什么东西
server.set('view engine','html')
// 模板文件放在哪了
server.set('views','./views/')
// 那种模板引擎
server.engine('html',consolidate.ejs)

// 接受用户请求
server.get('/index',function(req,res){

     res.render('1.ejs',{name:'raoju'})
/*    if(req.session.userid){
        // 登录过
        res.render('1.ejs',{name:'raoju'})
    }else{
        res.render('login.ejs'})
    }*/
})

// 4.static数据
server.use(express.static('./www/'))

