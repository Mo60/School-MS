<template>
  <div class="tablewrapper" > 
      
      <h1 class="mb-5 mt-5">Relationships</h1>
          <table class="table table-striped">
          <thead class="table-dark">
              <tr>
              <th>ID</th>
              <th>Relationships</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>   
            <tr>
                <td> <input class="form-control ds-input" style="width: 200px" disabled  placeholder="Add Relationship: "></td>
                <td><input  class="form-control ds-input" style="width: 250px;" v-model="guardianRelationship.Relationship" ></td>
                <td><button class="btn" @click="saveNew(guardianRelationship)" >Save</button></td>
              </tr>
              <tr v-for="t in guardianRelationships" :key="t.RelationshipID">
                  <td >{{t.RelationshipID}}</td>
                  <td><input :id=" t.RelationshipID+1789147" class="form-control ds-input" style="width: 200px;" v-model="t.Relationship" disabled ></td>
                  <td>
                      <button  :id="t.RelationshipID+3789147" class="btn" @click="editBt(t.RelationshipID)">Edit</button> |
                      <button  :id="t.RelationshipID+4789147" class="btn" @click="saveBt(t.RelationshipID,t)" disabled>Save</button> 
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
              guardianRelationship: {
                RelationshipID: null,
                Relationship: ""
              },
              guardianRelationships: []
          }
      },
      created() {
          console.log(this.guardianRelationships)
          let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/guardianRelationship';
          axios.get(apiURL).then(res => {
              this.guardianRelationships = res.data;
              // console.log(this.guardianRelationships)
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
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardianRelationship/${t.RelationshipID}`;
          axios.put(apiURL,t).then(res => {
          }).catch(error => {
              console.log(error)
          });
          },
   async  saveNew(guardianRelationship) {
            if (guardianRelationship.Relationship){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardianRelationship/`;
          await axios.post(apiURL,guardianRelationship).then(res => {
            this.guardianRelationships.push(res.data);
                this.guardianRelationship.Relationship=null;
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
      } 
  }
</script>
