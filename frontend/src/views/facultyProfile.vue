<template>
  <h1 class="mt-5 mb-5">Faculty Profile</h1>

  <div class="box-wrapper">
    <div class="box">
      <h2>Contact Information</h2>
      <div class="body">
        <div class="rows"><span class="label">ID:</span><span>{{faculty.FacultyID}}</span></div>
        <div class="rows"><span class="label">Name:</span><span>{{faculty.FirstName}} {{faculty.LastName}}</span></div>
        <div class="rows"><span class="label">Email:</span><a :href="`mailto:${faculty.Email}`">{{faculty.Email}}</a></div>
        <div class="rows"><span class="label">Cell:</span><span>{{faculty.CellNumber}}</span></div>
        <div class="rows"><span class="label">Phone:</span><span>{{faculty.PhoneNumber}}</span></div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      faculty: [],
      FacultyID: this.$route.params.FacultyID,
      faculty_class: [],
    };
  },
  async created() {
    let apiURL = `http://172.26.54.21:8082/api/faculty/${this.FacultyID}`;

    axios
      .get(apiURL)
      .then((res) => {
        this.faculty = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    let apiURL2 = `http://172.26.54.21:8082/api/reports/faculty_class/${this.FacultyID}`;
    await axios.get(apiURL2).then((res) => {
      this.faculty_class = res.data;
    });
  },
};
</script>
