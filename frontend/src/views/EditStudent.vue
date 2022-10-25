<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
                     <h3 class="text-center">Update Students</h3>
            <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Student ID</label>
                    <input type="number" class="form-control" v-model="student.studentID" required>
                </div>
                <div class="form-group">
                    <label>Parent ID</label>
                    <input type="number" class="form-control" v-model="student.parentID" required>
                </div>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="student.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="student.lastName" required>
                </div>
                <div class="form-group">
                    <label>DOB</label>
                    <input type="date" class="form-control" v-model="student.dob" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="student.email" 
                    required>
                </div>

                <div class="form-group">
                    <label>Parent Phone Number</label>
                    <input type="number" class="form-control" v-model="student.ParentPhoneNumber" required>
                </div>
                
                <div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" v-model="student.street" 
                    required>
                </div>

                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="student.city" 
                    required>
                </div>
                
                <div class="form-group">
                    <label>Zip</label>
                    <input type="number" class="form-control" v-model="student.zip" 
                    required>
                </div>
                
                <div class="form-group">
                    <label>Reference</label>
                    <input type="text" class="form-control" v-model="student.reference" 
                    required>
                </div>
                
                <div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="student.notes" 
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
        name: "EditStudent",
        data() {
            return {
               student: { 
                    studentID:"",
                    parentID: "",
                    firstName:"",
                    lastName:"",
                    dob: "",
                    email:"",
                    ParentPhoneNumber:"",
                    street:"",
                    city:"",
                    zip:"",
                    reference: "",
                    notes: ""
                }, 
            };
        },
        
    }
</script>
