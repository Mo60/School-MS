import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router= createRouter({
  history: createWebHistory("app"),
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
    {path:"/faculty",
    name:"faculty",
    component:()=>import("../views/viewTeachers.vue")},
   
    {path:"/classes",
    name:"classes",
    component:()=>import("../views/viewClasses.vue"),
  },
  {path:"/classes/:ClassID",
    name:"classes2",
    component:()=>import("../views/ClassProfile.vue"),
  },
  {path:"/courses",
    name:"courses",
    component:()=>import("../views/viewCourse.vue"),
  },
            // viewTimeblock
  ,
  {path:"/viewTimeblock",
    name:"viewTimeblock",
    component:()=>import("../views/viewTimeblock.vue"),
  },
  //view Days viewDays
  {path:"/viewDays",
  name:"viewDays",
  component:()=>import("../views/viewDays.vue"),
  },
  //viewSemester
  {path:"/viewSemester",
  name:"viewSemester",
  component:()=>import("../views/viewSemester.vue"),
  },
  //facultyStatus
  {path:"/facultyStatus",
  name:"facultyStatus",
  component:()=>import("../views/facultyStatus.vue"),
  },
  //courseStatus
  {path:"/courseStatus",
  name:"courseStatus",
  component:()=>import("../views/courseStatus.vue"),
  },
  {path:"/studentStatus",
  name:"studentStatus",
  component:()=>import("../views/studentStatus.vue"),
  },
  {
    path:"/parentStatus",
  name:"parentStatus",
  component:()=>import("../views/guardianStatus.vue"),
  },
  {
    path:"/classStatus",
  name:"classStatus",
  component:()=>import("../views/classStatus.vue"),
  },
  {
    path:"/studentclassStatus",
  name:"studentClassStatus",
  component:()=>import("../views/studentClassStatus.vue"),
  },
  //guardianRelationship
  {
  path:"/guardianRelationship",
  name:"guardianRelationship",
  component:()=>import("../views/guardianRelationship.vue"),
  },
  //medical
  {
    path:"/medical",
    name:"medical",
    component:()=>import("../views/medical.vue"),
    },
    
  // student_medicalStatus
  {path:"/student_medicalStatus",
  name:"student_medicalStatus",
  component:()=>import("../views/student_medicalStatus.vue"),
  },
 // import add views   
    {path:"/addStudent",
    name:"addstudent",
    component:()=>import("../views/addStudent.vue"),
  },
  {
    path:"/addStudent/:GuardianID",
  name:"addStudent2",
  component:()=>import("../views/addStudent2.vue")
  },
    {path:"/addClass",
    name:"addclass",
    component:()=>import("../views/addClass.vue"),
  },
    {path:"/addCourse",
    name:"addcourse",
    component:()=>import("../views/addCourse.vue"),
  },
    {path:"/addfaculty",
    name:"addfaculty",
    component:()=>import("../views/addTeacher.vue"),
  },

    {path:"/addParent",
    name:"addparent",
    component:()=>import("../views/addParent.vue"),
   },

   {path:"/addParent/:studentID",
  name:"addParent2",
component:()=>import("../views/addParent.vue")},
  
  {path:"/addRoom",
    name:"addsRoom",
    component:()=>import("../views/addRoom.vue"),
  },
    {path:"/addLocation",
    name:"addLocation",
    component:()=>import("../views/addLocation.vue"),
  },
  
// Import Edit views
    {path:"/EditStudent/:StudentID",
    name:"EditStudent",
    component:()=>import("../views/EditStudent.vue"),
  },
    {path:"/EditParent/:GuardianID",
    name:"EditParent",
    component:()=>import("../views/EditParent.vue"),
  },
    {path:"/editFaculty/:FacultyID",
    name:"EditFaculty",
    component:()=>import("../views/EditTeacher.vue"),
   },
    {path:"/EditClass/:ClassID",
    name:"EditClass",
    component:()=>import("../views/EditClass.vue"),
  },
    {path:"/enroll",
  name:"enroll",
component:()=>import("../views/enroll.vue"),
},
{
  path:"/enroll/:StudentID",
  name:"enroll2",
  component:()=>import('../views/enroll2.vue')
},
{
  path:"/parents/:GuardianID",
  name:"viewParent",
  component:()=>import("../views/parentProfile.vue")
},
{
  path:"/students/:StudentID",
  name:"viewStudent",
  component:()=>import("../views/StudentProfile.vue")
},
  {path:"/EditRoom",
    name:"EditRoom",
    component:()=>import("../views/EditRoom.vue"),
  },
    {path:"/EditLocation",
    name:"EditLocation",
    component:()=>import("../views/EditLocation.vue"),
  },
{path:"/EditCourse/:CourseID",
name:"EditCourse",
component:()=>import("../views/editCourse.vue")
}
]})



export default router
