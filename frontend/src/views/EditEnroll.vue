<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Enrollment</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Enrollment ID</label>
                    <input type="number" class="form-control" v-model="enrollment.enrollmentID" required>
                </div>
               <div class="form-group">
                    <label>Class ID</label>
                    <input type="number" class="form-control" v-model="enrollment.enrollmentID" >
                </div>
                <div class="form-group">
                    <label>Student ID</label>
                    <input type="number" class="form-control" v-model="enrollment.enrollmentID" required>
                </div> 
               
                <div class="text-center m-3">
                <button class="btn btn-danger mt-3">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "editEnrollment",
        data() {
            return {
               enrollment: { 
                    enrollmentID:"",
                    classID: "",
                    studentID: ""
                }, 
            };
        },
        methods: {
          handleUpdateForm() {
            let apiURL = "http://172.26.54.21:8082/api/enrollment/";
            axios.put(apiURL, this.enrollment).then((res) => {
                console.log(res)
                this.$router.push()
            }).catch(error => {
                console.log(error)
            });
            this.$router.push("/");
        }
    }      
    }
</script>
