const http=require('http');
const fs=require('fs')

var server = http.createServer(function(req,res){

    var filename = '../www' + req.url

    fs.readFile(filename,function(err,data){
        // �첽����
        if(err){
                console.log(err)
            res.write('404')
        }else{
            res.write(data)
        }
        res.end();

    })


})

// ���� -�ȴ�
server.listen(8080)