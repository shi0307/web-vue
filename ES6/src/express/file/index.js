import fs from 'fs';
import path  from 'path';

// es6语法中，__dirname变量不能直接获取
const __dirname = path.resolve();

/*
    fs模块 用于文件的读取 写入
    文件读取 readFile方法：参数1 文件路径，参数2 读取编码格式 ， 参数3 读取之后回调函数（参数1 错误信息 参数2 文件内容）
    文件写入 writeFile方法：参数1 文件路径， 参数2 写入内容， 参数3 写入编码格式 参数4 回调函数

*/
fs.readFile(path.join(__dirname, './1.txt'), 'utf8', (error, str) => {
    if (error) {
        throw new Error(error.message);
    }
    fs.writeFile(path.join(__dirname,'./2.txt'), str, 'utf8', err => {
        if (err) {
           throw new Error(err.message);
        }
    })
});