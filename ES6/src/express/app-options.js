import express from 'express';

/*
这里处理跨域请求问题：
*/

const app = new express();
app.all('*',function(req, res, next){
    // 设置允许跨域的域名，* 代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers', 'content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');

    if (req.method.toLowerCase() == 'options') {
        // 浏览器的options请求快速响应
        res.send(200);
    } else {
        next();
    }
});