const express=require('express');
const expressStatic=require('express-static');

var server=express();

/*server.use('/a',function(req,res){
    res.send('abc')
    res.end()
})*/

server.listen(8080)

server.use(expressStatic('./www'))
