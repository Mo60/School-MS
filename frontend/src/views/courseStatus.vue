<template>
    <div class="tablewrapper" > 
        
        <h1 class="mb-3 mt-3">Course Status</h1>
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Faculty Statuse ID</th>
                <th>Faculty Status</th>
                
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr v-for="t in CourseStatuses" :key="t.CourseStatusID">
                    <td >{{t.CourseStatusID}}</td>
                    <td><input :id=" t.CourseStatusID+1789147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                    <td>
                 
                        <button  :id="t.CourseStatusID+3789147" class="btn" @click="editBt(t.CourseStatusID)">Edit</button> |
                        <button  :id="t.CourseStatusID+4789147" class="btn" @click="saveBt(t.CourseStatusID,t)" disabled>Save</button> 
                     </td>
                </tr>
                <tr>
                <td> <input class="form-control ds-input" style="150px" disabled  placeholder="Add new Course Status: "></td>
                <td><input  class="form-control ds-input" style="width: 150px;" v-model="courseStatus.Status" ></td>
                
                <td><button class="btn" @click="saveNew(courseStatus)" >Save</button></td>
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
                courseStatus: {
                    CourseStatusID : null,
                    Status: "",
                    
                },
                CourseStatuses: []
            }
        },
        created() {
            console.log(this.CourseStatuses)
            let apiURL = 'http://172.26.54.21:8082/api/courseStatus';
            axios.get(apiURL).then(res => {
                this.CourseStatuses = res.data;
                // console.log(this.CourseStatuses)
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
                //http://localhost:8082/api/courseStatus
                let apiURL = `http://172.26.54.21:8082/api/courseStatus/${t.CourseStatusID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(courseStatus) {
            if (courseStatus.Status){
              let apiURL = `http://172.26.54.21:8082/api/courseStatus/`;
          await axios.post(apiURL,courseStatus).then(res => {
            this.CourseStatuses.push(res.data);
                this.courseStatus.Status="";
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
        }
    }
</script>
