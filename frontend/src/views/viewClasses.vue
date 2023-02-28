<template>
  

  <h1 class="mt-5 mb-5">Classes</h1>
<div class="flex-wrapper" v-if="Class.length == 0 && loaded">

     <div class="empty-arr" >
        <p>No Classes Found</p>
        <a class="btn mt-3"><router-link :to="{name:'addclass'}">Add Class</router-link></a>
     </div>
</div>
    <div class="tablewrapper" v-else>
      <div class="d-flex mb-4 justify-content-center">
     <!-- search bar -->
     <div class="col-md-4">
        <input
          type="search"
          v-model="searchAll"
          class="form-control"
          @input="searchByall"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>  
    </div>

      <table class="table table-striped" >
      <thead class="table-dark" >
        <tr class="text-center">
         <th>Class ID</th>
         <th @click="sortByClass">Class &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByClass"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
      
         <th @click="sortBySemester">Semester &nbsp; <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedBySemester"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
         <th>Class Time</th>
         <th @click="sortByEnrollmentTotal"># Enrolled  &nbsp; <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedBYEnroll"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
         <th @click="sortByClassStatus">Status &nbsp;  <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByClassStatus"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
         <th colspan="2">Actions</th>
        </tr>
      </thead>  
      <tbody v-for="c in ClassList" :key=c.ClassID>
        
        <tr><td>{{c.ClassID}}</td>
          <td>{{c.CourseName}}</td>
  
      <td>{{c.Semester}}</td>
      <td>{{c.StartTime}} - {{c.EndTime}}</td>
      <td>{{c.EnrollmentTotal}}</td>
      <td>{{c.Status}}</td>
      <td><router-link  class="btn" :to="{name:'classes2',params:{ClassID:c.ClassID}}"><font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon></router-link></td>
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
        searchAll: "",
      loaded:false,
      sortedBYEnroll: 0,
      sortedBySemester:0,
      sortedByClassStatus: 0,
      sortedByClass:0,
      
      
      }
    },
    created() {
      // Get all the classes from database
      axios.get(this.APIBASEURL + ":" + this.APIPORT +'/api/reports/class_view/')
      .then(res => {
        this.Class = res.data
        this.ClassList = this.Class
      }).catch(err => {
        alert("Data could not be fetched")
      })
      this.loaded=true
    },
    methods: {
      //search using filter and indexOf
      searchByall() {
      // this.searchLastName = "";
      const result = this.Class.filter(
        (item) =>
          item.CourseName.toUpperCase().indexOf(
            this.searchAll.toUpperCase()
          ) !== -1 || item.Status.toUpperCase().indexOf(
            this.searchAll.toUpperCase()
          ) !== -1 || item.WeekDay.toUpperCase().indexOf(
            this.searchAll.toUpperCase()
          ) !== -1 || item.StartTime.toUpperCase().indexOf(
            this.searchAll.toUpperCase()
          ) !== -1 || item.EndTime.toUpperCase().indexOf(
            this.searchAll.toUpperCase()
          )  !== -1 || item.Semester.toUpperCase().indexOf(
            this.searchAll.toUpperCase()
          ) !== -1
      );
      //save the results in the filtering list
      this.ClassList = result;
    },
       
        sortByClassStatus() {
          this.sortedByClass= 0;
          this.sortedBySemester= 0;
          this.sortedBYEnroll =0
          if(!(this.sortedByClassStatus === 1)){
            this.ClassList.sort((a, b) => {
                const nameA = a.Status.toUpperCase(); // ignore upper and lowercase
                const nameB = b.Status.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            })
           this.sortedByClassStatus= 1
        
          }
          else{ this.ClassList.sort((a, b) => {
                const nameA = b.Status.toUpperCase(); // ignore upper and lowercase
                const nameB = a.Status.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            })
            this.sortedByClassStatus= -1
          }
            
        },
        sortByEnrollmentTotal() {
          this.sortedByClassStatus= 0;
          this.sortedByClass= 0;
          this.sortedBySemester= 0
            if (!(this.sortedBYEnroll ===1)){
                this.ClassList.sort((a, b) => a.EnrollmentTotal - b.EnrollmentTotal);
                this.sortedBYEnroll = 1;
            }
            else {
                this.ClassList.sort((a, b) => b.EnrollmentTotal - a.EnrollmentTotal);
                this.sortedBYEnroll = -1;
            }
        },
        sortBySemester() {
          this.sortedBYEnroll = 0;
          this.sortedByClassStatus= 0;
          this.sortedByClass =0
          if(!(this.sortedBySemester === 1)){
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
              this.sortedBySemester=1
            }
              else {
                this.Class.sort((a, b) => {
                const nameA = b.Semester.toUpperCase(); // ignore upper and lowercase
                const nameB = a.Semester.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) { 
                    return 1;
                }
              })
               this.sortedBySemester= -1
              }      

        },

        sortByClass() {
          this.sortedByClassStatus= 0;
          this.sortedBySemester= 0;
          this.sortedBYEnroll =0;
          if(!(this.sortedByClass ==1)){
            this.ClassList.sort((a, b) => {
                const nameA = a.CourseName.toUpperCase(); // ignore upper and lowercase
                const nameB = b.CourseName.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) { 
                    return 1;
                }
              })
              this.sortedByClass=1
            }
              else {
                this.ClassList.sort((a, b) => {
                const nameA = b.CourseName.toUpperCase(); // ignore upper and lowercase
                const nameB = a.CourseName.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) { 
                    return 1;
                }
              })
              this.sortedByClass=-1
              }  
            },    
            //seach by find
        // async searchByStatus() {
        //     const result = this.Class.find(({ name }) => name === 1);
        //      this.ClassList = result;
        //     console.log(result);
        // }, 
    },
    components: { FontAwesomeIcon }
}

</script>

    
