const express = require('express');
const app = express();

var memberRouter = require('./brid');
var middleWare = require('./middleware');
console.log(__dirname, "__dirname")
app.use('/brid', memberRouter);
app.use('/middleWare', middleWare);

app.use(express.static('static', {}));

// 使用数据库模型
const model=require("../models")

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
app.listen(3000, 'localhost', () => {
    console.log('Example app listening on port 3000!')
})