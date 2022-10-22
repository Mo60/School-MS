import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import routes from '~pages'

routes.push({
  path: '/',
  component: Home,
});
  
export default createRouter({
  history: createWebHistory(),
  routes,
})
