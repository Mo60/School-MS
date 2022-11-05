<template>
    <h1 class="mt-4">{{guardian.FirstName}} {{guardian.LastName}}</h1>

   <div class="box-wrapper" >
    <div class="box">
    <h2 class="mb-4">Contact Information</h2>
    <div class="body">
        <div class="rows"><span class="label">ID:</span><span>{{guardian.GuardianID}}</span></div>
        <div class="rows" v-if="guardian.PhoneNumber!=''"><span class="label">Phone Number</span> <span>{{guardian.PhoneNumber}}</span></div>
        <div class="rows" v-if="guardian.CellNumber!=''"><div class="label">Cell Number</div>{{guardian.CellNumber}}</div>
        <div class="rows" v-if="guardian.Email!=''"><div class="label">Email</div> <a :href="`mailto:${guardian.Email}`">{{guardian.Email}}</a></div>

    </div>
    </div>
    <div class="box"><h2>Address</h2>
        <div class="rows"><span class="label">Address Line 1</span><span>{{guardian.AddressLine1}}</span></div>
         <div class="rows" v-if="guardian.AddressLine2!=''"><span class="label">Address Line 2</span><span>{{guardian.AddressLine2}}</span></div>
         <div class="rows" v-if="guardian.State!=''"><span class="label">State</span><span>{{guardian.State}}</span></div>
         <div class="rows"><span class="label">City</span><span>{{guardian.City}}</span></div>
         <div class="rows"><span class="label">Zip Code</span><span>{{guardian.Zip}}</span></div>
     

        </div>
    <div class="box"><h2>Students</h2>
   
        <div v-for="student in guardian.students" :key="student.StudentID" >
          <h5 mt-4>  {{student.FirstName}} {{student.LastName}}</h5>
            <div class="rows"><span class="label">Authorized to Pick up</span> <span>{{student.CanPickup}}</span></div>
        </div>
    
    </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      guardianID: this.$route.params.GuardianID,
      guardian: [],
      guardian_student:[],
   
    };
  },

  created() {
    let apiURL = `http://172.26.54.21:8082/api/guardian/${this.guardianID}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.guardian = res.data;
      }).then((res)=>{
        let apiURL2=  `http://172.26.54.21:8082/api/guardian_student/`
      }
       
      )
      .catch((error) => {
        console.log(error);
      });
    this.loaded = true;
  },

  computed(guardian){
for(student in guardian.students){
students.push(student)
}
  }
};
</script>