const http=require('http');
const fs=require('fs')
const urlLib=require('url')


var server = http.createServer(function(req,res){

    // post --req

    var str =''

    // data - 有一段数据到达（很多次）
    req.on('data',function(data){
        str += data;
    })
    // end - 数据全部到达（一次）
    req.on('end',function(){
            console.log(str)
    })

    res.write('aaa')
    res.end()


}).listen(8080)