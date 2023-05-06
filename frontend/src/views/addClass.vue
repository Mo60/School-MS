<template>
  <h1 class="mt-5">Add Class</h1>
  <div class="wrapper3">
    <form @submit.prevent="handleSubmitForm" class="mb-5">
      <fieldset class="form-control">
        <div class="row mb-4">
        

          <div class="col">
            <label for="" class="form-label">* Course</label>
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
          <div class="col">
            <label for="" class="form-label">* Semester</label>
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
        </div>
        <div class="row mb-4">
          <!-- Semester -->
     
          <!-- TimeBlock -->
          <div class="col">
            <label for="" class="form-label">* Time Block</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="Class.TimeBlockID"
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
          <div class="col">
            <label for="" class="form-label">* Day</label>
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
        </div>
        <!-- Day -->
        <div class="row mb-4">
         
          <!-- ClassStatus -->
          <div class="col">
            <label for="" class="form-label">* Class Status</label>
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
         
            />
          </div>
        </div>
      </fieldset>
      <button class="btn mt-3">Submit</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required} from '@vuelidate/validators'
import axios from "axios";
export default {
  api_host: "172.26.54.21",
  api_port: "8082",
  data() {
    return {
      v$:useVuelidate(),
      Class: {
        CourseID: "",
        SemesterID: "",
        TimeBlockID: "",
        DayID: "",
        ClassStatusID: "",
        Capacity: "",
        MaxCapacity: "",
        Lesson: "",
        Notes: "",
      },

      Faculty_Class: {
        ClassID: "",
        FacultyID: "",
      },
      courses: [],
      semeseters: [],
      timeBlocks: [],
      days: [],
      classstatuses: [],
      TeacherList:[],
      ClassID:this.$route.params.ClassID
    };
  },

  methods: {
    validations(){
      return{
        Class: {
        CourseID: {required},
        SemesterID: {required},
        TimeBlockID: {required},
        DayID: {required},
        ClassStatusID: {required},
        Lesson: {required},
      }
      }
    },
async handleSubmitForm() {

  this.v$.$validate()
    if(!this.v$.$error){
alert('Class is successfully added')
    }
    else{
      alert('Form failed validation')
    }
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/class/";

    await  axios
        .post(apiURL, this.Class)
        .then((res) => {
          //changing the view to the list
          this.$router.push("/classes");
          this.Class = {
            ClassID: "",
            CourseID: "",
            SemesterID: "",
            TimeBlockID: "",
            DayID: "",
            ClassStatusID: "",
            Capacity: "",
            ////
            MaxCapacity: "",
            Lesson: "",
            Notes: "",
          };

        })
        .catch((error) => {
          console.log(error);
        }).catch((error) => {
          console.log(error)})
       
        }
    
  },
  async created() {
    // get options from the api
   
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/faculty/';
   await axios.get(apiURL).then(res => {
        this.TeacherList = res.data;

    }).catch(error => {
        console.log(error)
    });
    //
    //// get Courses
    // courses = getOptions("172.26.54.21","8082","reports/course_view")
    let apiURL1 = this.APIBASEURL + ":" + this.APIPORT +"/api/course/";
    await axios
      .get(apiURL1)
      .then((res) => {
        this.courses = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // //// get semesters
    let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +"/api/semester/";
    await axios
      .get(apiURL2)
      .then((res) => {
        this.semeseters = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // //// get timeBlocks:[],
    let apiURL3 = this.APIBASEURL + ":" + this.APIPORT +"/api/timeblock/";
    await axios
      .get(apiURL3)
      .then((res) => {
        this.timeBlocks = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // //// get days:[],
    let apiURL4 = this.APIBASEURL + ":" + this.APIPORT +"/api/day/";
    await axios
      .get(apiURL4)
      .then((res) => {
        this.days = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    ///// get classstatuses:[],
    let apiURL5 = this.APIBASEURL + ":" + this.APIPORT +"/api/classstatus/";
    await axios
      .get(apiURL5)
      .then((res) => {
        this.classstatuses = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

   
  },
};
</script>
