<template>
  

  <h1 class="mt-5">Classes</h1>
<div class="flex-wrapper" v-if="Class.length == 0 && loaded">

     <div class="empty-arr" >
        <p>No Classes Found</p>
        <a class="btn mt-3"><router-link :to="{name:'addclass'}">Add Class</router-link></a>
     </div>
</div>
    <div class="wrapper" v-else>
      <div class="row mb-4">
        <div class="col-md-4">
      <input type="search" v-model="searchStatus" class="form-control"  @input="searchByStatus" placeholder="Search Status" aria-label="Search" aria-describedby="search-addon" />
      </div>
      </div> 
      <table class="" >
      <thead >
        <tr class="text-center">
         <th>Class ID</th>
         <th>Class</th>
         <th>Teacher</th>
         <th><a @click="sortBySemester" >Semester <font-awesome-icon icon="fa-solid fa-arrows-up-down" /></a></th>
         <th>Class Time</th>
         <th><a @click="sortByEnrollmentTotal">Enrollment Total <font-awesome-icon icon="fa-solid fa-arrows-up-down" /></a></th>
         <th><a @click="sortByClassStatus">Status <font-awesome-icon icon="fa-solid fa-arrows-up-down" /></a></th>
         <th>Actions</th>
        </tr>
      </thead>  
      <tbody v-for="c in ClassList" :key=c.ClassID>
        
        <tr><td>{{c.ClassID}}</td>
          <td>{{c.CourseName}}</td>
      <td>{{c.FirstName}} {{c.LastName}}</td>
      <td>{{c.Semester}}</td>
      <td>{{c.StartTime}} - {{c.EndTime}}</td>
      <td>{{c.EnrollmentTotal}}</td>
      <td>{{c.Status}}</td>
      <td><router-link class="btn" :to="{name:'EditClass',params:{ClassID:c.ClassID}}">Edit</router-link></td>
      </tr>
    </tbody>
    
  </table></div>
  </template>
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
  
  export default {
    data() {
      return {
        Class: [],
        ClassList: [],
      loaded:false,
      sortedBYEnroll: false,
      sortedBySemester:false,
      sortedByClassStatus:false,
      searchStatus : ""
      }
    },
    created() {
      // Get all the classes from database
      axios.get('http://172.26.54.21:8082/api/reports/class_view/')
      .then(res => {
        this.Class = res.data
        this.ClassList = this.Class
      }).catch(err => {
        alert("Data could not be fetched")
      })
      this.loaded=true
    },

    methods: {
       
        sortByClassStatus() {
          if(this.sortedByClassStatus){
            this.Class.sort((a, b) => {
                const nameA = a.Status.toUpperCase(); // ignore upper and lowercase
                const nameB = b.Status.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            })
            this.sortedByClassStatus=!this.sortedByClassStatus
          }
          else{  this.Class.sort().reverse()
               this.sortedByClassStatus=!this.sortedByClassStatus}
        },
        sortByEnrollmentTotal() {
            if (this.sortedBYEnroll)
                this.Class.sort((a, b) => a.EnrollmentTotal - b.EnrollmentTotal);
            else {
                this.Class.sort((a, b) => b.EnrollmentTotal - a.EnrollmentTotal);
            }
            this.sortedBYEnroll = !this.sortedBYEnroll;
        },
        sortBySemester() {
          if(this.sortedBySemester){
            this.Class.sort((a, b) => {
                const nameA = a.Semester.toUpperCase(); // ignore upper and lowercase
                const nameB = b.Semester.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) { 
                    return 1;
                }
              })
              this.sortedBySemester=!this.sortedBySemester
            }
              else {
                this.Class.sort().reverse()
               this.sortedBySemester=!this.sortedBySemester
              }      
        },
        async searchByStatus() {
            const result = this.Class.find(({ name }) => name === 1);
             this.Class = result;
            console.log(result);
        },
    },
    components: { FontAwesomeIcon }
}

</script>

    
