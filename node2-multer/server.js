const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const pathLib=require('path');

var objMulter = multer({dest:'./www/upload/'});

var server = express();
server.listen(8080);

// server.use(bodyParser.urlencoded({extended:false}))
server.use(objMulter.any())

server.use('/',function(req,res){

    // 1. 获取原始文件扩展名
    // 2. 重命名临时文件
    //  文件路径 + 扩展名
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

    fs.rename(req.files[0].path,newName,function(err){
        if(err)
            res.send('上传失败')
        else
            res.send('成功')
    })
})

// path 解析路径
//  - base 文件名部分
//  - ext 扩展名部分
//  - dir 文件路径
//  - name 文件名（不含扩展名）