import express from 'express';

/*
路由模块
*/
const home = express.Router();
home.get('/index', (req, res) => {
    res.send("欢迎登陆home页面");
});

export default home;