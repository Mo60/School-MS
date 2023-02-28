<template>
    <h1 class="mb-5 mt-5">Student Class Status</h1>
   <div class="tablewrapper" > 
       
      
           <table class="table table-striped">
           <thead class="table-dark">
               <tr>
               <th>Student Status ID</th>
               <th>Student Status</th>
               
               <th>Action</th>
               </tr>
           </thead>
           <tbody>   
            <tr>
               <td> <input class="form-control ds-input" style="150px" disabled  placeholder="Add new Status: "></td>
               <td><input  class="form-control ds-input" style="width: 150px;" v-model="student_classStatus.Status" ></td>
               
               <td><button class="btn" @click="saveNew(student_classStatus)" >Save</button></td>
             </tr>
               <tr v-for="t in student_classStatuses" :key="t.StudentClassStatusID">
                   <td >{{t.StudentClassStatusID}}</td>
                   <td><input :id=" t.StudentClassStatusID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                   <td>
                
                       <button  :id="t.StudentClassStatusID+3789147" class="btn" @click="editBt(t.StudentClassStatusID)">Edit</button> |
                       <button  :id="t.StudentClassStatusID+4789147" class="btn" @click="saveBt(t.StudentClassStatusID,t)" disabled>Save</button> 
                    </td>
               </tr>
             
           </tbody>
           </table>    
       
   </div>

   
</template>
<script>
   import axios from "axios";

   export default {
       data() {
           return {
               student_classStatus: {
                   StudentClassStatusID : null,
                   Status: "",
                   
               },
               student_classStatuses: []
           }
       },
       created() {
        
           let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/student_classStatus';
           axios.get(apiURL).then(res => {
               this.student_classStatuses = res.data;
               // console.log(this.Student_medicalStatuses)
           }).catch(error => {
               console.log(error)
           });
       },
       methods :{
           editBt(id) {
               document.getElementById(`${id+1789147}`).disabled = false;
     
               document.getElementById(`${id+3789147}`).disabled = true;
               document.getElementById(`${id+4789147}`).disabled = false;
           },
           saveBt(id,t) {
               document.getElementById(`${id+1789147}`).disabled = true;
         
               document.getElementById(`${id+3789147}`).disabled = false;
               document.getElementById(`${id+4789147}`).disabled = true;
               //save the change in DB
               //http://localhost:8082/api/student_medicalStatus
               let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student_classStatus/${t.StudentClassStatusID}`;
           axios.put(apiURL,t).then(res => {
           }).catch(error => {
               console.log(error)
           });
           },
           // save new
           async  saveNew(student_classStatus) {
           if (student_classStatus.Status){
             let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student_classStatus/`;
         await axios.post(apiURL,student_classStatus).then(res =>{
            this.student_classStatus.push(res.data);
                this.student_classStatus.Status="";
                
         }).catch(error => {
             console.log(error)
         });
           }
           
         
         }
       }
   }
</script>
