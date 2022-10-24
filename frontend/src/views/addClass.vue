<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Classes</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Class ID</label>
                    <input type="number" class="form-control"  required>
                </div>
               <div class="form-group">
                    <label>Teacher ID</label>
                    <input type="number" class="form-control"  required>
                </div>
                <div class="form-group">
                    <label>Class Date</label>
                    <input type="date" class="form-control"  required>
                </div>
                <div class="form-group">
                    <label>Class Time</label>
                    <input type="date" class="form-control"  required>
                    <select class="form-control">
                    <option value="" disabled selected>Select an Option</option>
                     <option value="10:00AM - 11:15AM">10:00AM - 11:15AM </option>
                     <option value="11:15AM - 12:30PM">11:15AM - 12:30PM </option>
                     <option value="12:30PM - 1:45PM">12:30PM - 1:45PM </option>
                     <option value="4:00PM - 5:15PM">4:00PM - 5:15PM </option>
                     <option value="5:15PM - 6:30PM">5:15PM - 6:30PM </option>
                </select>
                </div>
                <div class="form-group">
                    <label>Number of Students</label>
                    <input type="number" class="form-control"  required>
                </div>

                <div class="form-group">
                    <label>Max Capacity</label>
                    <input type="number" class="form-control" 
                    required>
                </div>
                
                <div class="form-group">
                    <label>Lesson</label>
                    <input type="text" class="form-control" required>
                    <datalist id="Lesson">
                        <option value="Drawing"> </option>
                        <option value="Painting"></option>
                        <option value="Both"> </option>
                        
                    </datalist>
                </div>
                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" required>
                </div>

                <div class="text-center m-3">
                <button class="btn btn-danger mt-3">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
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
        
    }
    
    methods: {
            handleSubmitForm() {
                
                let apiURL = '';
                
                axios.post(apiURL, this.classInfo).then(() => {
                    //changing the view to the list
                  this.$router.push('/classes')
                  this.classInfo = {
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
