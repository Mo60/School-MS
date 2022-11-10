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
          <th @click="sortByTitle">Title &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByTitle"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByFName">First Name &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByFName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByMName">Middle Name &nbsp; <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByMName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByLName">Last Name &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByLName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
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
   
      <td><router-link class="btn" :to="{name:'faculty2',params:{FacultyID:f.FacultyID}}"><font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon></router-link></td>
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
                loaded:false,
                sortedByTitle:false,
                sortedByFName:false,
                sortedByLName:false,
                sortedByMName:false
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
        methods:{
          sortByFName() {
      if (!this.sortedByFName) {
        this.faculty.sort((a, b) => {
          const nameA = a.FirstName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.FirstName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByFName = !this.sortedByFName;
      } else {
        this.faculty.sort().reverse();
        this.sortedByFName = !this.sortedByFName;
      }
    },
    sortByLName() {
      if (!this.sortedByLName) {
        this.faculty.sort((a, b) => {
          const nameA = a.LastName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.LastName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByLName = !this.sortedByLName;
      } else {
        this.faculty.sort().reverse();
        this.sortedByLName = !this.sortedByLName;
      }
    },
    sortByTitle() {
      if (!this.sortedByTitle) {
        this.faculty.sort((a, b) => {
          const nameA = a.Title.toUpperCase(); // ignore upper and lowercase
          const nameB = b.Title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByTitle = !this.sortedByTitle;
      } else {
        this.faculty.sort().reverse();
        this.sortedByTitle = !this.sortedByTitle;
      }
    },
    sortByMName() {
      if (!this.sortedByMName) {
        this.faculty.sort((a, b) => {
          const nameA = a.MiddleName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.MiddleName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByMName = !this.sortedByMName;
      } else {
        this.faculty.sort().reverse();
        this.sortedByMName = !this.sortedByMName;
      }
    },
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
