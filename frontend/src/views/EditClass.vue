<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Classes</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Class ID</label>
                    <input type="number" class="form-control" v-model="Class.classID" required>
                </div>
                <div class="form-group">
                    <label>Teacher ID</label>
                    <input type="number" class="form-control" v-model="Class.teacherID" required>
                </div>
                <div class="form-group">
                    <label>Class Date</label>
                    <input type="date" class="form-control" v-model="Class.classdate" required>
                </div>
                <div class="form-group">
                    <label>Class Time</label>
                    <input type="time" class="form-control" v-model="Class.classtime" 
                    required>
                </div>

                <div class="form-group">
                    <label>Teacher Phone Number</label>
                    <input type="number" class="form-control" v-model="Class.TeacherPhoneNumber" required>
                </div>
                
                <div class="form-group">
                    <label>Number of Students</label>
                    <input type="number" class="form-control" v-model="Class.numofstudents" required>
                  </div>
                  
                 <div class="form-group">
                    <label>Max Capacity</label>
                    <input type="number" class="form-control" v-model="Class.maxcapacity" required>
                  </div>  
                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="Class.Notes" required>
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
        name: "EditClass",
        data() {
            return {
               Class: { 
                    classID:"",
                    TeacherID:"",
                    classdate:"",
                    classtime:"",
                    TeacherPhoneNumber:"",
                    numofstudents:"",
                    maxcapacity:"",
                    notes: ""
                }, 
            };
        },
    } 
    // methods: {
    //         handleSubmitForm() {
                
    //             let apiURL = 'http://172.26.54.21:8082/api/class/';
                
    //             axios.post(apiURL, this.class).then(() => {
    //                 //changing the view to the list
    //               this.$router.push('/')
    //               this.class = {
    //                 classID: "",
    //                 TeacherID: "",
    //                 classdate:"",
    //                 classtime:"",
    //                 TeacherPhoneNumber:"",
    //                 numofstudents:"",
    //                 maxcapacity:"",
    //                 notes: ""
    //               }
    //             }).catch(error => {
    //                 console.log(error)
    //             });
    //         }
    //     } 
           
    
</script>
