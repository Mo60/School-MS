<template>
  <h1 class="mt-4 mb-5">Enroll</h1>

  <form @submit.prevent="submitForm" class="wrapper2">
    <fieldset class="form-control">
      <label for="" class="form-label">Student</label>
      <select name="" id="" class="form-control mb-4" v-model="studentsID">
        <option  v-for="(student,index) in students" :key="index" :value="student.studentID">{{student.studentName}}</option>
      </select>
      <label for="" class="form-label">Class</label>
      <select name="" id="" v-model="className" class="form-control">
        <option  v-for="(Class,index) in classes" :key="index" :value="Class.classID">{{Class.className}}</option>
    </select>
      <button class="btn mt-3">Enroll Student</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          studentID: "1",
          studentName: "Alexis Enriquez",
        },
        { studentID: "2", studentName: "Lauren Potter" },
      ],
      
    classes:[{classID:"1", className:"Drawing 101"},{ classID:"2",className:"Painting 101"}],
      studentsID: "",
     classID:"",
    };

  },

  methods: {
    submitForm() {
     
    },
  },
};
</script>