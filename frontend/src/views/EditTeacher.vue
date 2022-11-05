<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Teachers</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Teacher ID</label>
                    <input type="number" class="form-control" v-model="teacher.teacherID" required>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="teacher.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="teacher.lastName" required>
                </div>
                <div class="form-group">
                    <label>Teacher Email</label>
                    <input type="text" class="form-control" v-model="teacher.teacheremail" 
                    required>
                </div>
                <div class="form-group">
                    <label>Teacher Phone Number</label>
                    <input type="number" class="form-control" v-model="teacher.TeacherPhoneNumber" required>
                </div>
                
                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="teacher.notes" 
                    required>
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
        name: "EditTeacher",
        data() {
            return {
               teachers: { 
                    teacherID:"",
                    firstName:"",
                    lastName:"",
                    teacheremail:"",
                    TeacherPhoneNumber:"",
                    notes: ""
                }, 
            };
        },
        
    }
</script>
