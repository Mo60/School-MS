<template>
    <h1 class="mt-5">Student Profile</h1>
    <div class="box-wrapper">
        <div class="box">
            <h2 class="mb-3">Student Information</h2>
            <div class="rows"><span class="label">Name:</span><span> {{student.FirstName}} {{student.MiddleName}} {{student.LastName}}</span></div>
            <div class="rows"><span class="label">ID:</span><span>{{student.StudentID}}</span></div>
            <div class="rows"><span class="label">DOB:</span>{{student.DOB}}</div>
            <div class="rows"><div class="label">Status</div></div>
            <h4>Parents/Guardians</h4>
           <div> <router-link class="me-3" id="router" v-for="guardian in student.guardians" :key="guardian.GuardianID" :to="{name:'viewParent',params:{GuardianID:guardian.GuardianID}}">{{guardian.FirstName}} {{guardian.LastName}} </router-link></div >
           </div>
    <div class="box"> <h2 class="mb-3">Address</h2>
        <div class="rows"><span class="label">Address Line 1</span><span>{{student.AddressLine1}}</span></div>
         <div class="rows" v-if="student.AddressLine2!=''"><span class="label">Address Line 2</span><span>{{student.AddressLine2}}</span></div>
         <div class="rows" v-if="student.State!=''"><span class="label">State</span><span>{{student.State}}</span></div>
         <div class="rows"><span class="label">City</span><span>{{student.City}}</span></div>
         <div class="rows"><span class="label">Zip Code</span><span>{{student.Zip}}</span></div>
    </div>
    <div class="box"><h2 class="mb-3">Classes</h2></div></div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
studentID:this.$route.params.StudentID,
student:[]
        }
    },
    created(){
         let apiURL=`http://172.26.54.21:8082/api/student/${this.studentID}`
         axios.get(apiURL).then((res) => {
        this.student = res.data;
    }).catch((error) => {
        console.log(error);
      });

      let apiURL2=`http://172.26.54.21:8082/api/reports/student_class`
}
}
</script>