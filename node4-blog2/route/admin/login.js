const express=require('express');
const common=require('../../libs/common');
const mysql=require('mysql');

var db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'learn'});

module.exports=function(){

    var router = express.Router();

    //单纯访问页面
    router.get('/',function(req,res){
        res.render('admin/login.ejs')
    })

    // 提交用户名密码
    router.post('/',function(req,res){

        var username = req.body.username;
        var password = common.md5(req.body.password + common.MD5_SUFFIX);

        db.query(`SELECT * FROM admin_table where username = '${username}'`,(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('datase error').end()
            }else{
                if(data.length == 0 ){
                    res.status(400).send('no this admin').end()
                }else{
                    if(data[0].password == password){
                        // 成功
                        req.session['admin_id']= data[0].ID; // 赋值session
                        res.redirect('/admin/')
                    }else{
                         res.status(400).send('this password is incorrect').end()
                    }
                }
            }
        })

    })


    return router
}