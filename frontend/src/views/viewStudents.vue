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
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th>ID</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Student Status</th>
          <th colspan="2" class="">Actions</th>
        </tr>
      </thead>
      <tbody v-for="student in students" :key="student.StudentID">
      <tr>
        <td>{{student.StudentID}}</td>
      <td>{{student.FirstName}}</td>
      <td>{{student.MiddleName}}</td>
      <td>{{student.LastName}}</td>
      <td>{{student.DOB}}</td>
      <td>{{student.Status}}</td>
      <td><router-link class="btn" :to="{name:'viewStudent',params:{StudentID:student.StudentID}}">See More</router-link></td>
           <td><router-link class="btn" :to="{name:'EditStudent',params:{StudentID:student.StudentID}}">Edit</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      students: [],
    };
  },
  created() {
    let apiURL = "http://172.26.54.21:8082/api/student/";
    axios
      .get(apiURL)
      .then((res) => {
        this.students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.loaded = true;
  },
};
</script>
