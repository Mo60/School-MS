<template>
  <h1 class="mt-5">Enter Student Information</h1>

  <div class="wrapper">
    <form @submit.prevent="">
      <fieldset class="form-control">
        <legend>Personal Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="fName" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              v-model="student.FirstName"
            />
          </div>
          <div class="col">
            <label for="lName" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="student.LastName"
            />
          </div>
          <div class="col">
            <label for="lName" class="form-label">Date of Birth</label>
            <input type="date" class="form-control" v-model="student.DOB" />
          </div>
        </div>
      </fieldset>

      <fieldset class="form-control mt-5">
        <legend>Address</legend>
        <div class="row mb-4">
          <div class="col">
            <label class="form-label">Address Line 1</label>
            <input
              type="text"
              class="form-control"
              v-model="student.AddressLine1"
            />
          </div>
          <div class="col">
            <label class="form-label">Address Line 2</label>
            <input
              type="text"
              class="form-control"
              v-model="student.AddressLine2"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">City</label
            ><input type="text" class="form-control" v-model="student.City" />
          </div>
          <div class="col-sm-2">
            <label for="" class="form-label">Zip</label
            ><input type="number" class="form-control" v-model="student.Zip" />
          </div>
        </div>
       
      </fieldset>
       <!-- this button show or hide guardian feild -->
       <button class="btn mt-4" @click="value = !value">{{value ? 'Hide guardian field' : 'Show guardian field'}}</button>
      <!-- v-show show the element if true -->
      <fieldset v-show= value  class="form-control mt-4">
        <legend>
          Parent/Guardian
          <span>(Enter Guardian ID or Click "Register Parent" to register
            parent)</span>
        </legend>
        <div class="row mt-5 mb-4">
          <div class="col">
            <label for="" class="form-label">Guardian ID</label>
            <select name="" class="form-select" v-model="guardian_student.guardianGuardianID">
              <option value="" disabled selected>Select an Option</option>
              <option :value="g.GuardianID" class="form-select" v-for="g in guardian" :key="g.GuardianID">{{g.FirstName}} {{g.LastName}} - {{g.GuardianID}}</option>
            </select>
          </div>
          <div class="col">
            <label for="" class="form-label">Relationship to Child</label
            ><select name="" class="form-select" v-model="guardian_student.guardianRelationship" ><option selected disabled>Select an Option</option><option :value=r.RelationshipID v-for="r in relationships" :key="r.RelationshipID">{{r.status}}</option></select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Emergency Contact</label
            ><select class="form-select">
              <option selected disabled>Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Can Pick Up</label
            ><select class="form-select">
              <option selected disabled>Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </fieldset>
      <div class="d-flex">
        <button class="btn mt-4" @click="submitForm">Submit</button>
        <button class="btn mt-4 mx-3" @click="register">
          Submit and Register Parent
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { boolean } from "webidl-conversions";

export default {
  data() {
    return {
      student: {
        FirstName: "",
        LastName: "",
        DOB: "",
        Email: "",
        AddressLine1: "",
        AddressLine2:"",
        City: "",
        Zip: "",
      },
      // value is for v-show for the guardian feild
      value : false,
      guardian_student:{
      CanPickup:boolean,
      studentStudentID:this.$route.params.studentID,
      guardianGuardianID:"",
      guardianRelationship:""
      },
      relationships:[],
      guardian:"",
      studentID: "",
    }


  },
  created() {
    let apiURL="http://172.26.54.21:8082/api/guardianRelationship/"
      axios.get(apiURL).then(res => {
                this.relationships = res.data;        
                  
  let apiURL2="http://172.26.54.21:8082/api/guardian/"
      axios.get(apiURL2).then(res2 => {
                this.guardian = res2.data;             
            }).catch(error => {
                console.log(error)
            });        
            }).catch(error => {
                console.log(error)
            });       
    
  },
  methods: {
    submitForm() {
      let apiURL = `http://172.26.54.21:8082/api/student/`;

      axios.post(apiURL, this.student).catch((error) => {
        console.log(error);
      });

      if (this.guardian_student.guardianGuardianID != "") {
        let apiURL2 = `http://172.26.54.21:8082/api/guardian_student/`;
        axios
          .post(apiURL2, this.guardian_student)
          .then(() => {
            this.studentID = res.data.StudentID;
            console.log(this.studentID)
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.$router.push("/");
    },
    register() {
      let apiURL = `http://172.26.54.21:8082/api/student/`;

      axios
        .post(apiURL, this.student)
        .then((res) => {
          const studentID = res.data.StudentID;
          console.log(studentID)
          this.$router.push(`/addParent/${res.data.StudentID}`);
        })
        .catch((error) => {
          console.log(error);
        });
     
    },
  },
};
</script>

<style scoped>
span {
  font-size: 14px;
}
</style>