<template>
    <h1 class="mt-5">Enter Student Information</h1>

   <div class="wrapper">
        <form @submit.prevent="submitForm">
            <fieldset class="form-control">
                <legend > Personal Information</legend>
<div class="row mb-4"> 
   <div class="col">
        <label for="fName" class="form-label">First Name</label>
        <input type="text" class="form-control" v-model="student.FirstName">
   </div >
   <div class="col">
        <label for="lName" class="form-label">Last Name</label>
        <input type="text" class="form-control" v-model="student.LastName">
   </div >
   <div class="col">
        <label for="lName" class="form-label">Date of Birth</label>
        <input type="date" class="form-control" v-model="student.DOB">
   </div >
 
</div>
</fieldset>
<fieldset class="form-control mt-5">
     <legend>Class Information</legend>
<div class="row mb-4">
     <div class="col">
       <label for="sDate" class="form-label"> Start Date</label>
     <input class="form-control" type="date" v-model="student.StartDate">
     </div>
    <div class="col">
     <label for="" class="form-label">Lesson Days</label>
     <select name="days" id="" class="form-select" v-model="student.LessonDay">
          <option value="" disabled selected>Select an Option</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
     </select>
    </div>
<div class="col"> 
     <label for="" class="form-label">Class Time</label>
     <select class="form-select" v-model="student.LessonTime">
          <option value="" disabled selected>Select an Option</option>
          <option value="10:00AM - 11:15AM">10:00AM - 11:15AM </option>
          <option value="11:15AM - 12:30PM">11:15AM - 12:30PM </option>
          <option value="12:30PM - 1:45PM">12:30PM - 1:45PM </option>
          <option value="4:00PM - 5:15PM">4:00PM - 5:15PM </option>
          <option value="5:15PM - 6:30PM">5:15PM - 6:30PM </option>
          </select>
</div>
</div>
            </fieldset>

            <fieldset class="form-control mt-5">
               <legend>Emergency Contact </legend>
              <div class="row">
                    <div class="col">
                         <label for="" class="form-label">Contact Name</label>
                         <input type="text" class="form-control" v-model="student.EmergencyContactName">
                    </div>
                    <div class="col mb-4"><label for="" class="form-label">Phone Number</label><input type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="student.EmergencyContactPhone"></div>
              </div >
            </fieldset>

            <fieldset class="form-control mt-5">
            <legend >   Medical Information </legend >
               <div class="col mb-4"><textarea class="form-control" v-model="student.Medical"></textarea></div>
            </fieldset>
            <fieldset class="form-control mt-5">
            <legend >   Notes </legend >
               <div class="col mb-4"><textarea class="form-control" v-model="student.Notes"></textarea></div>
            </fieldset>

            <button class="btn mt-4">Submit</button>
        </form>
   </div>
</template>

<script>
import axios from "axios"

export default{
data(){
     return {
          student:{
               StudentID: "",
               FirstName:"",
               LastName:"",
               DOB:"",
               StartDate:"",
               EmergencyContactName:"",
               EmergencyContactPhone:"",
               Medical:"",
               Notes:"",
               LessonDay:"",
               LessonTime:"",
               ParentsID:"",
          },
          phone:""
     }
},
created(){
     let apiURL2 = "http://172.26.54.21:8082/api/parent/"

     this.phone= this.$route.params.phone
           axios.get(apiURL2,this.parent).then(res=>{
        this.allParents=res.data
        console.log(this.allParents)
      }).then(()=>{
        let index= this.allParents.findIndex(i=>i.PhoneNumber===this.phone)
            console.log(index)
            console.log("hi")
           
            this.student.ParentsID=this.allParents[index].ParentsID
            console.log(this.student.ParentsID)
      }).catch(error=>{
                console.log(error)
            });

},

methods:{
     submitForm(){
let apiURL=`http://172.26.54.21:8082/api/student/`

axios.post(apiURL,this.student).then(()=>{
    this.student={
               StudentID: "",
               FirstName:"",
               LastName:"",
               DOB:"",
               StartDate:"",
               EmergencyContactName:"",
               EmergencyContactPhone:"",
               Medical:"",
               Notes:"",
               LessonDay:"",
               LessonTime:"",
               ParentsID:"",
          }
}).catch(error => {
        console.log(error)
      });
      this.$router.push("/")
} 
     }
}


</script>