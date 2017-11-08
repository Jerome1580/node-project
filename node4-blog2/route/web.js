const express=require('express');

module.exports=function(){

    var router = express.Router();

    router.get('/',function(req,res){
        res.send('我是web页面').end()
    })

    return router
}