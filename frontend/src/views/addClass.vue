<template>

        
          <h1 class="mt-5">Add Class</h1>
          <div class="wrapper3 ">
                      <form @submit.prevent="handleUpdateForm" class="mb-5">
            <fieldset class="form-control">

               <div class="row mb-4">
                   
                           <div class="col">
                                <label class="form-label">Teacher</label>
                                <select name="" id="" class="form-select"><option value="{{teacher.TeacherID}}" v-for="teacher in TeacherList" :key="teacher.TeacherID">{{teacher.FirstName}} {{TeacherList.LastName}}</option></select>
                            </div>
                            <div class="col">
                                <label class="form-label">Start Date</label>
                                <input type="date" class="form-control"  required>
                            </div>
                   
                        <div class="col">
                            <div class="col">
                                <label class="form-label">End Date</label>
                                <input type="date" class="form-control"  required>
                            </div>
                            
                   </div>
                   </div>
                   <div class="row mb-4">
                        <div class="col">
                            <label class="form-label">Start Time</label>
                           <input type="time" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">End Time</label>
                           <input type="time" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Number of Students</label>
                            <input type="number" class="form-control"  required>
                        </div>
               </div >

               <div class="row mb-4">
                    
                        <div class="col">
                            <label class="form-label">Max Capacity</label>
                            <input type="number" class="form-control" 
                            required>
                        </div>
                        
                        <div class="col">
                            <label class="form-label">Lesson</label>
                          <input type="text" class="form-control">
               </div>
                    </div>
                    <div class="col">
                        <label class="form-label">Notes</label>
                        <textarea class="form-control"></textarea>
                    </div>
    
                    <div class="text-center m-3">
                    
                    </div>
            </fieldset >
            <button class="btn mt-3">Submit</button>
            </form>
       
    </div>
</template>

<script>
   import axios from "axios";
    export default {
        name: "AddClass",
        data() {
            return {
               class: { 
                    ClassID:"",
                    TeacherID: "",
                    ClassStartDate:"",
                    ClassEndDate:"",
                    ClassStartTime:"",
                    ClassEndTime:"",
                    NumStudents: "",
                    MaxCapacity:"",
                    Lesson:"",
                    Notes: ""
                }, 
                TeacherList:[]
            };
        },
    
    methods: {
            handleSubmitForm(){
                
                let apiURL = 'http://172.26.54.21:8082/api/class/"';
                
                axios.post(apiURL, this.class).then(() => {
                    //changing the view to the list
                  this.$router.push('/classes')
                  this.class = {
                    ClassID:"",
                    TeacherID: "",
                    ClassStartDate:"",
                    ClassEndDate:"",
                    ClassStartTime:"",
                    ClassEndTime:"",
                    NumStudents: "",
                    MaxCapacity:"",
                    Lesson:"",
                    Notes: ""
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
        ,
     created(){
            let apiURL = 'http://172.26.54.21:8082/api/teacher/';
            axios.get(apiURL).then(res => {
                this.teacherList = res.data;
                
            }).catch(error => {
                console.log(error)
            });
            
        }, 
    } 
</script>
