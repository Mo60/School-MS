<template>
  <h1 class="mt-5">Enter Parent or Guardian Information</h1>
  <div class="wrapper">
    <form @submit.prevent="">
      <fieldset class="form-control">
        <legend>Contact Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">* First Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.FirstName"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">Middle Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.MiddleName"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">* Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.LastName"
            />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">* Email</label>
            <input
              type="email"
              class="form-control"
              v-model="guardian.Email"
              required
            />
          </div>
          <div class="col">
            <label for="" class="form-label">Cell Number</label>
            <input
              type="tel"
              class="form-control"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="guardian.CellNumber"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="guardian.PhoneNumber"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">Status</label>
            <select
              name=""
              id=""
              v-model="guardian.GuardianStatusID"
              class="form-select"
            >
              <option value="">Select an Option</option>
              <option
                :value="s.StatusID"
                v-for="s in statuses"
                :key="s.StatusID"
              >
                {{ s.Status }}
              </option>
            </select>
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
              v-model="guardian.AddressLine1"
            />
          </div>

          <div class="col">
            <label class="form-label">Address Line 2</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.AddressLine2"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">City</label
            ><input type="text" class="form-control" v-model="guardian.City" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">State</label
            ><select name="" v-model="guardian.State" class="form-select">
              <option value="">Select an Option</option>
              <option
                :value="state.name"
                v-for="(state, index) in states"
                :key="index"
              >
                {{ state.name }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="" class="form-label">Zip</label
            ><input type="number" class="form-control" v-model="guardian.Zip" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="sameAddress"
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Same as child's
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="form-control mt-5">
        <legend>Authorizations</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">Relationship to Child</label
            ><select
              name=""
              id=""
              class="form-select"
              v-model="guardian_student.RelationshipID"
            >
              <option disabled selected value="">Select an Option</option>
              <option
                :value="r.RelationshipID"
                v-for="r in relationships"
                :key="r.RelationshipID"
              >
                {{ r.Relationship }}
              </option>
            </select>
          </div>
          <div class="col">
            <label class="form-label">Authorized to Pick Up?</label
            ><select class="form-select" v-model="guardian_student.CanPickup">
              <option disabled selected value="">Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="col">
            <label class="form-label">Emergency Contact</label>
            <select class="form-select" v-model="guardian.IsEmergency">
              <option value="" disabled selected>Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset class="form-control mt-5">
        <legend>Additional Information</legend>

        <div class="row mb-4">
          <div class="col">
            <label class="form-label">Notes</label
            ><textarea
              name=""
              class="form-control"
              v-model="guardian.Notes"
            ></textarea>
          </div>
        </div>
      </fieldset>

      <button class="btn mt-4" @click="submitForm">Submit</button>
      <button
        class="btn mt-4 mx-3"
        @click="register"
        v-if="guardianStudent != 1"
      >
        Add Another Parent
      </button>
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
        MiddleName:"",
        LastName: "",
        CellNumber:"",
        PhoneNumber: "",
        Email: "",
        AddressLine1: "",
        AddressLine2:"",
        City: "",
        Zip: "",
        State:"",
        Notes: "",
       GuardianStatusID:""
      },
      guardian_student:{
      CanPickup:boolean,
      StudentID:this.$route.params.studentID,
      GuardianID:"",
      guardianRelationship:"",
      IsEmergency:boolean
      },
      relationships:[],
      student:[],
      sameAddress:false,
      states:[],
      statuses:[],
      guardianStudent:""
    }
  }
 
  ,
  methods: {
  
    submitForm() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/guardian/"

      axios.post(apiURL, this.guardian).then((res) => {
       this.guardian_student.GuardianID = res.data.GuardianID
      // guardian.guardian_student.GuardianID = 5;//res.data.GuardianID
       console.log(this.guardian_student.GuardianID);
       console.log(res);
        let apiURL2=this.APIBASEURL + ":" + this.APIPORT +"/api/guardian_student/"
        axios.post(apiURL2,this.guardian_student).catch(error => {
        console.log(error)
      })
        this.$router.push(`/parents/${this.guardian_student.GuardianID}`)
       console.log("success")
      }).catch(error => {
        console.log(error)
      })

     },
     register() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian/`;
      axios.post(apiURL, this.guardian).then((res) => {
       this.guardian_student.GuardianID = res.data.GuardianID
      // guardian.guardian_student.GuardianID = 5;//res.data.GuardianID
       console.log(this.guardian_student.GuardianID);
       console.log(res);
        let apiURL2=this.APIBASEURL + ":" + this.APIPORT +"/api/guardian_student/"
        axios.post(apiURL2,this.guardian_student).then(()=>{
          this.guardian= {
        GuardianID:undefined,
        FirstName: "",
        MiddleName:"",
        LastName: "",
        CellNumber:"",
        PhoneNumber: "",
        Email: "",
        AddressLine1: "",
        AddressLine2:"",
        City: "",
        Zip: "",
        Notes: "",
       
        }
       this. guardian_student={
        IsEmergency:"",
      CanPickup:"",
      GuardianID:"",
      guardianRelationship:""
      }
        })  
      }).catch(error => {
        console.log(error)
       
      }).then((res) => {
          this.$router.push(`/addParent/${this.guardian_student.StudentID}`);

        })
        .catch((error) => {
          console.log(error);
        });
    },
    },
    watch:{
      sameAddress(value){
      if(value==true){
this.guardian.AddressLine1=this.student.AddressLine1
this.guardian.AddressLine2=this.student.AddressLine2
this.guardian.City=this.student.City
this.guardian.State=this.student.State
this.guardian.Zip=this.student.Zip
      }
      else{
        this.guardian.AddressLine1=""
this.guardian.AddressLine2=""
this.guardian.City=""
this.guardian.Zip=""
      }
      }
    },
    created(){
  
      let apiURL=this.APIBASEURL + ":" + this.APIPORT +"/api/guardianRelationship/"
      axios.get(apiURL).then(res => {
                this.relationships = res.data;
                
            }).then(res=>{
                let apiURL2=this.APIBASEURL + ":" + this.APIPORT +`/api/student/${this.guardian_student.StudentID}`
                axios.get(apiURL2).then(res=>{
                  this.student=res.data
                }).then(()=>{
        let apiURL=this.APIBASEURL + ":" + this.APIPORT +"/api/guardianstatus/"
axios.get(apiURL).then((res)=>{
  this.statuses=res.data;
      }).catch((error) => {
        console.log(error);
      })
            })
            .catch(error => {
                console.log(error)
            }).then(res=>{
              
              let apiURL3=this.APIBASEURL + ":" + this.APIPORT +`/api/reports/guardian_student_view/studentid/${this.guardian_student.StudentID}`
              axios.get(apiURL3).then(res=>{
                  this.guardianStudent=res.data.length
                  console.log(this.guardianStudent)
                })
                .catch(error => {
                console.log(error)
            }).then(()=>{
            let APIURL4="https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=year&facet=year&facet=ste_code&facet=ste_name&facet=ste_type&refine.ste_type=state"
            axios.get(APIURL4).then((res5)=>{
              this.states=res5.data.facet_groups[2].facets
              console.log(this.states)
            }).catch((error) => {
        console.log(error);
      });
            })
            .catch(error => {
                console.log(error)
            })      
            
        })
  })
}
}

  

</script>