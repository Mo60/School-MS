<template>

        
          <h1 class="mt-5">Add Classes</h1>
          <div class="wrapper3 ">
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
            <fieldset class="form-control">

               <div class="row mb-4">
                   
                           <div class="col">
                                <label class="form-label">Teacher ID</label>
                                <input type="number" class="form-control"  required>
                            </div>
                            <div class="col">
                                <label class="form-label">Class Start Date</label>
                                <input type="date" class="form-control"  required>
                            </div>
                   
                        <div class="col">
                            <div class="col">
                                <label class="form-label">Class End Date</label>
                                <input type="date" class="form-control"  required>
                            </div>
                            
                   </div>
                   </div>
                   <div class="row mb-4">
                        <div class="col">
                            <label class="form-label">Class Start Time</label>
                           <input type="time" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Class End Time</label>
                           <input type="time" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Number of Students</label>
                            <input type="number" class="form-control"  required>
                        </div>
               </div >

               <div class="row mb-4">
                    
                        <div class="col">
                            <label>Max Capacity</label>
                            <input type="number" class="form-control" 
                            required>
                        </div>
                        
                        <div class="col">
                            <label>Lesson</label>
                            <select id="Lesson" class="form-select">
                                <option value="" selected disabled>Select an option</option>
                                <option value="Drawing"> Drawing</option>
                                <option value="Painting">Painting</option>
                                <option value="Both"> </option>
                                
                            </select>
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
   // import axios from "axios";
    export default {
        name: "AddClass",
        data() {
            return {
               class: { 
                    classID:"",
                    teacherID: "",
                    classdate:"",
                    classtime:"",
                    numstudents: "",
                    maxcapacity:"",
                    lesson:"",
                    notes: ""
                }, 
            };
        },
    
    methods: {
            handleSubmitForm(){
                
                let apiURL = '';
                
                axios.post(apiURL, this.class).then(() => {
                    //changing the view to the list
                  this.$router.push('/')
                  this.class = {
                    classID:"",
                    teacherID: "",
                    classdate:"",
                    classtime:"",
                    numstudents: "",
                    maxcapacity:"",
                    lesson:"",
                    notes: ""
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    } 
</script>
