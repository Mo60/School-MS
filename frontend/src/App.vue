<template>
  <nav class="navbar navbar-expand-lg navbar " v-if="!$route.meta.hideNavbar">
  <div class="container-fluid">
    
        <a class="navbar-brand" href="/">The Woodlands Academy of Art</a>
        <div class="links">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarNav">
         

              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
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
                        <router-link class="nav-link" to="/teachers">Teachers</router-link>
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
                        <router-link class="nav-link" to="/addteacher">Teacher</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/addClass">Class</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/addcourse">Course</router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/enroll">Enrollment</router-link>
                      </a>
                    </li>
                    <!-- <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li> -->
                  </ul>
                </li>
              </ul>
              <li class="nav-item"></li>

              <div class="col-md-4">
  <input type="search" class="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
 
</div>
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