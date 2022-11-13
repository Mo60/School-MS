<template>
    <div class="tablewrapper" > 
        
        <h1 class="mb-3 mt-3">FacultyStatuses</h1>
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Faculty Statuse ID</th>
                <th>Faculty Status</th>
                <th>End Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr v-for="t in FacultyStatuses" :key="t.FacultyStatusID">
                    <td >{{t.FacultyStatusID}}</td>
                    <td><input :id=" t.FacultyStatusID+1789147" class="form-control ds-input" style="width: 100px;" v-model="t.Status" disabled ></td>
                    <td>
                 
                        <button  :id="t.FacultyStatusID+3789147" class="btn" @click="editBt(t.FacultyStatusID)">Edit</button> |
                        <button  :id="t.FacultyStatusID+4789147" class="btn" @click="saveBt(t.FacultyStatusID,t)" disabled>Save</button> 
                     </td>
                </tr>
                <tr>
                <td> <input class="form-control ds-input" style="100px" disabled  placeholder="Add new Time Block: "></td>
                <td><input  class="form-control ds-input" style="width: 100px;" v-model="facultyStatus.Status" ></td>
                
                <td><button class="btn" @click="saveNew(facultyStatus)" >Save</button></td>
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
            let apiURL = 'http://172.26.54.21:8082/api/facultyStatus';
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
                let apiURL = `http://172.26.54.21:8082/api/facultyStatus/${t.FacultyStatusID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(facultyStatus) {
            if (facultyStatus.Status){
              let apiURL = `http://172.26.54.21:8082/api/facultyStatus/`;
          await axios.post(apiURL,facultyStatus).then(res => {
          }).catch(error => {
              console.log(error)
          });
          this.$router.go()
            }
            
          
          }
        }
    }
</script>
