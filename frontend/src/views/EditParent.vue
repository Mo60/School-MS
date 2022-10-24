<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Parents</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Parent ID</label>
                    <input type="number" class="form-control" v-model="parent.parentID" required>
                </div>
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="parent.firstName" required>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="parent.lastName" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="parent.email" 
                    required>
                </div>

                <div class="form-group">
                    <label>Parent Phone Number</label>
                    <input type="number" class="form-control" v-model="parent.ParentPhoneNumber" required>
                </div>
                
                <div class="form-group">
                    <label>Phone Type</label>
                    <input type="number" class="form-control" v-model="parent.phonetype" required>
                    <datalist id="phone type">
                        <option value="Cell Phone"> </option>
                        <option value="Home Phone"></option>
                        <option value="Work Phone"> </option>
                    </datalist>
                </div>
                
                div class="form-group">
                    <label>Street</label>
                    <input type="text" class="form-control" v-model="parent.street" 
                    required>
                </div>

                div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="parent.city" 
                    required>
                </div>
                
                div class="form-group">
                    <label>Zip</label>
                    <input type="number" class="form-control" v-model="parent.zip" 
                    required>
                </div>
                
                div class="form-group">
                    <label>Reference</label>
                    <input type="text" class="form-control" v-model="parent.reference" 
                    required>
                </div>
                
                div class="form-group">
                    <label>Notes</label>
                    <input type="text" class="form-control" v-model="parent.notes" 
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
                    parentID: "",
                    firstName:"",
                    lastName:"",
                    email:"",
                    ParentPhoneNumber:"",
                    phonetype:"",
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
