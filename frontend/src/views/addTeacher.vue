<template>
   
        
          <h1 class="mt-5">Add Teacher</h1>
          <div class="wrapper3">
                      <form @submit.prevent="submitForm" >
             <fieldset class="form-control p-3">
                   
                 <div class="row mb-3" >
                       <div class="col">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-control"  required v-model="teacher.FirstName">
                       </div >
                       <div class="col">   
                                <label class="form-label">Last Name</label>
                                <input type="text" class="form-control" v-model="teacher.LastName" required>
                       </div >
                 </div >
                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="teacher.TeacherEmail" required>
                        </div>
                        <div class="col">
                            <label class="form-label">Phone Number</label>
                            <input type="phone" class="form-control"  placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="teacher.TeacherPhoneNumber" required>
                        </div> 
                 </div>
                    <div class="row mb-3">    
                    <div class="col">
                        <label class="form-label">Notes</label>
                        <textarea name="" id="" class="form-control" v-model="teacher.Notes"></textarea>
                    </div>
    </div>
                    <div class="text-center m-3">
                   
                    </div>  
             </fieldset >
             <button class="btn mt-4">Submit</button>
            </form>
        </div>
 
</template>

<script>
    import axios from "axios";
    export default {
        name: "AddTeacher",
        data() {
            return {
               teacher: { 
                     TeacherID:"",
                    FirstName: "",
                    LastName:"",
                    TeacherEmail:"",
                    TeacherPhoneNumber: "",
                    Notes: ""
                }, 
            };
        },    

        methods:{
            submitForm(){
                let apiURL = "http://172.26.54.21:8082/api/teacher/"
                axios.post(apiURL,this.teacher).catch(error => {
        console.log(error)
      });
      this.$router.push("/teachers")
} 
     }
            
        }
    
</script>
