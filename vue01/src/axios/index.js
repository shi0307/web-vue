import axios from 'axios';
import querystring from 'querystring';

/*
创建实例的方式
*/
const service = axios.create({
    baseURL: 'http://192.168.1.5:8081', // 等同于 axios.default.baseURL
    timeout: 3000,

});

// 请求拦截器 设置公共请求内容
service.interceptors.request.use( config => {
        if (config.data) {
            config.data = querystring.stringify(config.data);
        }
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        return config;
    }, 
    error => {
        Promise.reject(error);
    }
);

export default service;