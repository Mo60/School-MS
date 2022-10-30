<template>
    <h1 class="mt-5 mb-5">Students</h1>
    
<div class="cont">
   <studentsCard></studentsCard>
</div >
</template>
<script>
import axios from 'axios'
import studentsCard from '../components/studentsCard.vue';
export default{
    data(){
      return{
      student:[]

      }
    }
}
</script>
