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
        <thead class="table-dark">
          <tr class="text-center">
           <th>ID</th>
           <th @click="sortByFName">First Name &nbsp;  <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByFName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
           <th @click="sortByLName">Last Name &nbsp;  <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByLName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
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
           <td><router-link class="btn" :to="{name:'viewParent',params:{GuardianID:p.GuardianID}}"><font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon></router-link></td>
           <td><router-link class="btn" :to="{name:'EditParent',params:{GuardianID:p.GuardianID}}"><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link></td>
        </tr>
      </tbody>    
    </table>  
    
</div> 
</template>       
        
<script>
 import axios from "axios";
export default{
  data(){
return{
parent:[],
loaded:false,
sortedByFName:false,
sortedByLName:false
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
methods:{
  sortByFName() {
      if (!this.sortedByFName) {
        this.parent.sort((a, b) => {
          const nameA = a.FirstName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.FirstName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByFName = !this.sortedByFName;
      } else {
        this.parent.sort().reverse();
        this.sortedByFName = !this.sortedByFName;
      }
    },
    sortByLName() {
      if (!this.sortedByLName) {
        this.parent.sort((a, b) => {
          const nameA = a.LastName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.LastName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByLName = !this.sortedByLName;
      } else {
        this.parent.sort().reverse();
        this.sortedByLName = !this.sortedByLName;
      }
    },

}
  
}


  
</script>