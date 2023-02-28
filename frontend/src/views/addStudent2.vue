<template>
  <h1 class="mt-5">Enter Student Information</h1>

  <div class="wrapper">
    <form @submit.prevent="">
      <fieldset class="form-control">
        <legend>Personal Information</legend>
        <div class="row mb-4">
          <div class="col">
            <label for="fName" class="form-label">* First Name</label>
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
            <label for="lName" class="form-label">* Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model="student.LastName"
              required
            />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-4">
            <label for="lName" class="form-label">* Date of Birth</label>
            <input type="date" class="form-control" v-model="student.DOB" />
          </div>
          <div class="col-md-4">
            <label for="lName" class="form-label">Status</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="student.StatusID"
            >
              <option selected disabled value="">Select an Option</option>
              <option
                :value="status.StatusID"
                v-for="status in statuses"
                :key="status.StatusID"
              >
                {{ status.Status }}
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
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="" class="form-label">State</label
            ><select name="" v-model="student.State" class="form-select">
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
          <div class="col-sm-2">
            <label for="" class="form-label">Zip</label
            ><input type="number" class="form-control" v-model="student.Zip" />
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
                Same as parent's
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <!-- this button show or hide guardian feild -->
  
      <!-- v-show show the element if true -->
      <fieldset  class="form-control mt-4">
        <legend>
          Parent/Guardian
          <span
            >(Enter Guardian ID or Click "Register Parent" to register
            parent)</span
          >
        </legend>
        <div class="row mt-5 mb-4">
          <div class="col">
            <label for="" class="form-label">Guardian ID</label>
            <select
              name=""
              class="form-select"
              v-model="guardian_student.GuardianID"
            >
              <option value="" disabled selected>Select an Option</option>
              <option
                :value="g.GuardianID"
                class="form-select"
                v-for="g in guardian"
                :key="g.GuardianID"
              >
                {{ g.FirstName }} {{ g.LastName }} - {{ g.GuardianID }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="" class="form-label">Relationship to Child</label
            ><select
              name=""
              class="form-select"
              v-model="guardian_student.RelationshipID"
            >
              <option selected disabled value="null">Select an Option</option>
              <option
                :value="r.RelationshipID"
                v-for="r in relationships"
                :key="r.RelationshipID"
              >
                {{ r.Relationship }}
              </option>
            </select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Emergency Contact</label
            ><select class="form-select" v-model="guardian_student.isEmergency">
              <option selected disabled value="">Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Can Pick Up</label
            ><select class="form-select" v-model="guardian_student.CanPickup">
              <option selected disabled value="">Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="value2"
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Add Another
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-4" v-show="value2">
          <div class="col">
            <label for="" class="form-label">Guardian ID</label>
            <select
              name=""
              class="form-select"
              v-model="guardian_student2.GuardianID"
            >
              <option value="" disabled selected>Select an Option</option>
              <option
                :value="g.GuardianID"
                class="form-select"
                v-for="g in guardian"
                :key="g.GuardianID"
              >
                {{ g.FirstName }} {{ g.LastName }} - {{ g.GuardianID }}
              </option>
            </select>
          </div>
          <div class="col">
            <label for="" class="form-label">Relationship to Child</label
            ><select
              name=""
              class="form-select"
              v-model="guardian_student2.RelationshipID"
            >
              <option selected disabled value="null">Select an Option</option>
              <option
                :value="r.RelationshipID"
                v-for="r in relationships"
                :key="r.RelationshipID"
              >
                {{ r.Relationship }}
              </option>
            </select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Emergency Contact</label
            ><select
              class="form-select"
              v-model="guardian_student2.isEmergency"
            >
              <option selected disabled value="">Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Can Pick Up</label
            ><select class="form-select" v-model="guardian_student2.CanPickup">
              <option selected disabled value="">Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </fieldset>
      <div class="d-flex">
        <button class="btn mt-4" @click="submitForm">Submit</button>
  
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
        MiddleName: "",
        LastName: "",
        DOB: "",
        Email: "",
        AddressLine1: "",
        AddressLine2: "",
        City: "",
        State: "",
        Zip: "",
        StatusID: "",
      },
      // value is for v-show for the guardian feild
      value: false,
      value2: false,
      guardian_student: {
        CanPickup: "",
        StudentID: "",
        GuardianID: this.$route.params.GuardianID,
        RelationshipID: null,
        isEmergency: "",
      },
      guardian_student2: {
        CanPickup: "",
        StudentID: "",
        GuardianID: "",
        RelationshipID: null,
        isEmergency: "",
      },
      relationships: [],
      statuses: [],
      guardian: "",
      guardian2: [],
      studentID: "",
      states: [],
      sameAddress: false,
    };
  },
  created() {
    let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/guardianRelationship/";
    axios.get(apiURL).then((res) => {
      this.relationships = res.data;

      let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +"/api/guardian/";
      axios
        .get(apiURL2)
        .then((res2) => {
          this.guardian = res2.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          let apiURL3 = this.APIBASEURL + ":" + this.APIPORT +"/api/studentStatus";
          axios
            .get(apiURL3)
            .then((res3) => {
              this.statuses = res3.data;
            })
            .catch((error) => {
              console.log(error);
            })
            .then(() => {
              let APIURL5 =
                "https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=year&facet=year&facet=ste_code&facet=ste_name&facet=ste_type&refine.ste_type=state";
              axios
                .get(APIURL5)
                .then((res5) => {
                  this.states = res5.data.facet_groups[2].facets;
                  console.log(this.states);
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .then((res) => {
              let apiURL6 = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian/${this.guardian_student.GuardianID}`;

              axios
                .get(apiURL6)
                .then((res) => {
                  this.guardian2 = res.data;
                })
                .catch((error) => {
                  console.log(error);
                })
                .catch((error) => {
                  console.log(error);
                });
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  watch: {
    sameAddress(value) {
      if (value == true) {
        this.student.AddressLine1 = this.guardian2.AddressLine1;
        this.student.AddressLine2 = this.guardian2.AddressLine2;
        this.student.City = this.guardian2.City;
        this.student.Zip = this.guardian2.Zip;
        this.student.State=this.guardian2.State;
      } else {
        this.student.AddressLine1 = "";
        this.student.AddressLine2 = "";
        this.student.City = "";
        this.student.Zip = "";
      }
    },
  },
  methods: {
    submitForm() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student/`;

      axios
        .post(apiURL, this.student)
        .then((res) => {
          // if guardian selected post information in the guardian_STUDENT TABLE
          if (this.guardian_student.GuardianID != "") {
            this.guardian_student.StudentID = res.data.StudentID;
            let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian_student/`;
            axios
              .post(apiURL2, this.guardian_student)

              .catch((error) => {
                console.log(error);
              })
              .then(() => {
                if (this.value2 && this.guardian_student2 !== "") {
                  let apiURL3 = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian_student/`;
                  this.guardian_student2.StudentID = res.data.StudentID;
                  axios.post(apiURL3, this.guardian_student2).catch((error) => {
                    console.log(error);
                  });
                }
              })
              .catch((error) => {
                console.log(error);
              });

            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student/`;

      axios
        .post(apiURL, this.student)
        .then((res) => {
          const studentID = res.data.StudentID;
          console.log(studentID);
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