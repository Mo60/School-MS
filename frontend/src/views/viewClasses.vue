<template>
  <h1 class="mt-5">Classes</h1>
<div class="flex-wrapper" v-if="Class.length == 0 && loaded">

     <div class="empty-arr" >
        <p>No Classes Found</p>
        <a class="btn mt-3"><router-link :to="{name:'addclass'}">Add Class</router-link></a>
      </div>
</div>
    <div class="wrapper" v-else>
      <table class="table table-striped mt-5" >
      <thead class="table">
        <tr>
         <th>Class ID</th>
         <th>Class</th>
         <th>Teacher</th>
         <th>Semester</th>
         <th>Class Time</th>
         <th>Enrollment Total</th>
         <th>Status</th>
         <th>Actions</th>
        </tr>
      </thead>  
      <tbody v-for="c in Class" :key=c.ClassID>
        
        <tr><td>{{c.ClassID}}</td>
          <td>{{c.CourseName}}</td>
      <td>{{c.FirstName}} {{c.LastName}}</td>
      <td>{{c.Semester}}</td>
      <td>{{c.StartTime}} - {{c.EndTime}}</td>
      <td>{{c.NumStudents}}</td>
      <td>{{c.Status}}</td>
      <td><router-link class="btn" :to="{name:'EditClass',params:{ClassID:c.ClassID}}">Edit</router-link></td>
      </tr>
    </tbody>
    
  </table></div>   
  </template>
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        Class: [],
      loaded:false
      }
    },
    created() {
      // Get all the classes from database
      axios.get('http://172.26.54.21:8082/api/reports/class_view/')
      .then(res => {
        this.Class = res.data
      }).catch(err => {
        alert("Data could not be fetched")
      })
      this.loaded=true
    },
    methods: {
      // Handles deleting of classes
      deleteClass(class_id){
        if (window.confirm("Do you really want to delete this class?")) {
          axios.delete(``).then(() => {
            this.Classes.splice(this.Classes.findIndex(i => i.class_id === class_id), 1);
          }).catch(error => {
            alert("Class could not be deleted")
          });
        }
      }
    }
  }

</script>

    
