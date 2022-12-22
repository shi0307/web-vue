import express from 'express';
import bodyParser from 'body-parser';
const app = new express();

app.get('/get', (req, res) => {
    res.send(req.query);
});

/*
post请求 获取表单内容
extended: false 方法内部使用 querystring 模块处理请求参数的格式
extended: true 方法内部使用 qs 模块处理请求参数的格式
*/
app.use(bodyParser.urlencoded({extended: false}));
app.post('post', (req, res) => {
    res.send(req.body);
});

app.listen(8081, () => {
    console.log('express is start');
});