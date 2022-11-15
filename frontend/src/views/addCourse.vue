<template>
    <h1 class="mt-5">Add a Course</h1>
    <div class="wrapper"><form @submit.prevent="submitForm">
        <fieldset class="form-control p-3">
<div class="row mb-4">
    <div class="col"><label for="" class="form-label">Course Name</label> <input type="text" class="form-control" v-model="course.CourseName"></div>
    <div class="col"><label class="form-label">Course Status</label>
    <select name="" id="" class="form-select" v-model="course.Status"><option value="" selected disabled>Select an Option</option>
    <option :value="status.StatusID" v-for="status in statuses" :key="status.StatusID">{{status.Status}}</option>
    </select>
    </div>
</div>
<div class="row mb-4"> <div class="col"><label for="" class="form-label">Course Description</label><textarea class="form-control" v-model="course.Description"></textarea></div></div>
        </fieldset>
        <button class="btn mt-4">Submit</button>
    </form></div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
statuses:[],
course:{
    CourseName:"",
    Description:"",
    Status:""
}
        }
    },
    created(){
        let apiURL='http://172.26.54.21:8082/api/coursestatus'
        axios.get(apiURL).then((res)=>{
            this.statuses=res.data;

        })
    },
    methods:{
submitForm(){
    let apiURL='http://172.26.54.21:8082/api/course'
    axios.post(apiURL).then(()=>{
    router.push("/courses")
    }) .catch((error) => {
        console.log(error);
      });
}
    }

}


</script>