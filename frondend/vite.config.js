import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   //when deoplying 
   // build: {
   //    outDir: 'C:/dist',
   //    emptyOutDir: true
   // },
   plugins: [vue()],
   resolve: {
     alias: {
       '@': fileURLToPath(new URL('./src', import.meta.url)),
     },
   },
})
