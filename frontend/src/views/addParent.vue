<template>
  <h1 class="mt-5">Enter Parent Information</h1>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset class="form-control">
        <legend>Parent Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="parent.FirstName" />
          </div>
          <div class="col">
            <label for="" class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="parent.LastName" />
          </div>
          <div class="col">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="parent.Email" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">Phone Type</label>
            <select name="" id="" class="form-select" v-model="parent.PhoneType">
              <option value="" disabled selected>Select An Option</option>
              <option value="Mobile">Mobile</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <div class="col">
            <label for="" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="parent.PhoneNumber" />
          </div>
        </div>
      </fieldset>
      <fieldset class="form-control mt-5">
        <legend>Address</legend>
        <div class="row mb-4">
          <div class="col">
            <label class="form-label">Street</label>
            <input type="text" class="form-control" v-model="parent.Street" />
          </div>
          <div class="col">
            <label for="" class="form-label">City</label><input type="text" class="form-control" v-model="parent.City" />
          </div>
          <div class="col">
            <label for="" class="form-label">Zip</label><input type="number" class="form-control" v-model="parent.Zip" />
          </div>
        </div>
      </fieldset>

      <fieldset class="form-control mt-5">
        <legend>Additional Information</legend>
        <div class="row mb-4">
          <div class="col-md-4">
            <label for="" class="form-label">Reference</label>
            <input type="text" class="form-control" v-model="parent.Reference" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            Notes<textarea name="" class="form-control" v-model="parent.Notes"></textarea>
          </div>
        </div>
      </fieldset>

      <button class="btn mt-4">Next</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { boolean } from "webidl-conversions";

export default {
  data() {
    return {
      parent: {
        ParentsID:undefined,
        FirstName: "",
        LastName: "",
        PhoneType: "",
        PhoneNumber: "",
        Email: "",
        Street: "",
        City: "",
        Zip: "",
        Reference: "",
        Notes: ""
      },
      allParents:[],
  success:boolean
    }
  },
  methods: {
    submitForm() {
      let apiURL = "http://172.26.54.21:8082/api/parent/"

      axios.post(apiURL, this.parent).then(() => {
        this.parent = {
          ParentsID:undefined,
          FirstName: "",
          LastName: "",
          PhoneType: "",
          PhoneNumber: "",
          Email: "",
          Street: "",
          City: "",
          Zip: "",
          Reference: "",
          Notes: ""
        }
       
       console.log("success")
     this.success=true
      }).catch(error => {
        console.log(error)
        this.success=false
      });

      if(this.success){
      this.$router.push({
        name: "addstudent",
        params: { phone: this.parent.PhoneNumber }
      })
    }
           
   
    }
  }
}
</script>