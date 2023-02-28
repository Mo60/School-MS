<template>
    <h1 class="mt-5 mb-5">Add a Course</h1>
    <div class="tablewrapper"><form @submit.prevent="submitForm(course)">
        <fieldset class="form-control p-3">
<div class="row mb-4">
    <div class="col"><label for="" class="form-label">Course Name</label> <input type="text" class="form-control" v-model="course.CourseName" required></div>
    <div class="col"><label class="form-label">Course Status</label>
    <select name="" id="" class="form-select" v-model="course.CourseStatusID"><option value="" selected disabled>Select an Option</option>
    <option :value="status.CourseStatusID" v-for="status in statuses" :key="status.CourseStatusID">{{status.Status}}</option>
    </select>
    </div>
</div>
<div class="row mb-4"> <div class="col"><label for="" class="form-label">Course Description</label><textarea class="form-control" v-model="course.Description"></textarea></div></div>
        </fieldset>
        <button class="btn mt-4">Submit</button>
    </form></div>
</template>

<script lang="js">
import axios from 'axios';
export default{
    data(){
        return{
statuses:[],
course:{
    CourseName:"",
    Description:"",
    CourseStatusID:""
}
        }
    },
    created(){
        let apiURL=this.APIBASEURL + ":" + this.APIPORT +'/api/coursestatus'
        axios.get(apiURL).then((res)=>{
            this.statuses=res.data;

        })
    },
    methods:{
submitForm(course){
    
    let apiURL=this.APIBASEURL + ":" + this.APIPORT +'/api/course'
    axios.post(apiURL,course).then(()=>{
    this.$router.push("/courses")
    }) .catch((error) => {
        console.log(error);
      });
}
    }

}


</script>