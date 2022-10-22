import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router= createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      component: Home,
    },
    {path:"/students",
    name:"students",
    component:()=>import("../views/viewStudents.vue")},
    {path:"/parents",
    name:"parents",
    component:()=>import("../views/viewParents.vue")},
    {path:"/teachers",
    name:"teachers",
    component:()=>import("../views/viewTeachers.vue")},
    {path:"/classes",
    name:"classes",
    component:()=>import("../views/viewClasses.vue")},
    {path:"/invoices",
    name:"invoices",
    component:()=>import("../views/viewInvoices.vue")},
  ]

})

export default router