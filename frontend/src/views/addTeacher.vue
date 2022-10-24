<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Teachers</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Teacher ID</label>
                    <input type="number" class="form-control"  required>
                </div>
               <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control"  required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  required>
                </div>
                <div class="form-group">
                    <label>Teacher Email</label>
                    <input type="text" class="form-control"  required>
                </div>
                <div class="form-group">
                    <label>Teacher Phone Number</label>
                    <input type="number" class="form-control"  required>
                </div     
                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" 
                    required>
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
        name: "AddTeacher",
        data() {
            return {
               Teacher: { 
                     teacherID"",
                    first name: "",
                    last name:"",
                    teacher email:"",
                    teacher phone number: "",
                    notes: ""
                }, 
            };
        },
        
    }
</script>
