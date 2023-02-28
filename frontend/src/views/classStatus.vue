<template>
  <h1 class="mb-5 mt-5">Class Status</h1>
 <div class="tablewrapper" > 
     
    
         <table class="table table-striped">
         <thead class="table-dark">
             <tr>
             <th>Class Status ID</th>
             <th>Class Status</th>
             
             <th>Action</th>
             </tr>
         </thead>
         <tbody> 
            <tr>
             <td> <input class="form-control ds-input" style="150px" disabled  placeholder="Add new Status: "></td>
             <td><input  class="form-control ds-input" style="width: 150px;" v-model="classStatus.Status" ></td>
             
             <td><button class="btn" @click="saveNew(classStatus)" >Save</button></td>
           </tr>  
             <tr v-for="t in classStatuses" :key="t.ClassStatusID">
                 <td >{{t.ClassStatusID}}</td>
                 <td><input :id=" t.ClassStatusID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                 <td>
              
                     <button  :id="t.ClassStatusID+3789147" class="btn" @click="editBt(t.ClassStatusID)">Edit</button> |
                     <button  :id="t.ClassStatusID+4789147" class="btn" @click="saveBt(t.ClassStatusID,t)" disabled>Save</button> 
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
             classStatus: {
                 ClassStatusID : null,
                 Status: "",
                 
             },
             classStatuses: []
         }
     },
     created() {
      
         let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/classStatus';
         axios.get(apiURL).then(res => {
             this.classStatuses = res.data;
        
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
             //http://localhost:8082/api/class_medicalStatus
             let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/classStatus/${t.ClassStatusID}`;
         axios.put(apiURL,t).then(res => {
         }).catch(error => {
             console.log(error)
         });
         },
         // save new
         async  saveNew(classStatus) {
         if (classStatus.Status){
           let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/classStatus/`;
       await axios.post(apiURL,classStatus).then(res=>{
        this.classStatuses.push(res.data);
                this.classStatus.Status="";
       }).catch(error => {
           console.log(error)
       });
      
         }
         
       
       }
     }
 }
</script>
