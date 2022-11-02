<template>
      <h1 class="mt-5">Parents and Guardians</h1>
<div class="flex-wrapper" v-if="parent.length == 0 && loaded">

    <div class="empty-arr" >
        <p>No Parents or Guardians Found</p>
        <a class="btn mt-3"><router-link :to="{name:'addparent'}">Add Parent</router-link></a>
      </div>

    </div> 
<div class="cont" v-else><parentsCard :parents="p" :Name="p.Parent" :id="p.ParentsID" :phone="p.PhoneNumber" :student=p.Student :email="p.Email" v-for="p in parent" :key="p.id"></parentsCard></div >
</template>       
        
<script>
 import axios from "axios";
 import parentsCard from "../components/parentsCard.vue";
export default{
  components:{parentsCard},
  data(){
return{
parent:[],
loaded:false
}},

  created(){
  let apiURL='http://172.26.54.21:8082/api/reports/view_students'
  axios
      .get(apiURL)
      .then((res) => {
        this.parent = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
      this.loaded=true;
  },
}


  
</script>