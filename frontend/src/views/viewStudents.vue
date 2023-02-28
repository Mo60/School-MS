<template>
  <h1 class="mt-5 mb-5">Students</h1>
  <div class="flex-wrapper" v-if="students.length == 0 && loaded" v-cloak>
    <div class="empty-arr">
      <p>No Students Found</p>
      <a class="btn mt-3"
        ><router-link :to="{ name: 'addstudent' }">Add Student</router-link></a
      >
    </div>
  </div>
  <div class="tablewrapper" v-else>
    <div class="d-flex mb-4 justify-content-center">
      <div class="col-md-4 mx-4">
        <input
          type="search"
          v-model="searchByAll"
          class="form-control"
          @input="searchAll"
          placeholder="Search Here..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
    </div>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr class="thead">
          <th>ID</th>
          <th @click="sortByFName">First Name &nbsp;  <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByFName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByMName">Middle Name &nbsp; <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByMName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByLName">Last Name &nbsp; <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByLName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByDOB">DOB &nbsp;  <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByDOB"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>

          <th colspan="2" class="">Actions</th>
        </tr>
      </thead>
      <!-- use the filtered list -->
      <tbody v-for="student in studentList" :key="student.StudentID">
        <tr>
          <td>{{ student.StudentID }}</td>
          <td>{{ student.FirstName }}</td>
          <td>{{ student.MiddleName }}</td>
          <td>{{ student.LastName }}</td>
          <td>{{ student.DOB }}</td>
          <td>
            <router-link
              class="btn"
              :to="{
                name: 'viewStudent',
                params: { StudentID: student.StudentID },
              }"
              ><font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon></router-link
            >
          </td>
          <td>
            <router-link
              class="btn"
              :to="{
                name: 'EditStudent',
                params: { StudentID: student.StudentID },
              }"
              ><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
   
  </div>
  <div class="d-flex justify-content-center mt-3" v-if="students.length!==0">
    <router-link class="btn" :to="{ name: 'addstudent' }"
      >Add Student
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      // this to store the original list
      students: [],
      // this to store the filtered list
      studentList: [],
      searchLastName: "",
      searchByAll:"",
      searchFirstName: "",
      sortedByFName: false,
      sortedByLName: false,
      sortedByMName: false,
      sortedByDOB: false,
    };
  },
  created() {
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/student/";
    axios
      .get(apiURL)
      .then((res) => {
        this.students = res.data;
        this.studentList = this.students;
      })
      .catch((error) => {
        console.log(error);
      });
    this.loaded = true;
  },
  methods: {
  
    sortByFName() {
      this.sortedByLName= false;
      this.sortedByMName= false;
      this.sortedByDOB=false;
      if (!this.sortedByFName) {
        this.studentList.sort((a, b) => {
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
        this.studentList.sort().reverse();
        this.sortedByFName = !this.sortedByFName;
      }
    },
    sortByMName() {
      this.sortedByLName= false;
      this.sortedByFName= false;
      this.sortedByDOB=false;
      if (!this.sortedByMName) {
        this.studentList.sort((a, b) => {
         let  nameA =a.MiddleName // ignore upper and lowercase
        let nameB=b.MiddleName // ignore upper and lowercase
            if(nameA!=null){
           nameA = a.MiddleName.toUpperCase(); // ignore upper and lowercase
            }
            if(nameB!=null)
           nameB = b.MiddleName.toUpperCase(); // ignore upper and lowercase

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
      
        })
        this.sortedByMName = !this.sortedByMName;
      } else {
        this.studentList.sort().reverse();
        this.sortedByMName = !this.sortedByMName;
      }
    },
    sortByLName() {
      this.sortedByFName= false;
      this.sortedByMName= false;
      this.sortedByDOB=false;
      if (!this.sortedByLName) {
        this.studentList.sort((a, b) => {
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
        this.studentList.sort().reverse();
        this.sortedByLName = !this.sortedByLName;
      }
    },

    sortByDOB()
    {
      this.sortedByLName= false;
      this.sortedByMName= false;
      this.sortedByFName=false;
      if (!this.sortedByDOB) {
        this.studentList.sort((a, b) => {
          const nameA = a.DOB.toUpperCase(); // ignore upper and lowercase
          const nameB = b.DOB.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
        })
        this.sortedByDOB = !this.sortedByDOB;
      } else {
        this.studentList.sort().reverse();
        this.sortedByDOB = !this.sortedByDOB;
      }
    },
    searchAll(){
    const result = this.students.filter(
        (item) =>
          item.FirstName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.LastName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.DOB.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.MiddleName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !==-1 
          
      );
      //save the results in the filtering list
      this.studentList = result;
}
  },

 
}
</script>
