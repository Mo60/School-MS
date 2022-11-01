<template>
  <div class="wrapper4">
   <h1 class="mb-3 mt-3">Course</h1>
   <div class="empty-arr mt-5" v-if="Class.length == 0 && loaded">
      <p>No Courses Found</p>
      <a class="btn mt-3"><router-link :to="{name:'addcourse'}">Add Course</router-link></a>
    </div>
      <table class="table table-striped mt-5" v-else>
      <thead class="table">
        <tr>
         <th>Course ID</th>
         <th>Course Status ID</th>
         <th>Course Name</th>
         <th>Description</th>
        </tr>
      </thead>  
      <tbody v-for="c in Course" :key=c.CourseID>
        
         <tr><td>{{c.CourseID}}</td>
         <td>{{c.CourseStatusID}}</td>
         <td>{{c.CourseName}}</td>
         <td>{{c.Description}}</td>
      </tr>
    </tbody>
    
  </table></div>   
  </template>
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        Course: [],
      loaded:false
      }
    },
    created() {
      // Get all the courses from database
      axios.get('http://172.26.54.21:8082/api/course/')
      .then(res => {
        this.Course = res.data
      }).catch(err => {
        alert("Data could not be fetched")
      })
      this.loaded=true
    },
    methods: {
      // Handles deleting of courses
      deleteCourse(course_id){
        if (window.confirm("Do you really want to delete this course?")) {
          axios.delete(``).then(() => {
            this.Course.splice(this.Course.findIndex(i => i.course_id === course_id), 1);
          }).catch(error => {
            alert("Course could not be deleted")
          });
        }
      }
    }
  }

</script>
