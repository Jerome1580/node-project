const jade = require('jade');
const ejs = require('ejs');

var str = jade.renderFile('./www/1.jade',{pretty:true,
    style:{width:'90px',height:'100px',backgroud:'red'},
    arr:['box','active','main-pannel']
});

// console.log(str)

ejs.renderFile('./www/1.ejs',{pretty:true,
    arr:['box','active','main-pannel','<h2>这是h2标签</h2>']
},function(err,data){
    if(err)
        console.log(err)
    else
        console.log(data)
})


