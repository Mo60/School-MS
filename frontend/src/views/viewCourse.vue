<template>
   <h1 class="mb-5 mt-5">Courses</h1>
  <div class="flex-wrapper" v-if="courses.length == 0 && loaded">

<div class="empty-arr" >
   <p>No Courses Found</p>
   <a class="btn mt-3"><router-link :to="{name:'addcourse'}">Add Course</router-link></a>
</div>
</div>
  <div class="tablewrapper" > 
    <!-- <div class="d-flex mb-4 justify-content-center">
      <div class="col-md-4 mx-4">
        <input
          type="search"
          v-model="searchByAll"
          class="form-control"
          @input="searchAll"
          placeholder="Search Here..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
  
    </div> -->
     
          <table class="table table-striped">
          <thead class="table-dark">
              <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
              </tr>
          </thead>
          <tbody>   
              <tr v-for="t in courseList" :key="t.CourseID">
                  <td >{{t.CourseID}}</td>
                  <td><input :id=" t.CourseID+1789147" class="form-control ds-input" style="width: 200px;" v-model="t.CourseName" disabled ></td>
                  <td><input :id=" t.CourseID+2789147" class="form-control ds-input" style="width: 300px;" v-model="t.Description" disabled ></td>
                  <td><select :id=" t.CourseID+21789147" disabled name="" class="form-select"  v-model="t.CourseStatusID">
                        <option 
                          :value="g.CourseStatusID"
                          class="form-select"
                          v-for="g in courseStatuses"
                          :key="g.CourseStatusID">
                          {{ g.Status }}
                        </option>
                      </select>
                  </td>
                  <td>
                      <button  :id="t.CourseID+3789147" class="btn" @click="editBt(t.CourseID)">Edit</button> |
                      <button  :id="t.CourseID+4789147" class="btn" @click="saveBt(t.CourseID,t)" disabled>Save</button> 
                   </td>
              </tr>
              <tr>
                <td> <input class="form-control ds-input" style="width: 200px" disabled  placeholder="Add new Course: "></td>
                <td><input  class="form-control ds-input" style="width: 150px;" v-model="course.CourseName" ></td>
                <td><input  class="form-control ds-input" style="width: 300px;" v-model="course.Description" ></td>
                <td><select  name="" class="form-select"  v-model="course.CourseStatusID">
                        <option 
                          :value="g.CourseStatusID"
                          class="form-select"
                          v-for="g in courseStatuses"
                          :key="g.CourseStatusID">
                          {{ g.Status }}
                        </option>
                      </select>
                  </td>
                <td><button class="btn" @click="saveNew(course)" >Save</button>
                    <!-- <button data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button> -->
                </td>
              </tr>
          </tbody>
          </table>    
      
  </div>
<!-- model -->
  <div
            class="modal fade "
            id="exampleModal"
            tabindex="0"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog  modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body">
                      <courseStatus/>
                    </div>
                    <div class="modal-footer">
                </div>
              </div>
            </div>
          </div>

  
</template>
<script>
  import CourseStatus from "./classStatus.vue";
  import axios from "axios";

  export default {
    components:{
        CourseStatus  
        },
      data() {
          return {
              courses: [],
              courseList:[],
              course: {
                CourseID: null,
                CourseName: "",
                Description: "",
                CourseStatusID: "",
                
              },
              searchByAll:"",
              courseStatuses:[],
              courseStatus: {
                CourseStatusID: "",
                Status: "",
              }
          }
      },
    async  created() {
          let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/course';
       await   axios.get(apiURL).then(res => {
              this.courses = res.data;
              this.courseList=res.data;
              // console.log(this.course_views)
          }).catch(error => {
              console.log(error)
          });
          let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +'/api/courseStatus';
          axios.get(apiURL2).then(res => {
              this.courseStatuses = res.data;
          }).catch(error => {
              console.log(error)
          });
      },
      methods :{
        searchAll(){
          const result = this.courses.filter(
        (item) =>
          item.CourseName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.Status.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          )
          
      );
      //save the results in the filtering list
      this.courseList = result;
        },
          editBt(id) {
              document.getElementById(`${id+1789147}`).disabled = false;
              document.getElementById(`${id+2789147}`).disabled = false;
              document.getElementById(`${id+21789147}`).disabled = false;
              document.getElementById(`${id+3789147}`).disabled = true;
              document.getElementById(`${id+4789147}`).disabled = false;
          },
          saveBt(id,t) {
              document.getElementById(`${id+1789147}`).disabled = true;
              document.getElementById(`${id+2789147}`).disabled = true;
              document.getElementById(`${id+21789147}`).disabled = true;
              document.getElementById(`${id+3789147}`).disabled = false;
              document.getElementById(`${id+4789147}`).disabled = true;
              //save the change in DB
              //http://localhost:8082/api/timeBlock
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/course/${t.CourseID}`;
          axios.put(apiURL,t).then(res => {
          }).catch(error => {
              console.log(error)
          });
          },
   async  saveNew(course) {
            if (course.CourseName){
              let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/course/`;
          await axios.post(apiURL,course).then(res => {
            this.courses.push(res.data);
                this.course.CourseName="";
                this.course.Description="",
                this.course.CourseStatusID=""
          }).catch(error => {
              console.log(error)
          });
            }
            
          
          }
      }
  }
</script>
