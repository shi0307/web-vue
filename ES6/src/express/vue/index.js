import expres from "express";
import bodyParser from "body-parser";

/*
这里设置请求vue请求的服务端配置

*/

const app = new expres();
// 设置post请求解析
app.use(bodyParser.urlencoded({extended: false}))

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

app.get('/get', (req, res) => {
    if (req.query) {
        res.send(req.query);
    } else {
        res.send('请求成功');
    }
});

app.post('/post', (req, res) => {
    
    if (req.body) {
        res.send(req.body);
    } else {
        res.send('请求成功');
    }
});

app.listen('8081', () => {
    console.log('express is start success');
});