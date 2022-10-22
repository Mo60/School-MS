import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
   //when deoplying 
   // build: {
   //    outDir: 'C:/dist',
   //    emptyOutDir: true
   // },
   plugins: [vue(),
            Pages({
               dirs: 'src/views',
             })  ],
   resolve: {
     alias: {
       '@': fileURLToPath(new URL('./src', import.meta.url)),
     },
   },
})
