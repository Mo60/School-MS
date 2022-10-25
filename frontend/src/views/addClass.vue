<template>

        
          <h1 class="mt-5">Add Classes</h1>
          <div class="wrapper3">
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
            <fieldset class="form-control">

               <div class="row mb-4">
                   
                           <div class="col">
                                <label class="form-label">Teacher ID</label>
                                <input type="number" class="form-control"  required>
                            </div>
                            <div class="col">
                                <label class="form-label">Class Date</label>
                                <input type="date" class="form-control"  required>
                            </div>
                   
                        <div class="col">
                            <label>Class Time</label>
                           
                            <select class="form-control">
                            <option value="" disabled selected>Select an Option</option>
                             <option value="10:00AM - 11:15AM">10:00AM - 11:15AM </option>
                             <option value="11:15AM - 12:30PM">11:15AM - 12:30PM </option>
                             <option value="12:30PM - 1:45PM">12:30PM - 1:45PM </option>
                             <option value="4:00PM - 5:15PM">4:00PM - 5:15PM </option>
                             <option value="5:15PM - 6:30PM">5:15PM - 6:30PM </option>
                        </select>
                        </div>
               </div >

               <div class="row mb-4">
                        <div class="col">
                            <label>Number of Students</label>
                            <input type="number" class="form-control"  required>
                        </div>
        
                        <div class="col">
                            <label>Max Capacity</label>
                            <input type="number" class="form-control" 
                            required>
                        </div>
                        
                        <div class="col">
                            <label>Lesson</label>
                            <select id="Lesson" class="form-control">
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
