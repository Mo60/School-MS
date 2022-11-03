<template>
  <h1 class="mt-5">Enter Parent or Guardian Information</h1>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset class="form-control">
        <legend>Contact Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="guardian.FirstName" />
          </div>
          <div class="col">
            <label for="" class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="guardian.LastName" />
          </div>
          <div class="col">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="guardian.Email" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">Cell Number</label>
            <input type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="guardian.CellNumber" />
          </div>
          <div class="col">
            <label for="" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="guardian.PhoneNumber" />
          </div>
        </div>
      </fieldset>
      <fieldset class="form-control mt-5">
        <legend>Address</legend>
        <div class="row mb-4">
          <div class="col">
            <label class="form-label">Street</label>
            <input type="text" class="form-control" v-model="guardian.Street" />
          </div>
          <div class="col">
            <label for="" class="form-label">City</label><input type="text" class="form-control" v-model="guardian.City" />
          </div>
          <div class="col">
            <label for="" class="form-label">Zip</label><input type="number" class="form-control" v-model="guardian.Zip" />
          </div>
        </div>
      </fieldset>

      <fieldset class="form-control mt-5">
        <legend>Authorizations</legend>
        <div class="row mb-4">  
          <div class="col"><label for="" class="form-label">Relationship to Child</label><select name="" id="" class="form-select"><option disabled selected value="">Select an Option</option><option value="{{r.RelationshipID}}" v-for="r in relationships" :key="r.RelationshipID">{{r.status}}</option></select></div>
        <div class="col"><label class="form-label">Authorized to Pick Up?</label><select class="form-select" v-model="guardian_student.CanPickup"><option disabled selected value="">Select an Option</option>
        <option value="true">Yes</option>
        <option value="false">No</option></select></div>
      <div class="col"><label class="form-label">Emergency Contact</label>
        <select class="form-select" v-model="guardian.IsEmergency">
          <option value="" disabled selected>Select an Option</option>
        <option value="true">Yes</option>
        <option value="false">No</option></select></div>
      </div>
      </fieldset>
      <fieldset class="form-control mt-5">
        <legend>Additional Information</legend>
        
        <div class="row mb-4">
          <div class="col">
            <label class="form-label">Notes</label ><textarea name="" class="form-control" v-model="guardian.Notes"></textarea>
          </div>
        </div>
      </fieldset>

      <button class="btn mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { boolean } from "webidl-conversions";

export default {
  data() {
    return {
      guardian: {
        GuardianID:undefined,
        FirstName: "",
        LastName: "",
        CellNumber:"",
        PhoneNumber: "",
        Email: "",
        Street: "",
        City: "",
        Zip: "",
        Notes: "",
        IsEmergency:boolean
      },
      guardian_student:{
      CanPickup:boolean,
      studentStudentID:this.$route.params.studentID,
      guardianGuardianID:"",
      guardianRelationship:""
      },
      relationships:[],
      
    }
  
  },
  methods: {
    submitForm() {
      let apiURL = "http://172.26.54.21:8082/api/guardian/"

      axios.post(apiURL, this.guardian).then((res) => {
       this.guardian_student.guardianGuardianID = res.data.GuardianID
      // guardian.guardian_student.guardianGuardianID = 5;//res.data.GuardianID
       console.log(this.guardian_student.guardianGuardianID);
       console.log(res);
        let apiURL2="http://172.26.54.21:8082/api/guardian_student/"
        axios.post(apiURL2,this.guardian_student)
        this.$router.push(`/parents`)
       console.log("success")
    
      }).catch(error => {
        console.log(error)
       
      });

     }
    }
           
 
     ,
    created(){
  
      let apiURL="http://172.26.54.21:8082/api/guardianRelationship/"
      axios.get(apiURL).then(res => {
                this.relationships = res.data;
                
            }).catch(error => {
                console.log(error)
            });
            
        },
    }
  

</script>