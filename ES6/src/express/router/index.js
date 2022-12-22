import express from 'express';
import home from './home.js';

/*
使用express的路由模块
express使用路由模块，路径为 /home,既/home访问到home路由模块，然后再拼接路由模块中的其他路径。这里的完整路径为：http://localhost:/home/index
*/
const app = new express();
app.use('/home', home);

app.listen(8083, () => {
    console.log('8083 express is start');
});
