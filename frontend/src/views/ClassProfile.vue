<template>
  <div class="cont2">
    <div class="box-wrapper class">
      <div class="box pt-5 pb-5">
        <h2 class="mb-3">Class Details</h2>
        <router-link
          class="btn"
          :to="{
            name: 'EditClass',
            params: { ClassID: classInfo[0].ClassID },
          }"
          ><font-awesome-icon
            icon="fa-solid fa-pen-to-square"
          ></font-awesome-icon
        ></router-link>
        <div class="rows">
          <span class="label">Class ID</span>{{ classInfo[0].ClassID }}
        </div>
        <div class="rows">
          <span class="label">Course Name</span>{{ classInfo[0].CourseName }}
        </div>
        <div class="rows">
          <span class="label">Semester</span
          ><span>{{ classInfo[0].Semester }}</span>
        </div>
        <div class="rows">
          <span class="label">Time Period</span
          ><span
            >{{ classInfo[0].StartTime }} - {{ classInfo[0].EndTime }}</span
          >
        </div>
        <div class="rows">
          <span class="label">Status</span
          ><span>{{ classInfo[0].Status }}</span>
        </div>

        <div class="rows">
          <span class="label">Capacity</span
          ><span>{{ classInfo[0].Capacity }}</span>
        </div>
        <div class="rows">
          <span class="label">Enrollment Total</span
          ><span>{{ classInfo[0].EnrollmentTotal }}</span>
        </div>
      </div>
    </div>
    <div class="profile">
      <div class="profile-body">
        <div>
          <h2 class="mt-5 mb-5">Students Enrolled</h2>

          <div class="grid">
            <div class="box" v-for="student in students" :key="student.ClassID">
              <div class="rows mb-2">
                <span class="label">Student ID:</span>
                <span>{{ student.StudentID }}</span>
              </div>
              <div class="rows mb-2 d-flex justify-content-center">
                <router-link
                  :to="{
                    name: 'viewStudent',
                    params: { StudentID: student.StudentID },
                  }"
                  >{{ student.FirstName }} {{ student.LastName }}</router-link
                >
              </div>
            </div>
          </div>
        
        </div>
        <div>
            <h2 class="mb-4 mt-5">Assigned Teachers</h2>
            <div class="empty-arr" v-if="faculty_class.length == 0">
              No Assigned Teachers
            </div>
            <div class="table-wrapper" v-else>
              <table class="table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th>Teacher ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tr v-for="f in faculty_class" :key="f.FacultyID">
                  <td>{{ f.FacultyID }}</td>
                  <td>{{ f.FirstName }}</td>
                  <td>{{ f.LastName}} </td>
                 
                  <td>
                <button type="button"  class="btn" @click="getID(f._id)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
                        <font-awesome-icon
                          icon="fa-solid fa-pen-to-square"
                        ></font-awesome-icon>
                </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="d-flex mt-4">
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Add a Teacher
              </button>
            </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="0"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel2">
                   Change Teacher
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="editTeacher">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">* Teachers</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="editData.FacultyID"
                          >
                            <option>Select an Option</option>
                            <option
                              :value="f.FacultyID"
                              v-for="f in facultyList"
                              :key="f.FacultyID"
                            >
                              {{ f.FirstName}} {{f.LastName}}
                            </option>
                          </select>
                        </div>
                      </div>
                
                    </fieldset>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click="editTeacher"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="0"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel2">
                   Add a Teacher
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addTeacher">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">Teachers</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="faculty_class2.FacultyID"
                          >
                            <option>Select an Option</option>
                            <option
                              :value="f.FacultyID"
                              v-for="f in facultyList"
                              :key="f.FacultyID"
                            >
                              {{ f.FirstName}} {{f.LastName}}
                            </option>
                          </select>
                        </div>
                      </div>
                
                    </fieldset>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    @click="addTeacher"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      classInfo: [],
      classID: this.$route.params.ClassID,
      students: [],
      faculty_class: [],
      faculty_class2:{
FacultyID:"",
        ClassID:this.$route.params.ClassID
      },
      editData:{
        FacultyID:"",
        ClassID:this.$route.params.ClassID
 
      },
   
      facultyList:[],
      facultyClassID:""
    };
  },
  created() {
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/class_view/${this.classID}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.classInfo = res.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/students_in_class_view/${this.classID}`;
        axios
          .get(apiURL)
          .then((res) => {
            this.students = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/faculty_class_list/`;
            axios
              .get(apiURL2)
              .then((res) => {
                this.faculty_class = res.data.filter(
                  (x) => x.ClassID == this.classID
                );
                console.log(this.classID)
                console.log(this.faculty_class);
              })
              .catch((error) => {
                console.log(error);
              }).then(()=>{
                let apiURL3=this.APIBASEURL + ":" + this.APIPORT +`/api/faculty`
                axios.get(apiURL3).then((res)=>{
                this.facultyList=res.data;

                })
              })
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    getID(value){
        this.facultyClassID=value
let apiURL= this.APIBASEURL + ":" + this.APIPORT +`/api/faculty_class/${value} `
axios.get(apiURL).then((res)=>{
this.editData=res.data;
})
    },

    editTeacher(){
        let apiURL= this.APIBASEURL + ":" + this.APIPORT +`/api/faculty_class/${this.facultyClassID} `
        axios.put(apiURL,this.editData).then(()=>{
            let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/faculty_class_list/`;
            axios
              .get(apiURL2)
              .then((res) => {
                this.faculty_class = res.data.filter(
                  (x) => x.ClassID == this.classID
                );
                console.log(this.classID)
                console.log(this.faculty_class);
              })
              .catch((error) => {
                console.log(error);
              })
        }).catch((error) => {
                console.log(error);
              })
    },

    addTeacher(){
        let apiURL= this.APIBASEURL + ":" + this.APIPORT +`/api/faculty_class/ `
        axios.post(apiURL,this.faculty_class2).then(()=>{
            this.faculty_class2={
                facultyID:""
            }
            let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +  `/api/reports/faculty_class_list/`;
            axios
              .get(apiURL2)
              .then((res) => {
                this.faculty_class = res.data.filter(
                  (x) => x.ClassID == this.classID
                );
                console.log(this.classID)
                console.log(this.faculty_class);
              })
              .catch((error) => {
                console.log(error);
              })

        })
    }
  }
};
</script>