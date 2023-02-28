<template>
    <h1 class="mb-5 mt-5">Semesters</h1>
    <div class="tablewrapper" > 
        
        
            <table class="table table-striped">
            <thead class="table-dark">
                
                <tr>
                <th>Semester ID</th>
                <th>Name</th>
                
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr>
                <td> <input class="form-control ds-input" style="100px" disabled  placeholder="Add new Semester: "></td>
                <td><input  class="form-control ds-input" style="width: 150px;" v-model="semester.Semester" ></td>
               
                <td><button class="btn" @click="saveNew(semester)" >Save</button></td>
              </tr>
                <tr v-for="t in Semesters" :key="t.SemesterID">
                    <td >{{t.SemesterID}}</td>
                    <td><input :id=" t.SemesterID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Semester" disabled ></td>
                    
                    <td>
                 
                        <button  :id="t.SemesterID+3789147" class="btn" @click="editBt(t.SemesterID)">Edit</button> |
                        <button  :id="t.SemesterID+4789147" class="btn" @click="saveBt(t.SemesterID,t)" disabled>Save</button> 
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
                semester: {
                    SemesterID : null,
                    Semester: "",
                    
                },
                Semesters: []
            }
        },
        created() {
            console.log(this.Semesters)
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/semester';
            axios.get(apiURL).then(res => {
                this.Semesters = res.data;
                // console.log(this.Semesters)
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
                //http://localhost:8082/api/semester
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/semester/${t.SemesterID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(semester) {
            if (semester.Semester ){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/semester/`;
          await axios.post(apiURL,semester).then(res => {
                this.Semesters.push(res.data);
                this.semester.Semester=""
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
        }
    }
</script>
