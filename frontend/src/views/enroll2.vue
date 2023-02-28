<template>
  <h1 class="mt-5 mb-5">Enroll</h1>

  <form @submit.prevent="submitForm" class="wrapper2">
    <fieldset class="form-control p-4">
      <label for="" class="form-label">Student</label>
      <select
        name=""
        id=""
        class="form-select mb-4"
        v-model="student.StudentID"
        disabled
      >
        <option
          v-for="(student, index) in students"
          :key="index"
          :value="student.StudentID"
        >
          {{ student.FirstName }} {{ student.MiddleName }}
          {{ student.LastName }}
        </option>
      </select>
      <label for="" class="form-label">Class</label>
      <select name="" id="" v-model="Class.ClassID" class="form-select mb-3">
        <option value="" selected disabled>Select an Option</option>
        <option
          v-for="(Class, index) in classes"
          :key="index"
          :value="Class.ClassID"
        >
          {{ Class.CourseName }}&nbsp;|&nbsp; {{ Class.WeekDay }}&nbsp;|&nbsp;
          {{ Class.StartTime }}-{{ Class.EndTime }}
        </option>
      </select>
      <label for="" class="form-label">Status</label>
      <select name="" id="" class="form-select" v-model="student_class.StudentClassStatusID">
        <option value="" selected disabled>Select an Option</option>
        <option
          :value="status.StudentClassStatusID"
          v-for="status in statuses"
          :key="status.StudentClassStatusID"
        >
          {{ status.Status }}
        </option>
      </select>
    </fieldset>
    <button class="btn mt-3">Enroll Student</button>
  </form>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      student: {
        StudentID: this.$route.params.StudentID,
        FirstName: "",
        MiddleName: "",
        LastName: "",
      },

      Class: {
        ClassID: "",
        CourseName: "",
        Status: "",
        WeekDay: "",
        StartTime: "",
        EndTime: "",
      },
      student_class: {
        ClassID: "",
        StudentID: "",
        StudentClassStatusID: "",
      },

      students: [],
      statuses: [],
      classes: [],
      studentsID: "",
      classID: "",
    };
  },
  async created() {
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/student/";
    await axios
      .get(apiURL)
      .then((res) => {
        this.students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // get avilable classes info
    let apiURL1 = this.APIBASEURL + ":" + this.APIPORT +"/api/reports/class_detail_list1";
    await axios
      .get(apiURL1)
      .then((res) => {
        this.classes = res.data.filter(
          (x) => x.Status.includes("Open") || x.Status.includes("Waitlist")
        );
        console.log(this.classes);
      })
      .catch((error) => {
        console.log(error);
      });
    let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +"/api/student_classstatus";
    await axios.get(apiURL2).then((res) => {
      this.statuses = res.data;
    });
  },

  methods: {
    async submitForm() {
      let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/student_class/`;
      this.student_class.ClassID = this.Class.ClassID;
      this.student_class.StudentID = this.student.StudentID;
      await axios
        .post(apiURL2, this.student_class)

        .catch((error) => {
          console.log(error);
        });
      // await this.$router.push(`/students/${this.student.StudentID}`);
    },
  },
};
</script>