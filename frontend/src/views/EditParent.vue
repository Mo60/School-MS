<template>
  <h1 class="mt-5">Edit Parent or Guardian Information</h1>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset class="form-control">
        <legend>Contact Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.FirstName"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="guardian.LastName"
            />
          </div>
          <div class="col">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="guardian.Email" />
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
        Zip: "",
        Notes: "",
        IsEmergency: boolean,
      },
      GuardianID: this.$route.params.GuardianID,
    };
  },
  created() {
    let apiURL = `http://172.26.54.21:8082/api/guardian/${this.GuardianID}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.guardian = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    submitForm() {
        let apiURL=`http://172.26.54.21:8082/api/guardian/${this.GuardianID}`;
       
        axios
            .put(apiURL, this.guardian)
            .then((res) => {
              console.log(res);
              this.$router.push("/parents")
            })
            .catch((error) => {
              console.log(error);
            });


    },
  },
};
</script>
