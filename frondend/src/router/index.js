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
  
// Import create views
import CreateStudentView from '../views/CreateViews/CreateStudentView.vue'
import CreateParentView from '../views/CreateViews/CreateParentView.vue'
import CreateTeacherView from '../views/CreateViews/CreateTeacherView.vue'
import CreateClassView from '../views/CreateViews/CreateClassView.vue'
import CreateInvoiceView from '../views/CreateViews/CreateInvoiceView.vue'

})

// Import edit views
import EditStudentView from '../views/EditViews/EditStudentView.vue'
import EditParenttView from '../views/EditViews/EditParentView.vue'
import EditTeacherView from '../views/EditViews/EditTeacherView.vue'
import EditClassView from '../views/EditViews/EditClassView.vue'
import EditInvoiceView from '../views/EditViews/EditInvoiceView.vue'





export default router
