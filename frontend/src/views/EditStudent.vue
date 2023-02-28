<template>
  <h1 class="mt-5">Edit Student Information</h1>

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
            <input
              type="date"
              class="form-control"
              v-model="student.DOB"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="lName" class="form-label">Status</label>
            <select
              name=""
              id=""
              class="form-select"
              v-model="student.StudentStatusID"
            >
              <option selected disabled value="">Select an Option</option>
              <option
                :value="status.StudentStatusID"
                v-for="status in statuses"
                :key="status.StudentStatusID"
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
            <label class="form-label">City</label>
            <input type="text" class="form-control" v-model="student.City" />
          </div>
        </div>
        <div class="row mb-3">
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
          <div class="col">
            <label for="" class="form-label">Zip</label
            ><input type="number" class="form-control" v-model="student.Zip" />
          </div>
        </div>
      </fieldset>
      <!-- this button show or hide guardian feild -->
      <button class="btn mt-4" @click="value = !value">
        {{ value ? "Hide guardian field" : "Show guardian field" }}
      </button>
      <!-- v-show show the element if true -->
      <fieldset v-show="value" class="form-control mt-4">
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
              <option selected disabled>Select an Option</option>
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
            ><select class="form-select" v-model="guardian_student.IsEmergency">
              <option selected disabled>Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div class="col-sm">
            <label for="" class="form-label">Can Pick Up</label
            ><select class="form-select" v-model="guardian_student.CanPickup">
              <option selected disabled>Select an Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div class="row mt-5 mb-4">
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
              v-model="guardian_student2.IsEmergency"
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
        <button
          class="btn mt-4 mx-3"
          @click="register"
          v-if="guardianStudent != 2"
        >
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
        MiddleName: "",
        LastName: "",
        DOB: "",
        Email: "",
        AddressLine1: "",
        AddressLine2: "",
        City: "",
        State: "",
        Zip: "",
        StudentStatusID: null,
      },
      // value is for v-show for the guardian feild
      value: false,
      guardian_student: {
        _id: "",
        CanPickup: false,
        StudentID: "",
        GuardianID: "",
        RelationshipID: null,
        IsEmergency: false,
      },
      guardian_student2: {
        _id: "",
        CanPickup: false,
        StudentID: "",
        GuardianID: "",
        RelationshipID: "",
        IsEmergency: false,
      },
      relationships: [],
      statuses: [],
      guardian: [],
      StudentID: this.$route.params.StudentID,
      guardianStudent: [],
      guardians: [],
      guardianStudentID1: "",
      guardianStudentID2: "",
      states: [],
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
            });
        })
        .then(() => {
          let apiURL4 = this.APIBASEURL + ":" + this.APIPORT +`/api/student/${this.StudentID}`;
          axios.get(apiURL4).then((res4) => {
            this.student = res4.data;
            this.guardians = res4.data.guardians;
            this.guardian_student = {
              _id: res4.data.guardians[0].guardian_student._id,
              GuardianID: res4.data.guardians[0].guardian_student.GuardianID,
              IsEmergency: res4.data.guardians[0].guardian_student.IsEmergency,
              RelationshipID:
                res4.data.guardians[0].guardian_student.RelationshipID,
              CanPickup: res4.data.guardians[0].guardian_student.CanPickup,
            };

            this.guardian_student2 = {
              _id: res4.data.guardians[1].guardian_student._id,
              GuardianID: res4.data.guardians[1].guardian_student.GuardianID,
              IsEmergency: res4.data.guardians[1].guardian_student.IsEmergency,
              RelationshipID:
                res4.data.guardians[1].guardian_student.RelationshipID,
              CanPickup: res4.data.guardians[1].guardian_student.CanPickup,
            };
            this.guardianStudentID1 =
              res4.data.guardians[0].guardian_student._id;
            this.guardianStudentID2 =
              res4.data.guardians[1].guardian_student._id;

            this.guardianStudent = res4.data.guardians.length;
            console.log(this.guardianStudent);
          });
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
            })
            .then((res) => {})
            .catch((error) => {
              console.log(error);
            });
        });
    });
  },

  methods: {
    submitForm() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student/${this.StudentID}`;
      axios.put(apiURL, this.student).then(() => {
        let apiURL2 = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian_student/${this.guardian_student._id}`;
        axios
          .put(apiURL2, this.guardian_student)
          .catch((error) => {
            console.log(error);
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            let apiURL3 = this.APIBASEURL + ":" + this.APIPORT +`/api/guardian_student/${this.guardian_student2._id}`;
            axios.put(apiURL3, this.guardian_student2).catch((error) => {
              console.log(error);
            });
          })
          .catch((error) => {
            console.log(error);
          })
          .then((res) => {
            this.$router.push(`/students/${this.StudentID}`);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    register() {
      let apiURL = this.APIBASEURL + ":" + this.APIPORT +`/api/student/${this.StudentID}`;
      axios
        .put(apiURL, this.student)
        .then((res) => {
          const studentID = res.data.StudentID;
          console.log(studentID);
          console.log(res.data.StudentID);
          this.$router.push(`/addParent/${this.StudentID}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>