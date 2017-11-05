const express=require('express');


var server = express();
server.listen(8080);

// 目录1：/user/
var routerUser = express.Router();

server.use('/user',routerUser)

routerUser.get('/1.html',function(req,res){
    res.send('user1')
})

routerUser.get('/2.html',function(req,res){
    res.send('user2222')
})




