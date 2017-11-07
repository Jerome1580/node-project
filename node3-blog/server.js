const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const pathLib=require('path');
const consolidate=require('consolidate');
const mysql=require('mysql');
const common = require('./libs/common')

// 连接池
const db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});

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



// 4.配置模板引擎

// 输出什么东西
server.set('view engine','html')
// 模板文件放在哪了
server.set('views','./template/')
// 那种模板引擎
server.engine('html',consolidate.ejs)



// 接受用户请求
server.get('/',(req,res,next)=>{
     // 查询banner的东西
    db.query('SELECT * FROM banner_table' ,(err,data)=>{
        if(err){
            res.status(500).send('database error').end();
        }else{
            res.banners=data;
            next();
        }
    })

})


server.get('/',(req,res,next)=>{

    // 查询文章列表
   db.query('SELECT ID,title,summary FROM article_table',(err,data)=>{
    if(err){
        res.status(500).send('database error').end();
    }else{
        res.articles=data;

        next();
    }
   })
})

server.get('/',(req,res)=>{

    res.render('index.ejs',{banners:res.banners,articles:res.articles})

})


server.get('/article',(req,res)=>{
    if(req.query.id){

        db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
                 res.status(500).send('数据有问题').end();
            }else{
                if(data.length==0){

                    res.status(404).send('您请求的文章找不到').end();

                }else{
                    var articleData = data[0];
                    articleData.sDate = common.time2date(articleData.post_time);
                    articleData.content=articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');

                    res.status(200).render('conText.ejs',{articleData:articleData})
                }
            }
        })

    }else{
        res.status(404).send('您请求的文章找不到').end();
    }



})

// 4.static数据
server.use(express.static('./www/'))

