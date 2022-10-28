<template>
   
        
          <h1 class="mt-5">Add Teacher</h1>
          <div class="wrapper3">
                      <form @submit.prevent="handleUpdateForm" >
             <fieldset class="form-control p-3">
                   
                 <div class="row mb-3" >
                       <div class="col">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-control"  required>
                       </div >
                       <div class="col">   
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-control"  required>
                       </div >
                 </div >
                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control"  required>
                        </div>
                        <div class="col">
                            <label class="form-label">Phone Number</label>
                            <input type="phone" class="form-control"  placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                        </div> 
                 </div>
                    <div class="row mb-3">    
                    <div class="col">
                        <label class="form-label">Notes</label>
                        <textarea name="" id="" class="form-control"></textarea>
                    </div>
    </div>
                    <div class="text-center m-3">
                   
                    </div>  
             </fieldset >
             <button class="btn mt-4">Add</button>
            </form>
        </div>
 
</template>

<script>
    import axios from "axios";
    export default {
        name: "AddTeacher",
        data() {
            return {
               Teacher: { 
                     teacherID:"",
                    firstName: "",
                    lastName:"",
                    email:"",
                    phoneNumber: "",
                    notes: ""
                }, 
            };
        },
        
    }
</script>
