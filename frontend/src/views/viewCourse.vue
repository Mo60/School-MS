<template>
  <div class="wrapper4">
   <h1 class="mb-3 mt-3">Course</h1>
   <div class="empty-arr mt-5" v-if="Course.length == 0 && loaded">
      <p>No Courses Found</p>
      <a class="btn mt-3"><router-link :to="{name:'addcourse'}">Add Course</router-link></a>
    </div>
      <table class="mt-5" v-else>
      <thead class="">
        <tr>
         <th>Course ID</th>
         <th>Course Status ID</th>
         <th>Course Name</th>
         <th>Description</th>
         <th>Action</th>
        </tr>
      </thead>  
      <tbody v-for="c in Course" :key=c.CourseID>
        
         <tr><td>{{c.CourseID}}</td>
         <td>{{c.CourseStatusID}}</td>
         <td>{{c.CourseName}}</td>
         <td>{{c.Description}}</td>
         <td><router-link :to="{name:'EditCourse',params:{CourseID:c.CourseID}}"></router-link></td>
      </tr>
    </tbody>
    
  </table></div>
  
  
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>

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
