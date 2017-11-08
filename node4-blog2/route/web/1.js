const express=require('express')


module.exports=function(){
    var router = express.Router();

    router.get('/1.html', function(req, res) {
        res.send('我是admin').end();
    })
    router.get('/2.html', function(req, res) {
        res.send('我也是admin').end();
    })

    return router

}