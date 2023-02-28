<template>
    <h1 class="mb-5 mt-5">Days</h1>
  <div class="tablewrapper" > 
      
      
          <table class="table table-striped">
          <thead class="table-dark">
              <tr>
              <th>Day ID</th>
              <th>Class Days</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>  
            <tr>
                <td> <input class="form-control ds-input" style="width: 200px" disabled  placeholder="Add new Class Days: "></td>
                <td><input  class="form-control ds-input" style="width: 250px;" v-model="day.WeekDay" ></td>
                <td><button class="btn" @click="saveNew(day)" >Save</button></td>
              </tr> 
              <tr v-for="t in days" :key="t.DayID">
                  <td >{{t.DayID}}</td>
                  <td><input :id=" t.DayID+1789147" class="form-control ds-input" style="width: 200px;" v-model="t.WeekDay" disabled ></td>
                  <td>
                      <button  :id="t.DayID+3789147" class="btn" @click="editBt(t.DayID)">Edit</button> |
                      <button  :id="t.DayID+4789147" class="btn" @click="saveBt(t.DayID,t)" disabled>Save</button> 
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
              day: {
                DayID: null,
                WeekDay: ""
              },
              days: []
          }
      },
      created() {
          console.log(this.days)
          let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/day';
          axios.get(apiURL).then(res => {
              this.days = res.data;
              // console.log(this.days)
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
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/day/${t.DayID}`;
          axios.put(apiURL,t).then(res => {
          }).catch(error => {
              console.log(error)
          });
          },
   async  saveNew(day) {
            if (day.WeekDay){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/day/`;
          await axios.post(apiURL,day).then(res => {
            this.days.push(res.data);
                this.day.WeekDay="";
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
      } 
  }
</script>
