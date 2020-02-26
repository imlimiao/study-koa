const express = require('express');
const app = express();
var https = require('https');
var http = require('http');
var fs = require('fs');
const path = require('path');

//同步读取密钥和签名证书
// 让其支持 HTPPS服务
var options = {
    key: fs.readFileSync(path.join(__dirname, '../keys/private.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../keys/file.crt'))
}

var memberRouter = require('./brid');
var middleWare = require('./middleware');
var sequelize = require('./models');
console.log(__dirname, "__dirname")
app.use('/brid', memberRouter);
app.use('/middleWare', middleWare);
app.use('/sequelize', sequelize);

app.use(express.static('static', {}));

// 使用数据库模型


//


// app.use((req, res) => {
//     res.json({
//         'name': 'limiao'
//     })
// });

//express 路由
/*
app.get('/', (req, res) => {
    res.json({
        'hello': 'Hello World!'
    });
    res.send('tom==post');
});

app.get('/name/:age', (req, res) => {
    let { age } = req.params;
    res.json({
        'name': 'limiao',
        'age': age
    })
});
app.post('/name', (req, res) => {
    res.send('tom==post')
});

app.all('/age', (req, res) => {
    res.json({
        'message': 'demo',
        'method': req.method,
        'uri': req.path
    })
});
*/

var httpsServer = https.createServer(options, app);
var httpServer = http.createServer(app);
// //https监听3000端口
httpsServer.listen(3001, 'localhost', () => {
    console.log('Example app listening on port 3000!')
});
//http监听3001端口
httpServer.listen(3000, 'localhost', () => {
    console.log('Example app listening on port 3000!')
});


// app.listen(3000, 'localhost', () => {
//     console.log('Example app listening on port 3000!')
// })