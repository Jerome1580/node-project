const fs=require('fs');


// readFile(文件名，回调函数)
fs.readFile('aaa.txt',function(err,data){
    if(err){
            console.log('读取错误')
    }else{
            console.log(data.toString()) // 读取数据二进制，转化成字符串
    }
})

fs.writeFile()