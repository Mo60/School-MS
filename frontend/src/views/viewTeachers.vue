<template>
     <h1 class="mt-5 mb-5">Faculty</h1>
 <div class="flex-wrapper" v-if="faculty.length == 0 && loaded">
        <div class="empty-arr" >
          <p>No faculty Found</p>
          <a class="btn mt-3"><router-link :to="{name:'addfaculty'}">Add Teacher</router-link></a>
        </div>
   </div> 
   <div class="tablewrapper" v-else>
    <table class="">
      <thead>
        <tr class="text-center">
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Cell</th>
          <th>Phone</th>
          <th>Email</th>
  
          <th colspan="2" class="">Actions</th>
        </tr>
      </thead>
      <tbody v-for="f in faculty" :key="f.FacultyID">
      <tr>
        <td>{{f.FacultyID}}</td>
        <td>{{f.Title}}</td>
      <td>{{f.FirstName}}</td>
      <td>{{f.MiddleName}}</td>
      <td>{{f.LastName}}</td>
      <td>{{f.CellNumber}}</td>
      <td>{{f.PhoneNumber}}</td>
      <td><a :href="`mailto:${f.Email}`">{{f.Email}}</a></td>
   
      <td><router-link class="btn" :to="{name:'faculty2',params:{FacultyID:f.FacultyID}}">See More</router-link></td>
           <td><router-link class="btn" :to="{name:'EditFaculty',params:{FacultyID:f.FacultyID}}">Edit</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
<div class="d-flex justify-content-center mt-5">  <router-link class="btn " :to="{name:'addfaculty'}">Add Faculty </router-link></div >
</template>
  <script>
    import axios from "axios";

    export default {
        components:{
      
        },
        data() {
            return {
                faculty: [],
                loaded:false
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://172.26.54.21:8082/api/faculty/';
            axios.get(apiURL).then(res => {
                this.faculty = res.data;
                
            }).catch(error => {
                console.log(error)
            });
            this.loaded=true
        },
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
