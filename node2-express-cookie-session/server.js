const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();

server.listen(8080);


// 读取cookie
server.use(cookieParser('sdasdsa'));


server.use('/aaa',function(req,res){

    req.secret = 'sdasdsa'  // 签名 ,如果cookieParser('sdasdsa')写了，这一句话可以省略

    console.log(req.cookies)

    // 发生cookie
    res.cookie('user','blue',{signed:true});


        console.log('签名的cookie',req.signedCookies)
        console.log('无签名的cookie',req.cookies)

    // 删除cookie
    // res.clearCookie('user')

    res.send('ok')
})