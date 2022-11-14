<template>
    <div class="cont2">
       <div class="box-wrapper class">
            <div class="box pt-3">
                <h2 class="mb-3">Class Details</h2>
                <router-link
              class="btn"
              :to="{
                name: 'EditClass',
                params: { ClassID: classInfo[0].ClassID },
              }"
              ><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link
            >
                <div class="rows"><span class="label">Class ID</span>{{classInfo[0].ClassID}}</div>
                <div class="rows"><span class="label">Course Name</span>{{classInfo[0].CourseName}}</div>
                <div class="rows"><span class="label">Teacher</span><span>{{classInfo[0].FirstName}} {{classInfo[0].LastName}}</span></div>
                <div class="rows"><span class="label">Semester</span><span>{{classInfo[0].Semester}}</span></div>
                <div class="rows"><span class="label">Time Period</span><span>{{classInfo[0].StartTime}} - {{classInfo[0].EndTime}}</span></div>
                <div class="rows"><span class="label">Status</span><span>{{classInfo[0].Status}}</span></div>
               

            </div>
            </div>
            <div class="profile">
                <div class="profile-body ">
                  
                </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            classInfo:[],
            classID:this.$route.params.ClassID
        }
    },
    created(){
        let apiURL=`http://172.26.54.21:8082/api/reports/class_view/${this.classID}`
        axios.get(apiURL).then((res)=>{
            this.classInfo=res.data;
            
        })
    }
}
</script>