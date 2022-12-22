import express from "express";

const app = new express();

app.get('/get', (req, res, next) => {
    next();
})

app.get('/get', (req, res, next) => {
    next();
})

app.use('/get', (req, res, next) => {
    res.send('app use is success');
})

/* 
app.use 默认匹配所有的请求，类似于拦截器能力，使用next() 放行。
使用场景：   1 路由保护： 判断用户是否登录，token等。
            2 网站维护公告
            3 自定义404页面 res.status(404).send() 
*/
app.use((req, res, next) => {
    if (req.query) {
        req.query.age = '18';
        // res.send(req.query.age);
    } else {
       //  res.send('success');
    }
    next();
})

app.get('/error', (req, res) => {
    throw new Errow('程序发生了未知报错');
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
})

/*
app.use() 可以调用外部定义的函数等。
*/
app.use(fun());
function fun() {
    return  function(req, res, next){
        next();
    }
}

app.listen(8082, () => {
    console.log('8082 expres is start')
})