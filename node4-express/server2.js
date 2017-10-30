const express=require('express');
// const expressStatic=require('express-static');

var server=express();
server.listen(8080);

// 用户数据
var users={
    'zhangsan':123456,
    'lisi':654321
}

server.get('/login',function(req,res){
    var user = req.query['user'];
    var pass = req.query['pass'];

    if(users[user] == null){
        res.send({ok:false,msg:'此用户不存在'})
    }else{
        if(users[user] != pass){
            res.send({ok:false,msg:'密码错了'})
        }else{
            res.send({ok:true,msg:'成功'})
        }
    }
    res.end()
})

server.post('/b',function(req,res){
    res.send('post b 请求的页面')
    // res.end()
})


// 可以把一个个接口展开
server.get('/changePass',function(req.res){})



server.use(express.static('./www'))

