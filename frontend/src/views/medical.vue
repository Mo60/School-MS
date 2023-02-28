<template>
     <h1 class="mb-5 mt-5">Medical Condition</h1>
  <div class="tablewrapper" > 
      
     
          <table class="table table-striped">
          <thead class="table-dark">
              <tr>
              <th>Medical ID</th>
              <th>Medical Condition</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>   
            <tr>
                <td> <input class="form-control ds-input" style="width: 200px" disabled  placeholder="Add new Condition: "></td>
                <td><input  class="form-control ds-input" style="width: 250px;" v-model="medical.Condition" ></td>
                <td><button class="btn" @click="saveNew(medical)" >Save</button></td>
              </tr>
              <tr v-for="t in medicals" :key="t.MedicalID">
                  <td >{{t.MedicalID}}</td>
                  <td><input :id=" t.MedicalID+1789147" class="form-control ds-input" style="width: 200px;" v-model="t.Condition" disabled ></td>
                  <td>
                      <button  :id="t.MedicalID+3789147" class="btn" @click="editBt(t.MedicalID)">Edit</button> |
                      <button  :id="t.MedicalID+4789147" class="btn" @click="saveBt(t.MedicalID,t)" disabled>Save</button> 
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
              medical: {
                MedicalID: null,
                Condition: ""
              },
              medicals: []
          }
      },
      created() {
          console.log(this.medicals)
          let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/medical';
          axios.get(apiURL).then(res => {
              this.medicals = res.data;
              // console.log(this.medicals)
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
              //http://localhost:8082/api/timeBlock
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/medical/${t.MedicalID}`;
          axios.put(apiURL,t).then(res => {
          }).catch(error => {
              console.log(error)
          });
          },
   async  saveNew(medical) {
            if (medical.Condition){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/medical/`;
          await axios.post(apiURL,medical).then(res => {
            this.medicals.push(res.data);
                this.medical.Condition="";
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
      }
  }
</script>
