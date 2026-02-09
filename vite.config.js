import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite配置文件
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'blog'
  }
})