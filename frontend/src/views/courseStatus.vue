<template>
    <div class="tablewrapper" > 
        
        <h1 class="mb-5 mt-5">Course Status</h1>
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Faculty Statuse ID</th>
                <th>Faculty Status</th>
                
                <th>Action</th>
                </tr>
            </thead>
            <tbody>  
                <tr>
                <td> <input class="form-control ds-input" style="150px" disabled  placeholder="Add new Course Status: "></td>
                <td><input  class="form-control ds-input" style="width: 150px;" v-model="courseStatus.Status" ></td>
                
                <td><button class="btn" @click="saveNew(courseStatus)" >Save</button></td>
              </tr> 
                <tr v-for="t in CourseStatuses" :key="t.CourseStatusID">
                    <td >{{t.CourseStatusID}}</td>
                    <td><input :id=" t.CourseStatusID+17189147" class="form-control ds-input" style="width: 150px;" v-model="t.Status" disabled ></td>
                    <td>
                 
                        <button  :id="t.CourseStatusID+37189147" class="btn" @click="editBt(t.CourseStatusID)">Edit</button> |
                        <button  :id="t.CourseStatusID+47189147" class="btn" @click="saveBt(t.CourseStatusID,t)" disabled>Save</button> 
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
                courseStatus: {
                    CourseStatusID : null,
                    Status: "",
                    
                },
                CourseStatuses: []
            }
        },
       async created() {
            await setTimeout(() =>  5000);
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/courseStatus';
          await  axios.get(apiURL).then(res => {
                this.CourseStatuses = res.data;
                // console.log(this.CourseStatuses)
            }).catch(error => {
                console.log(error)
            });
        },
        methods :{
            editBt(id) {
                document.getElementById(`${id+17189147}`).disabled = false;
      
                document.getElementById(`${id+37189147}`).disabled = true;
                document.getElementById(`${id+47189147}`).disabled = false;
            },
            saveBt(id,t) {
                document.getElementById(`${id+17189147}`).disabled = true;
          
                document.getElementById(`${id+37189147}`).disabled = false;
                document.getElementById(`${id+47189147}`).disabled = true;
                //save the change in DB
                //http://localhost:8082/api/courseStatus
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/courseStatus/${t.CourseStatusID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(courseStatus) {
            if (courseStatus.Status){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/courseStatus/`;
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
