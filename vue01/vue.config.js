const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  /*
    设置客户端跨域请求配置，使用代理服务器方式。
  */
  devServer: {
    port: 8080, // 项目启动监听端口
    host: '192.168.1.5', // 项目启动地址
    open: false, // 每次启动项目，自动打开浏览器网址。
    // 设置客户端跨域配置: 起一个代理服务器，跨域的时候，浏览器发送请求到代理服务器，代理服务器发给真实服务器，之后返回数据。
    proxy: {
      '/post': { // '/post' 请求会被代理到target指定的真实服务器中，
        target: 'http://192.168.1.5:8081',  // 指定访问的真实服务器地址。这里直接是host + 端口。
        changeOrigin: true, // 是否告诉真实服务器请求的源地址，true改变源， false 不改变源。
        ws: true, // 用于支持 websocket协议。
        pathRewrite: {
          '^/post': '/post' // 正则匹配/post 路径 真实请求时，转化为其他的请求路径。
        }
      }
    }

  }
  
})