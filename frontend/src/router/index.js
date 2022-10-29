import { createRouter, createWebHistory } from 'vue-router'
import { getAuth,onAuthStateChanged } from "firebase/auth";
import Home from '@/views/Home.vue'

import { async } from '@firebase/util';

const router= createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      component: Home,
      meta:{
        requiresAuth:true
      }
    },  // import main views
    {path:"/students",
    name:"students",
    component:()=>import("../views/viewStudents.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/parents",
    name:"parents",
    component:()=>import("../views/viewParents.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/teachers",
    name:"teachers",
    component:()=>import("../views/viewTeachers.vue"),meta:{
      requiresAuth:true
    }},
    {path:"/classes",
    name:"classes",
    component:()=>import("../views/viewClasses.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/invoices",
    name:"invoices",
    component:()=>import("../views/viewInvoices.vue"),
    meta:{
      requiresAuth:true
    }},
 // import add views   
    {path:"/addStudent/:phone",
    name:"addstudent",
    component:()=>import("../views/addStudent.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/addClass",
    name:"addclass",
    component:()=>import("../views/addClass.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/addTeacher",
    name:"addteacher",
    component:()=>import("../views/addTeacher.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/addPayment",
   name:"addpayment",
   component:()=>import("../views/addPayment.vue"),
   meta:{
    requiresAuth:true
  }},
    {path:"/addParent",
    name:"addparent",
    component:()=>import("../views/addParent.vue"),
    meta:{
      requiresAuth:true
    }},
// Import Edit views
    {path:"/EditStudent",
    name:"EditStudent",
    component:()=>import("../views/EditStudent.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/EditParent",
    name:"EditParent",
    component:()=>import("../views/EditParent.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/EditTeacher",
    name:"EditTeacher",
    component:()=>import("../views/EditTeacher.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/EditClass",
    name:"EditClass",
    component:()=>import("../views/EditClass.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/EditInvoice",
    name:"EditInvoice",
    component:()=>import("../views/EditInvoice.vue"),
    meta:{
      requiresAuth:true
    }},
    {path:"/auth",
      name:"Login",
      component:()=>import("../auth/UserAuth.vue"),
      meta:{
        hideNavbar:true
      }
    },
    {
      path:"/signup",
      name:"SignUp",
      component:()=>import("../auth/signUp.vue"),
      meta:{
hideNavbar:true
    }
  },
    {path:"/enroll",
  name:"enroll",
component:()=>import("../views/enroll.vue"),
meta:{
  requiresAuth:true
}},
{path:"/payments",
name:"payments",
component:()=>import("../views/addPayment.vue")},
{path:"/addinvoice",
name:"addinvoice",
component:()=>import("../views/addInvoice.vue")}
  ]})
;

const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const removeListener=onAuthStateChanged(
      getAuth(), 
      (user)=>{
        removeListener();
        resolve(user)
      },
      reject
    )
    }
  )
  }

router.beforeEach(async(to,from,next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
if(await getCurrentUser()){
  next();
}
else{
  alert("You dont have access");
  next("/auth")
}
  }
  else next()
})

export default router
