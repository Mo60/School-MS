<template>
  <nav class="navbar navbar-expand-lg navbar " v-if="!$route.meta.hideNavbar">
  <div class="container">
    
        <a class="navbar-brand" href="/">The Academy of Art</a>
        <div class="links">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarNav">
         

              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>

                 <!-- view frop down -->
                  <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">View</a>
                   <ul class="dropdown-menu " aria-labelledby="">
                     <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/students">Students</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/parents">Parents</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/faculty">Faculty</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/classes">Classes</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/courses">Courses</router-link>
                      </a>
                    </li>
                 
                    <!-- <li> -->
                      <!-- <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li> -->
                     </ul>
                   </li>
                <!-- create drop down -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Create</a>
                  <ul class="dropdown-menu " aria-labelledby="">
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/addstudent">Student</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/addfaculty">Faculty</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/addClass">Class</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/addCourse">Course</router-link>
                      </a>
                    </li>
                    
                    <!-- <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li> -->
                  </ul>
                </li>
                <!--Settings -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                  <ul class="dropdown-menu " aria-labelledby="">
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/viewTimeblock">Timeblocks</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/viewSemester">Semesters</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/viewDays">Days</router-link>
                      </a>
                    </li>
                    <!-- facultyStatus -->
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/facultyStatus">Faculty Status</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/courseStatus">Course Status</router-link>
                      </a>
                    </li>
                    <!-- student_medicalStatus -->
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/student_medicalStatus">Student Medical Status</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/studentStatus">Student Status</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/parentStatus">Guardian Status</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/classStatus">Class Status</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/studentclassStatus">Student Class Status</router-link>
                      </a>
                    </li>
                    <!-- guardianRelationship and medica; -->
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/guardianRelationship">Guardian Relationship</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/Medical">Medical Condition</router-link>
                      </a>
                    </li>
                  </ul>
                </li>
                
              </ul>
         

            </div>
     
  </div >
      </div>
   
  </nav>
  <main>
 <RouterView></RouterView> 
  </main>
</template>


<style>
@import "./assets/app.css";
</style>

<script>
export default{
data(){
  return{
isLoggedIn:""
  }
},
}

</script>