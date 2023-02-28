<template>
    <div class="tablewrapper" > 
        
        <h1 class="mb-5 mt-5">Faculty Status</h1>
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Faculty Status ID</th>
                <th>Faculty Status</th>
                
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr>
                <td> <input class="form-control ds-input" style="100px" disabled  placeholder="Add new Faculty Status: "></td>
                <td><input  class="form-control ds-input" style="width: 100px;" v-model="facultyStatus.Status" ></td>
                
                <td><button class="btn" @click="saveNew(facultyStatus)" >Save</button></td>
              </tr>
                <tr v-for="t in FacultyStatuses" :key="t.FacultyStatusID">
                    <td >{{t.FacultyStatusID}}</td>
                    <td><input :id=" t.FacultyStatusID+1789147" class="form-control ds-input" style="width: 100px;" v-model="t.Status" disabled ></td>
                    <td>
                 
                        <button  :id="t.FacultyStatusID+3789147" class="btn" @click="editBt(t.FacultyStatusID)">Edit</button> |
                        <button  :id="t.FacultyStatusID+4789147" class="btn" @click="saveBt(t.FacultyStatusID,t)" disabled>Save</button> 
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
                facultyStatus: {
                    FacultyStatusID : null,
                    Status: "",
                    
                },
                FacultyStatuses: []
            }
        },
        created() {
            console.log(this.FacultyStatuses)
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/facultyStatus';
            axios.get(apiURL).then(res => {
                this.FacultyStatuses = res.data;
                // console.log(this.FacultyStatuses)
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
                //http://localhost:8082/api/facultyStatus
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/facultyStatus/${t.FacultyStatusID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(facultyStatus) {
            if (facultyStatus.Status){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/facultyStatus/`;
          await axios.post(apiURL,facultyStatus).then(res => {
            this.FacultyStatuses.push(res.data);
                this.facultyStatus.Status="";
          }).catch(error => {
              console.log(error)
          });
         
            }
            
          
          }
        }
    }
</script>
