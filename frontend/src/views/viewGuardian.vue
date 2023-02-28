<template>
  <h1 class="mt-5">guardian</h1>
  <div class="empty-arr mt-5" v-if="guardian.length == 0 && loaded">
      <p>No Guardian Found</p>
      <a class="btn mt-3"><router-link :to="{name:'addguardian'}">Add Guardian</router-link></a>
    </div>

<div class="cont"><guardianCard :guardian="g" :Name="g.Guardian" :id="g.GuardianID" :phone="g.PhoneNumber" :student=g.Student :email="g.Email" v-for="g in guardian" :key="g.id"></guardianCard></div >
</template>       
        
<script>
 import axios from "axios";
 import guardianCard from "../components/guardianCard.vue";
export default{
  components:{guardianCard},
  data(){
return{
guardian:[],
loaded:false
}},
  created(){
  let apiURL=this.APIBASEURL + ":" + this.APIPORT +'/api/reports/view_students'
  axios
      .get(apiURL)
      .then((res) => {
        this.guardian = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
      this.loaded=true;
  },
}
  
</script>
