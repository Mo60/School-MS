<template>
     <h1 class="mb-5 mt-5">Student Status</h1>
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
                <td><input  class="form-control ds-input" style="width: 150px;" v-model="studentStatus.Status" ></td>
                
                <td><button class="btn" @click="saveNew(studentStatus)" >Save</button></td>
              </tr>
                <tr v-for="t in StudentStatuses" :key="t.StudentStatusID">
                    <td >{{t.StudentStatusID}}</td>
                    <td><input :id=" t.StudentStatusID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                    <td>
                 
                        <button  :id="t.StudentStatusID+3789147" class="btn" @click="editBt(t.StudentStatusID)">Edit</button> |
                        <button  :id="t.StudentStatusID+4789147" class="btn" @click="saveBt(t.StudentStatusID,t)" disabled>Save</button> 
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
                studentStatus: {
                    StudentStatusID : null,
                    Status: "",
                    
                },
                StudentStatuses: []
            }
        },
        created() {
            console.log(this.APIBASEURL)
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/studentStatus';
            axios.get(apiURL).then(res => {
                this.StudentStatuses = res.data;
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
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/studentStatus/${t.StudentStatusID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(studentStatus) {
            if (studentStatus.Status){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/studentStatus/`;
          await axios.post(apiURL,studentStatus).then(res =>{
            this.StudentStatuses.push(res.data);
                this.studentStatus.Status="";
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
        }
    }
</script>
