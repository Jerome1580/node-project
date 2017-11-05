const http=require('http');
const fs=require('fs')
const urlLib=require('url')


var server = http.createServer(function(req,res){


    var obj = urlLib.parse(req.url,true)

    console.log(obj)
    console.log(obj.pathname)
    console.log(obj.query)
    res.write('aaa')
    res.end()


}).listen(8080)