<template>
    <h1 class="mt-5">Parent Information</h1>

   <div class="box-wrapper" >
    <div class="box">
    <h2 class="mb-3">Contact Information</h2>
    <div class="body">
        <div class="rows"><span class="label">Name:</span>{{guardian.FirstName}} {{guardian.MiddleName}} {{guardian.LastName}}</div>
        <div class="rows"><span class="label">ID:</span><span>{{guardian.GuardianID}}</span></div>
        <div class="rows" v-if="guardian.PhoneNumber!=''"><span class="label">Phone Number</span> <span>{{guardian.PhoneNumber}}</span></div>
        <div class="rows" v-if="guardian.CellNumber!=''"><span class="label">Cell Number</span>{{guardian.CellNumber}}</div>
        <div class="rows" v-if="guardian.Email!=''"><span class="label">Email</span> <a :href="`mailto:${guardian.Email}`">{{guardian.Email}}</a></div>

    </div>
    </div>
    <div class="box"><h2 class="mb-3">Address</h2>
        <div class="rows"><span class="label">Address Line 1</span><span>{{guardian.AddressLine1}}</span></div>
         <div class="rows" v-if="guardian.AddressLine2!=''"><span class="label">Address Line 2</span><span>{{guardian.AddressLine2}}</span></div>
         <div class="rows" v-if="guardian.State!=''"><span class="label">State</span><span>{{guardian.State}}</span></div>
         <div class="rows"><span class="label">City</span><span>{{guardian.City}}</span></div>
         <div class="rows"><span class="label">Zip Code</span><span>{{guardian.Zip}}</span></div>
        </div>
    <div class="box"><h2 class="mb-3">Students</h2>
        <div v-for="student in students" :key="student.StudentID" class="mb-4">
         <div class="rows"> <router-link class="label name" :to="{name:'viewStudent',params:{StudentID:student.StudentID}}">  {{student.FirstName}} {{student.LastName}}</router-link></div >
          <div class="rows"><span class="label">Relationship</span> <span>{{student.Relationship}}</span></div>
            <div class="rows"><span class="label">Authorized to Pick up</span> <span v-if="student.CanPickup">Yes</span><span v-else>No</span></div>
            <div class="rows"><span class="label">Emergency Contact</span><span v-if="student.IsEmergency">Yes</span><span v-else>No</span> </div> 
        </div>
    </div>
   </div>

   <div class="box2 mb-4" v-if="guardian.Notes!=''"><h2>Notes</h2>
<div class="rows">{{guardian.Notes}}</div>
</div>
  <div class="d-flex justify-content-center ">
       <router-link class="btn" :to="{name:'EditParent',params:{GuardianID:guardianID}}">Edit </router-link>
       <router-link class="btn mx-3" :to="{name:'addStudent2',params:{GuardianID:guardianID}}">Add New Student</router-link>
  </div >
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      guardianID: this.$route.params.GuardianID,
      guardian: [],
      students:[],
   
    };
  },

  created() {
    let apiURL = `http://172.26.54.21:8082/api/guardian/${this.guardianID}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.guardian = res.data;
      }).then(()=>{
        let apiURL2=  `http://172.26.54.21:8082/api/reports/guardian_student_view/${this.guardianID}`
axios.get(apiURL2).then((res)=>{
    this.students=res.data
})
      }
       
      )
      .catch((error) => {
        console.log(error);
      });
    this.loaded = true;
  },

  
};
</script>