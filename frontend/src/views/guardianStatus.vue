<template>
    <h1 class="mb-5 mt-5">Guardian Status</h1>
   <div class="tablewrapper" > 
       
      
           <table class="table table-striped">
           <thead class="table-dark">
               <tr>
               <th>GuardianID Status ID</th>
               <th>Guardian Status</th>
               
               <th>Action</th>
               </tr>
           </thead>
           <tbody>   
            <tr>
               <td> <input class="form-control ds-input" style="150px" disabled  placeholder="Add new Status: "></td>
               <td><input  class="form-control ds-input" style="width: 150px;" v-model="guardianStatus.Status" ></td>
               
               <td><button class="btn" @click="saveNew(guardianStatus)" >Save</button></td>
             </tr>
               <tr v-for="t in guardianStatuses" :key="t.GuardianStatusID">
                   <td >{{t.GuardianStatusID}}</td>
                   <td><input :id=" t.GuardianStatusID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                   <td>
                
                       <button  :id="t.GuardianStatusID+3789147" class="btn" @click="editBt(t.GuardianStatusID)">Edit</button> |
                       <button  :id="t.GuardianStatusID+4789147" class="btn" @click="saveBt(t.GuardianStatusID,t)" disabled>Save</button> 
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
               guardianStatus: {
                   GuardianStatusID : null,
                   Status: "",
                   
               },
               guardianStatuses: []
           }
       },
       created() {
        
           let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/guardianStatus';
           axios.get(apiURL).then(res => {
               this.guardianStatuses = res.data;
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
               let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardianStatus/${t.GuardianStatusID}`;
           axios.put(apiURL,t).then(res => {
           }).catch(error => {
               console.log(error)
           });
           },
           // save new
           async  saveNew(guardianStatus) {
           if (guardianStatus.Status){
             let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardianStatus/`;
         await axios.post(apiURL,guardianStatus).then(res =>{
            this.guardianStatuses.push(res.data);
                this.guardianStatus.Status="";
         }).catch(error => {
             console.log(error)
         });
         
           }
           
         
         }
       }
   }
</script>
