const express=require('express');
// const expressStatic=require('express-static');

var server=express();
server.listen(8080)

server.get('/a',function(req,res){
    res.send('get a 请求的页面')
    // res.end()
})

server.post('/b',function(req,res){
    res.send('post b 请求的页面')
    // res.end()
})

server.use(function(req,res){
    res.send('无论是get，还是post都会返回的页面，在上面的两个方法没搂住的情况显示')
    res.end()
})

server.use(express.static('./www'))

