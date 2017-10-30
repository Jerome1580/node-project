const http = require('http');
const fs = require('fs')

var server = http.createServer(function(req, res) {

    var filename = '.' + req.url
    console.log(req.url)

    fs.readFile(filename, function(err, data) {
        console.log(filename)
            // Òì²½²Ù×÷
        if (err) {
            console.log(err)
            res.write('404')
        } else {
            res.write(data)
        }
        res.end();

    })


})

//  监听
server.listen(8080)
