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
                required
              />
            </div>
            <div class="col">
            <label for="fName" class="form-label">Middle Name</label>
            <input
              type="text"
              class="form-control"
              v-model="student.MiddleName"
            />
          </div>
            <div class="col">
              <label for="lName" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="student.LastName"
                required
              />
            </div>
            <div class="col">
              <label for="lName" class="form-label">Date of Birth</label>
              <input type="date" class="form-control" v-model="student.DOB" required/>
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
          <div class="row">
        <div class="col">
            <div class="form-check">
    <input class="form-check-input" type="checkbox" v-model="sameAddress" id="defaultCheck1">
    <label class="form-check-label" for="defaultCheck1">
      Same as parent's 
    </label>
  </div>
  </div>
  </div>
        </fieldset>
        
        <fieldset  class="form-control mt-5">
          <legend>
            Parent/Guardian
            <span>(Enter Guardian ID or Click "Register Parent" to register
              parent)</span>
          </legend>
          <div class="row mt-5 mb-4">
            <div class="col">
              <label for="" class="form-label">Guardian ID</label>
              <select name="" class="form-select" v-model="guardian_student.GuardianID" disabled>
              <option value="" disabled selected>Select an Option</option>
              <option :value="g.GuardianID" class="form-select" v-for="g in guardian" :key="g.GuardianID">{{g.FirstName}} {{g.LastName}} - {{g.GuardianID}}</option>
            </select>
            </div>
            <div class="col">
              <label for="" class="form-label">Relationship to Child</label
              ><select name="" class="form-select"  v-model="guardian_student.RelationshipID" required ><option selected disabled>Select an Option</option><option :value=r.RelationshipID v-for="r in relationships" :key="r.RelationshipID">{{r.Relationship}}</option></select>
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
          <router-link class="btn" :to="{name:'viewParent',params:{GuardianID:guardian_student.GuardianID}}">Cancel</router-link>
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
          MiddleName:"",
          LastName: "",
          DOB: "",
          Email: "",
          AddressLine1: "",
          AddressLine2:"",
          City: "",
          Zip: "",
        },
     
        guardian_student:{
        CanPickup: false,
        StudentID: "",
        GuardianID:this.$route.params.GuardianID,
        RelationshipID:""
        },
        relationships:[],
        guardian:[],
        guardian2:[],
        studentID: "",
        sameAddress:false
      }
  
    },
    created() {
      let apiURL="http://172.26.54.21:8082/api/guardianRelationship/"
        axios.get(apiURL).then(res => {
                  this.relationships = res.data;        
                    
    let apiURL2=`http://172.26.54.21:8082/api/guardian/`
        axios.get(apiURL2).then(res2 => {
                  this.guardian = res2.data;    
              }).then((res)=>{
                let apiURL3 = `http://172.26.54.21:8082/api/guardian/${this.guardian_student.GuardianID}`

                axios.get(apiURL3).then(res=>{
                    this.guardian2=res.data
                })
              
              }).
              catch(error => {
                  console.log(error)
              });             
            })
           
        },
    watch:{
    sameAddress(value){
      if(value==true){
this.student.AddressLine1=this.guardian2.AddressLine1
this.student.AddressLine2=this.guardian2.AddressLine2
this.student.City=this.guardian2.City
this.student.Zip=this.guardian2.Zip
      }
      else{
        this.student.AddressLine1=""
this.student.AddressLine2=""
this.student.City=""
this.student.Zip=""
      }
    
    }},
    methods: {
      submitForm() {
        let apiURL = `http://172.26.54.21:8082/api/student/`;
  
        axios.post(apiURL, this.student).then((res) => {
         // if guardian selected post information in the guardian_STUDENT TABLE 
          if (this.guardian_student.GuardianID != "") {
            this.guardian_student.StudentID = res.data.StudentID ;
          let apiURL2 = `http://172.26.54.21:8082/api/guardian_student/`;
          axios
            .post(apiURL2, this.guardian_student)
  
            .catch((error) => {
              console.log(error);
            });
        }
        this.$router.push(`/parents/${this.guardian_student.GuardianID}`);
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