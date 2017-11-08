const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const multer=require('multer');
const multerObj=multer({dest:'./static/upload/'});
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const consolidate=require('consolidate');
const expressRoute=require('express-route');


var server = express();
server.listen(8080);

// 1. 获取请求数据
// get 自带
server.use(multerObj.any())
// 2. cookie , session
server.use(cookieParser());

(function(){

    var keys = [];
    for (var i = 0; i < 10000; i++) {
        keys[i] = 'a_' + Math.random()
    }
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20 * 60 * 1000 //20min
    }));


})();

// 3. 模板
server.set('view engine','html');
server.set('views','template');
server.engine('html',consolidate.ejs);


// 4. route

server.use('/admin',require('./route/web/1.js')());
server.use('/blog',require('./route/web/2.js')());



// 5. defaul：static
server.use(express.static('./static/'))