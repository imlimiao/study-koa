/*
 不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。
* */

//1.引入http模块
//2.用http模块创建服务

/*
 req获取url信息   （request）
 res 浏览器返回响应信息 （response）
 * */

var http = require('http');
http.createServer(function(req, res) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf-8

    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });

    res.write('i am studyding nodejs====111');

    res.write('my first node-demo=======????');

    res.end('结束了----');


}).listen(8001, 'localhost', () => {
    console.log('服务启动成功啦～～～～');
});