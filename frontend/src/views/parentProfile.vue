<template>
 <div class="cont2">
    
     
  
     <div class="box-wrapper" >
      <div class="box">
      <h2 class="mb-3">Contact Information</h2>
      <router-link class="btn" :to="{name:'EditParent',params:{GuardianID:guardian.GuardianID}}"><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link>
      <div class="body">
          <div class="rows"><span class="label">Name:</span>{{guardian.FirstName}} {{guardian.MiddleName}} {{guardian.LastName}}</div>
          <div class="rows"><span class="label">ID:</span><span>{{guardian.GuardianID}}</span></div>
          <div class="rows" v-if="guardian.PhoneNumber!=''"><span class="label">Phone Number</span> <span>{{guardian.PhoneNumber}}</span></div>
          <div class="rows" v-if="guardian.CellNumber!=''"><span class="label">Cell Number</span>{{guardian.CellNumber}}</div>
          <div class="rows" v-if="guardian.Email!=''"><span class="label">Email</span> <a :href="`mailto:${guardian.Email}`">{{guardian.Email}}</a></div>
          <div class="rows" v-if="students.Status!=''"><span class="label">Status</span><span>{{students[0].Status}}</span></div>
      </div>
      </div>
      <div class="box "><h2 class="mb-3">Address</h2>
<div class="body">
  
            <div class="rows"><span class="label">Address Line 1</span><span>{{guardian.AddressLine1}}</span></div>
             <div class="rows" v-if="guardian.AddressLine2!=''"><span class="label">Address Line 2</span><span>{{guardian.AddressLine2}}</span></div>
             <div class="rows" v-if="guardian.State!=''"><span class="label">State</span><span>{{guardian.State}}</span></div>
             <div class="rows"><span class="label">City</span><span>{{guardian.City}}</span></div>
             <div class="rows"><span class="label">Zip Code</span><span>{{guardian.Zip}}</span></div>
</div>
         </div>
         <div class="box pt-4" v-show="guardian.Notes!=='' || guardian.Notes!==null" ><h2>Notes</h2>
  <div class="rows">{{guardian.Notes}}</div>
  </div>

 </div>
 <div class="profile">
   <h1 class="mt-3 mb-5">Students</h1>
   <div class="grid" >

    <div class="box" v-for="student in students" :key="student.StudentID" >
          <div class="mb-4">
           <div class="rows"> <router-link class="label name" :to="{name:'viewStudent',params:{StudentID:student.StudentID}}">  {{student.FirstName}} {{student.LastName}}</router-link></div >
            <div class="rows"><span class="label">Relationship</span> <span>{{student.Relationship}}</span></div>
              <div class="rows"><span class="label">Authorized to Pick up</span> <span v-if="student.CanPickup">Yes</span><span v-else>No</span></div>
              <div class="rows"><span class="label">Emergency Contact</span><span v-if="student.IsEmergency">Yes</span><span v-else>No</span> </div> 
          </div>
          
 </div>
 <div class="d-flex justify-content-center align-items-center">
         <router-link class="btn mx-3" :to="{name:'addStudent2',params:{GuardianID:guardianID}}"><font-awesome-icon icon="fa-solid fa-plus"></font-awesome-icon></router-link>
  </div>
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
      students:[],
   
    };
  },

  created() {
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian/${this.guardianID}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.guardian = res.data;
        console.log(this.guardian)
      }).catch((error) => {
        console.log(error);
      }).then(()=>{
        let apiURL2= this.APIBASEURL + ":" + this.APIPORT +`/api/reports/guardian_student_view/${this.guardianID}`
axios.get(apiURL2).then((res)=>{
    this.students=res.data
}).catch((error) => {
        console.log(error);
      });
      }
       
      )
      .catch((error) => {
        console.log(error);
      });
    this.loaded = true;
  },

  
};
</script>