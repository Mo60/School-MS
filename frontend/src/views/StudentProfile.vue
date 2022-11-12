<template>
    <div class="cont2">
 
    <div class="box-wrapper">
        <div class="box">
            <h2 class="mb-3">Student Information</h2>
            <div class="rows"><span class="label">Name:</span><span> {{student.FirstName}} {{student.MiddleName}} {{student.LastName}}</span></div>
            <div class="rows"><span class="label">ID:</span><span>{{student.StudentID}}</span></div>
            <div class="rows"><span class="label">DOB:</span>{{student.DOB}}</div>
            <div class="rows"><div class="label">Status</div></div>
            <h4>Parents/Guardians</h4>
           <div> <router-link class="" id="router" v-for="guardian in student.guardians" :key="guardian.GuardianID" :to="{name:'viewParent',params:{GuardianID:guardian.GuardianID}}">{{guardian.FirstName}} {{guardian.LastName}} </router-link></div >
           </div>
    <div class="box"> <h2 class="mb-3">Address</h2>
        <div class="rows"><span class="label">Address Line 1</span><span>{{student.AddressLine1}}</span></div>
         <div class="rows" v-if="student.AddressLine2!=''"><span class="label">Address Line 2</span><span>{{student.AddressLine2}}</span></div>
         <div class="rows" v-if="student.State!=''"><span class="label">State</span><span>{{student.State}}</span></div>
         <div class="rows"><span class="label">City</span><span>{{student.City}}</span></div>
         <div class="rows"><span class="label">Zip Code</span><span>{{student.Zip}}</span></div>
    </div>
    </div>
    <div class="profile"> 
        <h1 class="mt-4 mb-5">Student Profile</h1>

    <div class="profile-body mt-5">
            
            <div class="info">
                <h2>Health Information</h2>
               <div v-for="sm in student_medical" :key="sm.StudentID"> <div class="rows"><span class="label">Medical Condition:</span> <span>{{sm.Condition}}</span> </div>
            <div class="rows mb-4" v-if="student_medical2.Description!==''"><span class="label">Description:</span> {{sm.Description}}</div>
            </div>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <font-awesome-icon icon="fa-solid fa-plus" class="" />
</button>
            </div>
            <div>
                  <h2 class="mb-4">Course History</h2>
                <div class="empty-arr" v-if="student_class.length==0" >No class record
                    <router-link class="btn mt-5" :to="{name:'enroll2'}">
                    Enroll in a Class
                </router-link>
                </div>
          <div class="table-wrapper" v-else>
                <table >
            <thead><tr>
                <th>Course</th>
                <th>Day</th>
                <th>Time</th>
                <th>Course Status</th>
                <th>Actions</th>
            </tr></thead>
            <tr v-for="s in student_class" :key="s.StudentID"><td>{{s.CourseName}}</td>
            <td>{{s.WeekDay}}</td>
            <td>{{s.StartTime}} - {{s.EndTime}}</td>
            <td>{{s.Status}}</td>
            <td><router-link class="btn" :to="{name:'enroll2',params:{StudentID:s.StudentID}}"><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link></td></tr>
                </table>
                <div class="d-flex">
                    <router-link class="btn mt-5 " :to="{name:'enroll2'}">
                        Enroll in a Class
                    </router-link>
                </div>
    </div>
      </div>

<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a Health Condition</h5>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addMedicalCondition">
        <fieldset>
         <div class="row mb-3">
              <div class="col">
                    <label for="">Condition</label>
                    <select name="" id="" class="form-select" v-model="student_medical2.MedicalID"><option>Select an Option</option>
                    <option :value="m.MedicalID" v-for="m in medical" :key="m.MedicalID">{{m.Condition}}</option>
                    </select>    
              </div>
         </div>
         <div class="row mb-3">
            <div class="col">
                <label for="">Description</label>
                <input type="text" v-model="student_medical2.Description" class="form-control">
            </div>
         </div>
        </fieldset>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="addMedicalCondition">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a Health Condition</h5>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addMedicalCondition">
        <fieldset>
         <div class="row mb-3">
              <div class="col">
                    <label for="">Condition</label>
                    <select name="" id="" class="form-select" v-model="student_medical2.MedicalID"><option>Select an Option</option>
                    <option :value="m.MedicalID" v-for="m in medical" :key="m.MedicalID">{{m.Condition}}</option>
                    </select>    
              </div>
         </div>
         <div class="row mb-3">
            <div class="col">
                <label for="">Description</label>
                <input type="text" v-model="student_medical2.Description" class="form-control" >
            </div>
         </div>
        </fieldset>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="addMedicalCondition">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
studentID:this.$route.params.StudentID,
student:[],
student_class:[],
medical:[],
student_medical:[],
student_medical2:{
    StudentID:this.$route.params.StudentID,
    MedicalID:"",
    Description:""
}
        }
    },
    created(){
         let apiURL=`http://172.26.54.21:8082/api/student/${this.studentID}`
         axios.get(apiURL).then((res) => {
        this.student = res.data;
    }).catch((error) => {
        console.log(error);
      }).then(()=>{
        let apiURL2=`http://172.26.54.21:8082/api/reports/student_class_view/${this.studentID}`
      axios.get(apiURL2).then((res2)=>{
this.student_class=res2.data
console.log(this.student_class)
      }).catch((error) => {
        console.log(error);
      }).then(()=>{
        let apiURL3=`http://172.26.54.21:8082/api/medical`
        axios.get(apiURL3).then((res)=>{
            this.medical=res.data
        }).then(()=>{
            let apiURL4=`http://172.26.54.21:8082/api/reports/student_medical_view/${this.studentID}`
            axios.get(apiURL4).then((res)=>{
            this.student_medical=res.data

            }).catch((error) => {
        console.log(error);
        }) .catch((error) => {
        console.log(error);
      })
      }).catch((error) => {
        console.log(error);
      })

      }).catch((error) => {
        console.log(error);
      })   
    })

},
methods:{
    addMedicalCondition(){
let apiURL=`http://172.26.54.21:8082/api/student_medical`
axios.post(apiURL,this.student_medical2).catch((error) => {
        console.log(error);
      })  
    }
}
,updated(){
    let apiURL3=`http://172.26.54.21:8082/api/medical`
        axios.get(apiURL3).then((res)=>{
            this.medical=res.data
        }).then(()=>{
            let apiURL4=`http://172.26.54.21:8082/api/reports/student_medical_view/${this.studentID}`
            axios.get(apiURL4).then((res)=>{
            this.student_medical=res.data

            }).catch((error) => {
        console.log(error);
        }) .catch((error) => {
        console.log(error);
      })
})
}

}
</script>