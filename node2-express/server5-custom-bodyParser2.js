const express=require('express');
const bodyParser2=require('./lib/mybodyParser.js');

var server=express();
server.listen(8080);

/**
 *  这就是在自己写body-parser中间件
 */

server.use(bodyParser2)


server.use('/login',function(req,res){


    console.log(req.body) // body属性是有中间件生成的
    res.end()
})


