<template>
    <div class="cont2">
      <div class="box-wrapper">
        <div class="box pt-3">
          <h2 class="mb-3">Student Information</h2>
          <router-link
              class="btn"
              :to="{
                name: 'EditStudent',
                params: { StudentID: student[0].StudentID },
              }"
              ><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link
            >
        
          <div class="rows">
            <span class="label">Name:</span
            ><span>
              {{ student[0].student_first_name }} {{ student[0].student_middle_name}}
              {{ student[0].student_last_name }}</span
            >
          </div>
          <div class="rows">
            <span class="label">ID:</span><span>{{ student[0].StudentID }}</span>
          </div>
          <div class="rows"><span class="label">DOB:</span>{{ student[0].DOB }}</div>
          <div class="rows"><div class="label">Status</div>{{student[0].Status}} </div>
          <h4 class="mt-4">Parents/Guardians</h4>
          <div>
          <div class="rows">
              <router-link
                class="mx-3"
                id="router"
                v-for="guardian in student_guardian"
                :key="guardian.GuardianID"
                :to="{
                  name: 'viewParent',
                  params: { GuardianID: guardian.GuardianID },
                }"
                >{{ guardian.gFName }} {{ guardian.gLName }} 
              </router-link>
          </div>
            <router-link
              class="btn"
              :to="{
                name: 'addParent2',
                params: { studentID: student[0].StudentID },
              }"
              ><font-awesome-icon icon="fa-solid fa-plus" class="" v-if="student_guardian.length<2"/></router-link>
            
          </div>
        </div>
        <div class="box pt-3">
          <h4 class="mb-3">Address</h4>
          <div class="rows">
            <span class="label">Address Line 1</span
            ><span>{{ student[0].AddressLine1 }}</span>
          </div>
          <div class="rows" v-if="student[0].AddressLine2 != ''">
            <span class="label">Address Line 2</span
            ><span>{{ student[0].AddressLine2 }}</span>
          </div>
          <div class="rows" v-if="student.State != ''">
            <span class="label">State</span><span>{{ student[0].State }}</span>
          </div>
          <div class="rows">
            <span class="label">City</span><span>{{ student[0].City }}</span>
          </div>
          <div class="rows">
            <span class="label">Zip Code</span><span>{{ student[0].Zip }}</span>
          </div>
        </div>
      </div>
      <div class="profile">
        <div class="profile-body mt-5">
          <div class="info">
            <h2>Health Information</h2>
            <div v-for="sm in student_medical" :key="sm.StudentID">
              <div>
                  <div class="rows">
                    <span class="label"> Medical Condition:</span>
                    <span>{{ sm.Condition }}</span>
                  </div>
                  <div class="rows">
                    <span class="label">Description:</span> <span>{{ sm.Description }}</span>
                    
                  </div>
                  <div class="rows">
                    <span class="label">Condition Status</span> <span>{{sm.Status}}</span>
                  </div>
                
              </div>
           <div class="d-flex justify-content-end">
                  <button type="button"  class="btn mb-2" @click="getID2(sm._id)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4">
                            <font-awesome-icon
                              icon="fa-solid fa-pen-to-square"
                            ></font-awesome-icon>
                    </button>
           </div>
            </div>
         
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <font-awesome-icon icon="fa-solid fa-plus" class="" />
                </button>
        
          </div>
          <div>
            <h2 class="mb-4">Course History</h2>
            <div class="empty-arr" v-if="student_class2.length == 0">
              No class record
            </div>
            <div class="table-wrapper" v-else>
              <table class="table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th>Course</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Semester</th>
                    <th>Course Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tr v-for="s in student_class2" :key="s.StudentID">
                  <td>{{ s.CourseName }}</td>
                  <td>{{ s.WeekDay }}</td>
                  <td>{{ s.StartTime }} - {{ s.EndTime }}</td>
                  <td>{{s.Semester}}</td>
                  <td>{{ s.Status }}</td>
                  <td>
                <button type="button"  class="btn" @click="getID(s._id)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3">
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
                Enroll in Class
              </button>
            </div>
          </div>
  
          <!-- Button trigger modal -->
  
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
                    Add a Health Condition
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addMedicalCondition">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">* Condition</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="student_medical2.MedicalID"
                            required
                          >
                            <option>Select an Option</option>
                            <option
                              :value="m.MedicalID"
                              v-for="m in medical"
                              :key="m.MedicalID"
                            >
                              {{ m.Condition }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">Description</label>
                          <input
                            type="text"
                            v-model="student_medical2.Description"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">*Condition Status</label>
                          <select
                         
                            v-model="student_medical2.StudentMedicalStatusID"
                            class="form-select"
                            required
                          >
                          <option>Select an Option</option>
                          <option :value="status.StudentMedicalStatusID" v-for="status in medicalStatus" :key="status.StudentMedicalStatusID">{{status.Status}}</option>
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
                    @click="addMedicalCondition"
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
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Enroll in a Class
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="enroll">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="" class="form-label">* Select Class</label>
                          <select
                            name=""
                            id=""
                            v-model="student_class.ClassID"
                            class="form-select mb-3"
                            required
                          >
                            <option selected disabled value="">
                              Select an Option
                            </option>
                            <option
                              v-for="Class in classes"
                              :key="Class.ClassID"
                              :value="Class.ClassID"
                            >
                              {{ Class.CourseName }}&nbsp;|&nbsp;
                              {{ Class.WeekDay }}&nbsp;|&nbsp;
                              {{ Class.StartTime }}-{{ Class.EndTime }}
                            </option>
                          </select>
                          <label for="" class="form-label">* Status</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="student_class.StudentClassStatusID"
                            required
                          >
                            <option selected disabled value="">
                              Select an Option
                            </option>
                            <option
                              :value="status.StudentClassStatusID"
                              v-for="status in statuses"
                              :key="status.StudentClassStatusID"
                            >
                              {{ status.Status }}
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
                  <button type="submit" class="btn btn-primary" @click="enroll">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Enroll in a Class
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="enroll">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="" class="form-label">* Select Class</label>
                          <select
                            name=""
                            id=""
                            v-model="student_class.ClassID"
                            class="form-select mb-3" required
                          >
                            <option selected disabled value="">
                              Select an Option
                            </option>
                            <option
                              v-for="Class in classes"
                              :key="Class.ClassID"
                              :value="Class.ClassID"
                            >
                              {{ Class.CourseName }}&nbsp;|&nbsp;
                              {{ Class.WeekDay }}&nbsp;|&nbsp;
                              {{ Class.StartTime }}-{{ Class.EndTime }}
                            </option>
                          </select>
                          <label for="" class="form-label">* Status</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="student_class.StudentClassStatusID"
                            required
                          >
                            <option selected disabled value="">
                              Select an Option
                            </option>
                            <option
                              :value="status.StudentClassStatusID"
                              v-for="status in statuses"
                              :key="status.StudentClassStatusID"
                            >
                              {{ status.Status }}
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
                  <button type="submit" class="btn btn-primary" @click="enroll">
                   Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit Enrollment
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="editStudentClass">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="" class="form-label">* Select Class</label>
                          <select
                            name=""
                            id=""
                            v-model="editData.ClassID"
                            class="form-select mb-3" required
                          >
                           
                            <option
                              v-for="Class in classes"
                              :key="Class.ClassID"
                              :value="Class.ClassID"
                              
                            >

                              {{ Class.CourseName }}&nbsp;|&nbsp;
                              {{ Class.WeekDay }}&nbsp;|&nbsp;
                              {{ Class.StartTime }}-{{ Class.EndTime }}
                            </option>
                          </select>
                          <label for="" class="form-label">* Status</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="editData.StudentClassStatusID"
                            required
                          >
                           
                            <option
                              :value="status.StudentClassStatusID"
                              v-for="status in statuses"
                              :key="status.StudentClassStatusID"
                            >
                              {{ status.Status }}
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
                  <button type="submit" class="btn btn-primary" @click="editStudentClass">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModal4"
            tabindex="0"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel4">
                    Edit Health Condition
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="editMedical">
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">* Condition</label>
                          <select
                            name=""
                            id=""
                            class="form-select"
                            v-model="editHealthData.MedicalID"
                            required
                          >
                            <option>Select an Option</option>
                            <option
                              :value="m.MedicalID"
                              v-for="m in medical"
                              :key="m.MedicalID"
                            >
                              {{ m.Condition }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">Description</label>
                          <input
                            type="text"
                            v-model="editHealthData.Description"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col">
                          <label for="">* Condition Status</label>
                          <select
                         
                            v-model="editHealthData.StudentMedicalStatusID"
                            class="form-select" required
                          >
                          <option>Select an Option</option>
                          <option :value="status.StudentMedicalStatusID" v-for="status in medicalStatus" :key="status.StudentMedicalStatusID">{{status.Status}}</option>
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
                    @click="editMedical"
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
  </template>
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        studentID: this.$route.params.StudentID,
        student: [],
        student_guardian:[],
        medical: [],
        medicalStatus:[],
        student_medical: [],
        student_medical2: {
          StudentID: this.$route.params.StudentID,
          MedicalID: "",
          Description: "",
          StudentMedicalStatusID:""
        },
        classes: [],
        statuses: [],
        student_class: {
          StudentID: parseInt( this.$route.params.StudentID) ,
          ClassID: "",
          StudentClassStatusID: "",
        },
        student_class2: [],
        val:"",
        editData:{
          StudentID:parseInt( this.$route.params.StudentID) ,
          ClassID: "",
          StudentClassStatusID: "",
        },
        editHealthData:{
            StudentID: parseInt(this.$route.params.StudentID),
          MedicalID: "",
          Description: "",
          StudentMedicalStatusID:""
        },
        editID:"",
        editID2:""
      };
    },
    created() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/view_students/${this.studentID}`;
      axios
        .get(apiURL)
        .then((res) => {
          this.student = res.data;
          console.log(this.student)
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/student_class_view/${this.studentID}`;
          axios
            .get(apiURL2)
            .then((res2) => {
              this.student_class2 = res2.data;
              console.log(this.student_class);
            })
            .catch((error) => {
              console.log(error);
            })
            .then(() => {
              let apiURL3 = this.APIBASEURL + ":" + this.APIPORT +`/api/medical`;
              axios
                .get(apiURL3)
                .then((res) => {
                  this.medical = res.data;
                })
                .then(() => {
                  let apiURL4 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/student_medical_view/${this.studentID}`;
                  axios
                    .get(apiURL4)
                    .then((res) => {
                      this.student_medical = res.data;
                     
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                    .then(() => {
                      let apiURL5 =
                      this.APIBASEURL + ":" + this.APIPORT +"/api/student_classstatus";
                      axios
                        .get(apiURL5)
                        .then((res) => {
                          this.statuses = res.data;
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                        .then(() => {
                          let apiURL6 =
                          this.APIBASEURL + ":" + this.APIPORT +"/api/reports/class_detail_list1";
                          axios
                            .get(apiURL6)
                            .then((res) => {
                              this.classes = res.data.filter(
                                (x) =>
                                  x.Status.includes("Open") ||
                                  x.Status.includes("Waitlist")
                              );
                              console.log(this.classes);
                            }).then(()=>{
                              let apiURL7=this.APIBASEURL + ":" + this.APIPORT +`/api/reports/guardian_student_view/studentid/${this.studentID}`
                              axios.get(apiURL7).then((res)=>{
                                this.student_guardian=res.data
                                console.log(this.student_guardian)
                              }) .then(()=>{
                                let apiURL8=this.APIBASEURL + ":" + this.APIPORT +"/api/student_medicalstatus"
                                axios.get(apiURL8).then((res)=>{
                                  this.medicalStatus=res.data
                                }).catch((error) => {
                              console.log(error);
                            });
                              })
                              .catch((error) => {
                              console.log(error);
                            });
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        });
    },
    methods: {
      addMedicalCondition() {
        let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student_medical`;
        axios
          .post(apiURL, this.student_medical2).then(()=>{
            let apiURL4 = this.APIBASEURL + ":" + this.APIPORT +`api/reports/student_medical_view/${this.studentID}`;
                  axios
                    .get(apiURL4)
                    .then((res) => {
                      this.student_medical = res.data;
                    this.student_medical2={
                      MedicalID: "",
          Description: "",
          StudentMedicalStatusID:""
                    }
                    })
                    .catch((error) => {
                      console.log(error);
                    })
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
  
          });
      },
      enroll() {
        let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/student_class/`;
        axios
          .post(apiURL2, this.student_class)    .catch((error) => {
            console.log(error);
          })
          .then(() => {
            let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/student_class_view/${this.studentID}`;
          axios
            .get(apiURL2)
            .then((res2) => {
              this.student_class2 = res2.data;
              this.student_class={
                ClassID: "",
          StudentClassStatusID: "",
              }
              console.log(this.student_class);
            }) .catch((error) => {
            console.log(error);
          });
           
          })
  
          .catch((error) => {
            console.log(error);
          });
  
      },
  
      editStudentClass(){
          let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/student_class/${this.editID}`;
        axios
          .put(apiURL2, this.editData)   .catch((error) => {
            console.log(error);
          })
          .then(() => {
            console.log(this.editData);
            let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/student_class_view/${this.studentID}`;
          axios
            .get(apiURL2)
            .then((res2) => {
              this.student_class2 = res2.data;
              this.student_class={
                ClassID: "",
          StudentClassStatusID: "",
              }
            }).catch((error) => {
            console.log(error);
          });
  
          })
  
          .catch((error) => {
            console.log(error);
          });
  
      }, 
      getID(value){
         let apiURL=this.APIBASEURL + ":" + this.APIPORT +`/api/student_class/${value}`
         axios.get(apiURL).then((res)=>{
          this.editData=res.data;
          this.editID=value;
         }) .catch((error) => {
            console.log(error);
          });
      },
      getID2(value){
        let apiURL= this.APIBASEURL + ":" + this.APIPORT +`/api/student_medical/${value}`
        axios.get(apiURL).then((res)=>{
    this.editHealthData=res.data;
    this.editID2=value;
    console.log(this.editID2)
}).catch((error) => {
            console.log(error);
          });
      }
      ,
      editMedical(){
let apiURL= this.APIBASEURL + ":" + this.APIPORT +`api/student_medical/${this.editID2}`
axios
          .put(apiURL, this.editHealthData) 
          .then(() => {
            let apiURL4 = this.APIBASEURL + ":" + this.APIPORT +`/api/reports/student_medical_view/${this.studentID}`;
                  axios
                    .get(apiURL4)
                    .then((res) => {
                      this.student_medical = res.data;
                     
                     
                    })
                    .catch((error) => {
                      console.log(error);
                    })
          })
  
          .catch((error) => {
            console.log(error);
          });

  }
}
  }
  </script>