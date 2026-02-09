import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite配置文件
export default defineConfig({
  plugins: [vue()],
  base: '/blog/',
  build: {
    outDir: 'blog',
    assetsDir: 'assets'
  }
})