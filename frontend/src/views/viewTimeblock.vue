<template>
      <h1 class="mb-5 mt-5">Timeblocks</h1>
    <div class="tablewrapper" > 
        
      
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Timeblock ID</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr>
                <td> <input class="form-control ds-input" style="100px" disabled  placeholder="Add new Time Block: "></td>
                <td><input  class="form-control ds-input" style="width: 100px;" v-model="timeBlock.StartTime" ></td>
                <td><input  class="form-control ds-input" style="width: 100px;" v-model="timeBlock.EndTime" ></td>
                <td><button class="btn" @click="saveNew(timeBlock)" >Save</button></td>
              </tr>
                <tr v-for="t in Timeblocks" :key="t.TimeblockID">

                    <td >{{t.TimeblockID}}</td>
                    <td><input :id=" t.TimeblockID+1789147" class="form-control ds-input" style="width: 100px;" v-model="t.StartTime" disabled ></td>
                    <td><input :id="t.TimeblockID+2789147" class="form-control ds-input" style="width: 100px;" v-model="t.EndTime" disabled ></td>
                    <td>
                 
                        <button  :id="t.TimeblockID+3789147" class="btn" @click="editBt(t.TimeblockID)">Edit</button> |
                        <button  :id="t.TimeblockID+4789147" class="btn" @click="saveBt(t.TimeblockID,t)" disabled>Save</button> 
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
                timeBlock: {
                    TimeblockID : null,
                    StartTime: "",
                    EndTime: ""
                },
                Timeblocks: []
            }
        },
        created() {
            console.log(this.Timeblocks)
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/timeblock';
            axios.get(apiURL).then(res => {
                this.Timeblocks = res.data;
                // console.log(this.Timeblocks)
            }).catch(error => {
                console.log(error)
            });
        },
        methods :{
            editBt(id) {
                document.getElementById(`${id+1789147}`).disabled = false;
                document.getElementById(`${id+2789147}`).disabled = false;
                document.getElementById(`${id+3789147}`).disabled = true;
                document.getElementById(`${id+4789147}`).disabled = false;
            },
            saveBt(id,t) {
                document.getElementById(`${id+1789147}`).disabled = true;
                document.getElementById(`${id+2789147}`).disabled = true;
                document.getElementById(`${id+3789147}`).disabled = false;
                document.getElementById(`${id+4789147}`).disabled = true;
                //save the change in DB
                //http://localhost:8082/api/timeBlock
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/timeblock/${t.TimeblockID}`;
            axios.put(apiURL,t).then(res => {
            }).catch(error => {
                console.log(error)
            });
            },
            // save new
            async  saveNew(timeBlock) {
            if (timeBlock.StartTime && timeBlock.EndTime ){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/timeblock/`;
          await axios.post(apiURL,timeBlock).then(res => {
                this.Timeblocks.push(res.data);
                this.timeBlock.StartTime="";
                this.timeBlock.EndTime=""
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
        }
    }
</script>
