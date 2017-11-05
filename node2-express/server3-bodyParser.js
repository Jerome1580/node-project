const express=require('express');
const bodyParser=require('body-parser');

var server=express();
server.listen(8080);

// 用户数据
var users={
    'zhangsan':123456,
    'lisi':654321
}

// 省略‘地址’，表示接受到任意地址都进行此操作
server.use(bodyParser.urlencoded({
    extended:false,  // 扩展模式
    limit:2*1024  // 限制post传输数据大小
}))


server.use('/login',function(req,res){

    console.log(req.body) // body属性是有中间件生成的

    res.end()
})





/*server.use(bodyParser.urlencoded({
    extended:true,
    limit: 2*1024  //限制，默认100K
}))


*/
