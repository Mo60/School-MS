import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   //when deoplying 
   // build: {
   //    outDir: 'C:/dist',
   //    emptyOutDir: true
   // },
   plugins: [vue()]
})
