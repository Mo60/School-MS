<template>
  <h1 class="mt-5 mb-5">Students</h1>
  <div class="flex-wrapper" v-if="students.length == 0 && loaded" v-cloak>
    <div class="empty-arr">
      <p>No Students Found</p>
      <a class="btn mt-3"
        ><router-link :to="{ name: 'addstudent' }">Add Student</router-link></a>
    </div>
  </div>
  <div class="tablewrapper" v-else>
      <div class="row mb-4">
        <div class="col-md-4">
          <input type="search" v-model="searchFirstName" class="form-control"  @input="searchByFirstName" placeholder="Search First Name" aria-label="Search" aria-describedby="search-addon" />
        </div>
        <div class="col-md-4">
          <input type="search" v-model="searchLastName" class="form-control"  @input="searchByLastName" placeholder="Search Last Name" aria-label="Search" aria-describedby="search-addon" />
        </div>
      </div>  
      <table class="text-center">
      <thead>
        <tr class="thead">
          <th>ID</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name<br></th>
          <th>DOB</th>
  
          <th colspan="2" class="">Actions</th>
        </tr>
      </thead>
      <!-- use the filtered list -->
      <tbody v-for="student in studentList" :key="student.StudentID">
      <tr>
        <td>{{student.StudentID}}</td>
      <td>{{student.FirstName}}</td>
      <td>{{student.MiddleName}}</td>
      <td>{{student.LastName}}</td>
      <td>{{student.DOB}}</td>
      <td><router-link class="btn" :to="{name:'viewStudent',params:{StudentID:student.StudentID}}">See More</router-link></td>
           <td><router-link class="btn" :to="{name:'EditStudent',params:{StudentID:student.StudentID}}">Edit</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center mt-5">  <router-link class="btn " :to="{name:'addstudent'}">Add Student </router-link></div >
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      // this to store the original list
      students: [],
      // this to store the filtered list
      studentList:[],
      searchLastName: "",
      searchFirstName: "",
    };
  },
  created() {
    let apiURL = "http://172.26.54.21:8082/api/student/";
    axios
      .get(apiURL)
      .then((res) => {
        this.students = res.data;
        this.studentList = this.students
      })
      .catch((error) => {
        console.log(error);
      });
    this.loaded = true;
  },
  methods:{
    searchByLastName(){
                      this.searchFirstName = "";
                      const result = this.students.filter(student => student.LastName.toUpperCase().indexOf(this.searchLastName.toUpperCase()) !== -1 );
                      //save the results in the filtering list
                      this.studentList = result;
                       console.log(result);
                    
     },
     searchByFirstName(){
                      this.searchLastName = "";
                      const result = this.students.filter(student => student.FirstName.toUpperCase().indexOf(this.searchFirstName.toUpperCase()) !== -1 );
                      //save the results in the filtering list
                      this.studentList = result;
                       console.log(result);
                      
        },
        
  }
};
</script>
