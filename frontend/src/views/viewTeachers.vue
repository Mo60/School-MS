<template>
     <h1 class="mt-5">Teachers</h1>
 <div class="flex-wrapper" v-if="teacher.length == 0 && loaded">
        <div class="empty-arr" >
          <p>No faculty Found</p>
          <a class="btn mt-3"><router-link :to="{name:'addteacher'}">Add Teacher</router-link></a>
        </div>
   </div> 
      <div class="cont mt-5" v-else>
        <teacherCard v-for="t in teacher" :key="t.FacultyID" :teacher="t" :id="t.FacultyID" :FName="t.FirstName" :LName="t.LastName" :Phone="t.PhoneNumber" :Email="t.TeacherEmail"></teacherCard>
          </div>   


</template>
  <script>
    import axios from "axios";
    import TeacherCard from "../components/teacherCard.vue"
    export default {
        components:{
            TeacherCard
        },
        data() {
            return {
                teacher: [],
                loaded:false
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://172.26.54.21:8082/api/faculty/';
            axios.get(apiURL).then(res => {
                this.teacher = res.data;
                
            }).catch(error => {
                console.log(error)
            });
            this.loaded=true
        },
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
