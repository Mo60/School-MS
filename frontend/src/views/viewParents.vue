<template>
  <h1 class="mt-5">Parents</h1>
<div class="cont"><parentsCard :parents="p" :fName="p.FirstName" :lName= "p.LastName" :id="p.ParentsID" :phone="p.PhoneNumber" :email="p.Email" v-for="p in parent" :key="p.id"></parentsCard></div >
</template>       
        
<script>
 import axios from "axios";
 import parentsCard from "../components/parentsCard.vue";
export default{
  components:{parentsCard},
  data(){
return{
parent:[]
}},

  created(){
  let apiURL='http://172.26.54.21:8082/api/parent/'
  axios
      .get(apiURL)
      .then((res) => {
        this.parent = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}


  
</script>