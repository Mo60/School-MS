<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Faculty</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Faculty ID</label>
                    <input type="number" class="form-control" v-model="faculty.FacultyID" required>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="faculty.FirstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="faculty.LastName" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="faculty.Email" 
                    required>
                </div>

                <div class="form-group">
                    <label>Cell Number</label>
                    <input type="number" class="form-control" v-model="faculty.CellNumber" required>
                </div>
                
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" class="form-control" v-model="faculty.PhoneNumber" required>
                </div>
                
                div class="col">
                        <div class="form-label">Title</div>
                        <input type="text" class="form-control" v-model="faculty.Title" required>
                       </div>
                
                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="faculty.notes" 
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
        name: "EditFaculty",
        data() {
            return {
               teachers: { 
                    FacultyID:"",
                    FirstName:"",
                    LastName:"",
                    Email:"",
                    CellNumber:"",
                    PhoneNumber:"",
                    Title:"",
                    notes: ""
                }, 
            };
        },
        
    }
</script>
