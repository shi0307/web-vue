const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('core-js/fn/promise');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  resolve: {
    alias: {
      '@': resolve('src'),  // 这里设置 @ 引入根目录
    }
  }
})