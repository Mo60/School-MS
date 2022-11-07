<template>
      <h1 class="mt-5 mb-5">Parents and Guardians</h1>
<div class="flex-wrapper" v-if="parent.length == 0 && loaded" v-cloak>
    <div class="empty-arr" >
        <p>No Parents or Guardians Found</p>
      </div>
</div> 
<!-- <div class="cont" v-else><parentsCard :parents="p" :fName="p.guardian_first_name" :lName="p.guardian_last_name" :id="p.GuardianID" :phone="p.PhoneNumber" :sFName="p.student_first_name" :sLName="p.student_last_name" :email="p.Email" v-for="p in parent" :key="p.id"></parentsCard></div > -->
<div class="tablewrapper" v-else>
    <table class="table table-striped">
        <thead>
          <tr class="text-center">
           <th>ID</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Phone</th>
           <th>Cell</th>
           <th>Email</th>
           <th colspan="2" class="">Actions</th>
          </tr>
        </thead>  
        <tbody v-for="p in parent" :key=p.GuardianID>
          
           <tr><td>{{p.GuardianID}}</td>
           <td>{{p.FirstName}}</td>
           <td>{{p.LastName}}</td>
           <td>{{p.PhoneNumber}}</td>
           <td>{{p.CellNumber}}</td>
           <td><a v-bind:href="`mailto:${p.Email}`">{{p.Email}}</a></td>
           <td><router-link class="btn" :to="{name:'viewParent',params:{GuardianID:p.GuardianID}}">See More</router-link></td>
           <td><router-link class="btn" :to="{name:'EditParent',params:{GuardianID:p.GuardianID}}">Edit</router-link></td>
        </tr>
      </tbody>    
    </table>  
    
</div> 
</template>       
        
<script>
 import axios from "axios";
 import parentsCard from "../components/parentsCard.vue";
export default{
  components:{parentsCard},
  data(){
return{
parent:[],
loaded:false
}},

  created(){
  let apiURL='http://172.26.54.21:8082/api/guardian'
  axios
      .get(apiURL)
      .then((res) => {
        this.parent = res.data;
       
      })
      .catch((error) => {
        console.log(error);
     
      });
      this.loaded=true;
  },
}


  
</script>