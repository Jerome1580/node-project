const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();

server.listen(8080);

var arr=[];

for(var i = 0 ; i <100000;i++){
    arr.push('sign_'+ Math.random())
}

server.use(cookieParser());  // 解析cookie
server.use(cookieSession({
    name:'sess', // session session名称
    keys:arr,  // 加密，必填
    maxAge:2*3600*1000 // session 过期时间
}));


server.use('/',function(req,res){

    if(req.session['count'] ==null){
        req.session['count'] = 1;
    }else{
         req.session['count']++;
    }

        console.log(req.session)

        // 删除session
        // detele req.session['xxx']

    res.send('ok')
})