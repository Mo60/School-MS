<template>
  <h1 class="mt-5">Edit Parent or Guardian Information</h1>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset class="form-control">
        <legend>Contact Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">* First Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.FirstName"
              required
            />
          </div>
          <div class="col">
            <label for="" class="form-label">* Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.LastName"
              required
            />
          </div>
          <div class="col">
            <label for="" class="form-label">* Email</label>
            <input type="email" class="form-control" v-model="guardian.Email" required/>
          </div>
        </div>
        <div class="row mb-4">
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
            <select name="" id="" v-model="guardian.GuardianStatusID" class="form-select">
            <option value="">Select an Option</option>
              <option :value="s.GuardianStatusID" v-for="s in statuses" :key=s.GuardianStatusID>{{s.Status}}</option>
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
          <div class="row"> <div class="col">
            <label for="" class="form-label">State</label
            ><select name="" v-model="guardian.State" class="form-select">
            <option value="">Select an Option</option>
            <option :value="state.name" v-for="(state,index) in states" :key="index">{{state.name}}</option>
            </select>
          </div>
          <div class="col">
            <label for="" class="form-label">Zip</label
            ><input type="number" class="form-control" v-model="guardian.Zip" />
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
        FirstName: "",
        LastName: "",
        CellNumber: "",
        PhoneNumber: "",
        Email: "",
        AddressLine1: "",
        AddressLine2: "",
        City: "",
        State:"",
        Zip: "",
        Notes: "",
        IsEmergency: boolean,
        GuardianStatusID:""
      },
      GuardianID: this.$route.params.GuardianID,
      states:[],
      statuses:[]
    };
  },
  created() {
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian/${this.GuardianID}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.guardian = res.data;
      })
      .catch((error) => {
        console.log(error);
      }).then(()=>{
            let APIURL4="https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=year&facet=year&facet=ste_code&facet=ste_name&facet=ste_type&refine.ste_type=state"
            axios.get(APIURL4).then((res5)=>{
              this.states=res5.data.facet_groups[2].facets
              console.log(this.states)
            }).catch((error) => {
        console.log(error);
      }) .then(()=>{
        let apiURL=this.APIBASEURL + ":" + this.APIPORT +"/api/guardianstatus/"
axios.get(apiURL).then((res)=>{
  this.statuses=res.data;
  console.log(this.statuses)
      }).catch((error) => {
        console.log(error);
      })
       
    })
  })
  },
  methods: {
    submitForm() {
        let apiURL=this.APIBASEURL + ":" + this.APIPORT +`/api/guardian/${this.GuardianID}`;
       
        axios
            .put(apiURL, this.guardian)
            .then((res) => {
              console.log(res);
              this.$router.push(`/parents/${this.GuardianID}`)
            })
            .catch((error) => {
              console.log(error);
            });


    },
  },
};
</script>
