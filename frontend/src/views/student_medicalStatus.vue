<template>
     <h1 class="mb-5 mt-5">Student Medical Status</h1>
    <div class="tablewrapper" > 
        
       
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Student_medicalStatus ID</th>
                <th>Student Medical Status</th>
                
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr>
                <td> <input class="form-control ds-input" style="150px" disabled  placeholder="Add new Status: "></td>
                <td><input  class="form-control ds-input" style="width: 150px;" v-model="student_medicalStatus.Status" ></td>
                
                <td><button class="btn" @click="saveNew(student_medicalStatus)" >Save</button></td>
              </tr>
                <tr v-for="t in Student_medicalStatuses" :key="t.StudentMedicalStatusID">
                    <td >{{t.StudentMedicalStatusID}}</td>
                    <td><input :id=" t.StudentMedicalStatusID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                    <td>
                 
                        <button  :id="t.StudentMedicalStatusID+3789147" class="btn" @click="editBt(t.StudentMedicalStatusID)">Edit</button> |
                        <button  :id="t.StudentMedicalStatusID+4789147" class="btn" @click="saveBt(t.StudentMedicalStatusID,t)" disabled>Save</button> 
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
                student_medicalStatus: {
                    StudentMedicalStatusID : null,
                    Status: "",
                    
                },
                Student_medicalStatuses: []
            }
        },
        created() {
            console.log(this.Student_medicalStatuses)
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/student_medicalStatus';
            axios.get(apiURL).then(res => {
                this.Student_medicalStatuses = res.data;
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
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student_medicalStatus/${t.StudentMedicalStatusID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(student_medicalStatus) {
            if (student_medicalStatus.Status){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student_medicalStatus/`;
          await axios.post(apiURL,student_medicalStatus).then(res => {
            this.Student_medicalStatuses.push(res.data);
                this.student_medicalStatus.Status="";
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
        }
    }
</script>
