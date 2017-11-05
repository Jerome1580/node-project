const express=require('express');
const querystring=require('querystring');

// const bodyParser=require('body-parser');

var server=express();
server.listen(8080);

/**
 *  这就是在自己写body-parser中间件
 */

// 链式操作  监听同一个请求，构成链式操作，调用next
server.use(function(req,res,next){
    var str = '';
    req.on('data',function(data){
        str += data;
    })

     req.on('end',function(){
        req.body = querystring.parse(str);
        next() // 执行下一步
    })

})


server.use('/login',function(req,res){

    console.log(req.body) // body属性是有中间件生成的

    res.end()
})
