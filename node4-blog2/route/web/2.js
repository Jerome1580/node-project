const express=require('express')


module.exports=function(){
    var router = express.Router();

    router.get('/1.html', function(req, res) {
        res.send('我是blog').end();
    })
    router.get('/2.html', function(req, res) {
        res.send('我也是blog').end();
    })

    return router

}