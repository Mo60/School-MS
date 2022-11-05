import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router= createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      component: Home,
      
    },  // import main views
    {path:"/students",
    name:"students",
    component:()=>import("../views/viewStudents.vue"),
    },
    {path:"/parents",
    name:"parents",
    component:()=>import("../views/viewParents.vue"),
  },
    {path:"/teachers",
    name:"teachers",
    component:()=>import("../views/viewTeachers.vue"),meta:{
    }},
    {path:"/classes",
    name:"classes",
    component:()=>import("../views/viewClasses.vue"),
  },
 // import add views   
    {path:"/addStudent",
    name:"addstudent",
    component:()=>import("../views/addStudent.vue"),
  },
    {path:"/addClass",
    name:"addclass",
    component:()=>import("../views/addClass.vue"),
  },
    {path:"/addCourse",
    name:"addcourse",
    component:()=>import("../views/addCourse.vue"),
  },
    {path:"/addTeacher",
    name:"addteacher",
    component:()=>import("../views/addTeacher.vue"),
  },

    {path:"/addParent",
    name:"addparent",
    component:()=>import("../views/addParent.vue"),
   },

   {path:"/addParent/:studentID",
  name:"addParent2",
component:()=>import("../views/addParent.vue")},
// Import Edit views
    {path:"/EditStudent",
    name:"EditStudent",
    component:()=>import("../views/EditStudent.vue"),
  },
    {path:"/EditParent",
    name:"EditParent",
    component:()=>import("../views/EditParent.vue"),
  },
    {path:"/EditTeacher",
    name:"EditTeacher",
    component:()=>import("../views/EditTeacher.vue"),
   },
    {path:"/EditClass",
    name:"EditClass",
    component:()=>import("../views/EditClass.vue"),
  
  },
    {path:"/enroll",
  name:"enroll",
component:()=>import("../views/enroll.vue"),
},
{
  path:"/parents/:GuardianID",
  name:"viewParent",
  component:()=>import("../views/parentProfile.vue")
}
]})



export default router
