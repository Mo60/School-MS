<template>
      <h1 class="mt-5 mb-5">Parents and Guardians</h1>
<div class="flex-wrapper" v-if="parent.length == 0 && loaded" v-cloak>
    <div class="empty-arr" >
        <p>No Parents or Guardians Found</p>
      </div>
</div> 
<!-- <div class="cont" v-else><parentsCard :parents="p" :fName="p.guardian_first_name" :lName="p.guardian_last_name" :id="p.GuardianID" :phone="p.PhoneNumber" :sFName="p.student_first_name" :sLName="p.student_last_name" :email="p.Email" v-for="p in parent" :key="p.id"></parentsCard></div > -->
<div class="tablewrapper" v-else>
  <div class="d-flex mb-4 justify-content-center">
      <div class="col-md-4 mx-4">
        <input
          type="search"
          v-model="searchByAll"
          class="form-control"
          @input="searchAll"
          placeholder="Search Here..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
  
    </div>
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
        <tbody v-for="p in parentList" :key=p.GuardianID>
          
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
parentList:[],
loaded:false,
sortedByFName:false,
sortedByLName:false,
searchByAll:"",
searchLastName:""
}},

  created(){
  let apiURL=this.APIBASEURL + ":" + this.APIPORT +'/api/guardian'
  axios
      .get(apiURL)
      .then((res) => {
        this.parent = res.data;
        this.parentList=res.data
       
      })
      .catch((error) => {
        console.log(error);
     
      });
      this.loaded=true;
  },
methods:{
  sortByFName() {
    this.sortedByLName=false
      if (!this.sortedByFName) {
        this.parentList.sort((a, b) => {
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
        this.parentList.sort().reverse();
        this.sortedByFName = !this.sortedByFName;
      }
    },
    sortByLName() {
      this.sortedByFName=false
      if (!this.sortedByLName) {
        this.parentList.sort((a, b) => {
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
        this.parentList.sort().reverse();
        this.sortedByLName = !this.sortedByLName;
      }
    },
    searchAll(){
    const result = this.parent.filter(
        (item) =>
          item.FirstName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.LastName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.CellNumber.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.Email.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !==-1 || item.PhoneNumber.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !==-1 
          
      );
      //save the results in the filtering list
      this.parentList = result;
}
}
  
}


  
</script>