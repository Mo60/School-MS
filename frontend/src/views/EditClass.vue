<template>
  <h1 class="mt-5">Edit Class</h1>
  <div class="wrapper3">
    <form @submit.prevent="handleSubmitForm" class="mb-5">
      <fieldset class="form-control">
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">Teacher ID</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Faculty_Class.FacultyID"
              required
            >
              <option
                :value="teacher.FacultyID"
                v-for="teacher in TeacherList"
                :key="teacher.FacultyID"
              >
                {{ teacher.FirstName }} {{ teacher.LastName }}
              </option>
            </select>
          </div>

          <div class="col">
            <label for="" class="form-label">Course</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Class.CourseID"
              required
            >
              <option
                :value="c.CourseID"
                v-for="c in courses"
                :key="c.CourseID"
              >
                {{ c.CourseName }} {{ c.Status }}
              </option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <!-- Semester -->
          <div class="col">
            <label for="" class="form-label">Semester</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Class.SemesterID"
              required
            >
              <option
                :value="s.SemesterID"
                v-for="s in semeseters"
                :key="s.SemesterID"
              >
                {{ s.Semester }}
              </option>
            </select>
          </div>
          <!-- TimeBlock -->
          <div class="col">
            <label for="" class="form-label">Time Block</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Class.TimeblockID"
              required
            >
              <option
                :value="t.TimeblockID"
                v-for="t in timeBlocks"
                :key="t.TimeBlockID"
              >
                {{ t.StartTime }} - {{ t.EndTime }}
              </option>
            </select>
          </div>
        </div>
        <!-- Day -->
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">Day</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Class.DayID"
              required
            >
              <option :value="d.DayID" v-for="d in days" :key="d.DayID">
                {{ d.WeekDay }}
              </option>
            </select>
          </div>
          <!-- ClassStatus -->
          <div class="col">
            <label for="" class="form-label">Class Status</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Class.ClassStatusID"
              required
            >
              <option
                :value="cs.ClassStatusID"
                v-for="cs in classstatuses"
                :key="cs.ClassStatusID"
              >
                {{ cs.Status }}
              </option>
            </select>
          </div>
          <!-- Capacity -->
          <div class="col">
            <label for="" class="form-label">Capacity</label>
            <input
              type="number"
              class="form-control"
              v-model="Class.Capacity"
              required
            />
          </div>
        </div>
      </fieldset>
      <button class="btn mt-3">Submit</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "AddClass",
  data() {
    return {
      Class: {
        CourseID: "",
        SemesterID: "",
        TimeblockID: "",
        DayID: "",
        ClassStatusID: "",
        Capacity: "",
        FacultyID: "",
        MaxCapacity: "",
        Lesson: "",
        Notes: "",
      },

      Faculty_Class: {
        ClassID: this.$route.params.ClassID,
        FacultyID: "",
      },
      courses: [],
      semeseters: [],
      timeBlocks: [],
      days: [],
      classstatuses: [],
      TeacherList: [],
      ClassID: this.$route.params.ClassID,
      faculty_class_id: "",
    };
  },

  methods: {
    handleSubmitForm() {
      let apiURL = `http://172.26.54.21:8082/api/class/${this.ClassID}`;

      axios
        .put(apiURL, this.Class)
        .then((res) => {
          //changing the view to the list
          this.$router.push("/classes");
          this.Class = {
            CourseID: "",
            SemesterID: "",
            TimeblockID: "",
            DayID: "",
            ClassStatusID: "",
            Capacity: "",
            FacultyID: "",
            MaxCapacity: "",
            Lesson: "",
            Notes: "",
          };
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          let apiURL2 = `http://172.26.54.21:8082/api/faculty_class/${this.faculty_class_id}`;
          axios.put(apiURL2,this.Faculty_Class) .catch((error) => {
          console.log(error);
        });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    // get options from the api

    let apiURL = "http://172.26.54.21:8082/api/faculty/";
    axios
      .get(apiURL)
      .then((res) => {
        this.TeacherList = res.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        let apiURL1 = "http://172.26.54.21:8082/api/course/";
        axios
          .get(apiURL1)
          .then((res) => {
            this.courses = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            let apiURL2 = "http://172.26.54.21:8082/api/semester/";
            axios
              .get(apiURL2)
              .then((res) => {
                this.semeseters = res.data;
              })
              .catch((error) => {
                console.log(error);
              })
              .then(() => {
                let apiURL3 = "http://172.26.54.21:8082/api/timeblock/";
                axios
                  .get(apiURL3)
                  .then((res) => {
                    this.timeBlocks = res.data;
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                  .then(() => {
                    let apiURL4 = "http://172.26.54.21:8082/api/day/";
                    axios
                      .get(apiURL4)
                      .then((res) => {
                        this.days = res.data;
                      })
                      .catch((error) => {
                        console.log(error);
                      })
                      .then(() => {
                        let apiURL5 =
                          "http://172.26.54.21:8082/api/classstatus/";
                        axios
                          .get(apiURL5)
                          .then((res) => {
                            this.classstatuses = res.data;
                          })
                          .catch((error) => {
                            console.log(error);
                          })
                          .then(() => {
                            let apiURL7 = `http://172.26.54.21:8082/api/reports/class_view/${this.ClassID}`;
                            axios
                              .get(apiURL7)
                              .then((res) => {
                                this.Class = res.data[0];
                                this.Faculty_Class.FacultyID =res.data[0].FacultyID;
                              })
                              .catch((error) => {
                                console.log(error);
                              })
                              .then(() => {
                                let apiURL9 = `http://172.26.54.21:8082/api/faculty_class`;
                                axios
                                  .get(apiURL9)
                                  .then((res) => {
                                    let fclass = res.data;
    
                                    let faculty_class_id=fclass.filter((x)=>
                                        x.ClassID==this.ClassID && x.FacultyID==this.Faculty_Class.FacultyID )
                                    this.faculty_class_id=faculty_class_id[0]._id
                                  })
                                  .catch((error) => {
                                    console.log(error);
                                  })

                                  .then(() => {
                                    let apiURL8 = `http://172.26.54.21:8082/api/class/${this.ClassID}`;
                                    axios
                                      .get(apiURL8)
                                      .then((res) => {})
                                      .catch((error) => {
                                        console.log(error);
                                      });
                                  })
                                  .catch((error) => {
                                    console.log(error);
                                  });
                              });
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
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
  