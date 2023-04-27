import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const { resolve } = require('path');
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve:{
    // 相当于告诉程序，@表示当前路径下的res文件
    alias:{
      '@': resolve(__dirname,"res")
    }
  }
})
