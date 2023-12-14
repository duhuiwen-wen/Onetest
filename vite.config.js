import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pxtorem from 'postcss-px-to-viewport';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //配置根目录为相对路径
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          // rootValue: 75, // 这里写设计稿的宽度/10即可，例如设计稿宽度是750px就写75
          // vant默认是37.5，如果是使用了vant的话可以像下面这样写
          rootValue(res) {
            return res.file.indexOf("vant") !== -1 ? 37.5 : 75;
          },
          propList: ['*'], // 需要转换的属性，默认转换所有属性
          selectorBlackList: [] // CSS选择器黑名单，防止部分选择器被转换
          // exclude: /\/node_modules\//i, // 忽略包文件转换rem
        })
      ]
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        // target: 'http://ceshi13.dishait.cn',
        // target: 'http://sceshi14.dishait.cn',
        // target: 'https://zhd.taolianpay.com',
        target: 'https://duanju.taolianka.com/',
        // target: 'http://192.168.1.102/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
