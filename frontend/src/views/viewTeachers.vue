<template>
     <h1 class="mt-5 mb-5">Faculty</h1>
 <div class="flex-wrapper" v-if="faculty.length == 0 && loaded">
        <div class="empty-arr" >
          <p>No faculty Found</p>
          <a class="btn mt-3"><router-link :to="{name:'addfaculty'}">Add faculty</router-link></a>
        </div>
   </div> 
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
          <th @click="sortByTitle">Position &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByTitle"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByFName">First Name &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByFName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByMName">Middle Name &nbsp; <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByMName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByLName">Last Name &nbsp;<font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByLName"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th @click="sortByCT"><a>Classes Taught</a> <font-awesome-icon icon='fa-solid fa-angle-down' v-if="sortedByCT"/><font-awesome-icon icon='fa-solid fa-angle-up' v-else/></th>
          <th>Cell</th>
          <th>Phone</th>
          <th>Email</th>
  
          <th colspan="2" class="">Actions</th>
        </tr>
      </thead>
      <tbody v-for="f in facultyList" :key="f.FacultyID">
      <tr>
        <td>{{f.FacultyID}}</td>
        <td>{{f.Title}}</td>
      <td>{{f.FirstName}}</td>
      <td>{{f.MiddleName}}</td>
      <td>{{f.LastName}}</td>
      <td><a class="numClasses"  data-bs-toggle="modal"
                  data-bs-target="#exampleModal" @click="getID(f.FacultyID)">{{f.NoOfClass}}</a></td>
      <td>{{f.CellNumber}}</td>
      <td>{{f.PhoneNumber}}</td>
      <td><a :href="`mailto:${f.Email}`">{{f.Email}}</a></td>
   
      <td></td>
           <td><router-link class="btn" :to="{name:'EditFaculty',params:{FacultyID:f.FacultyID}}"><font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon></router-link></td>
      </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mt-5">  <router-link class="btn " :to="{name:'addfaculty'}">Add Faculty </router-link></div >

      <div
            class="modal fade"
            id="exampleModal"
            tabindex="0"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel2">
                    Classes Taught
                  </h5>
  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="rows" v-if="faculty_Class.length==0">No classes taught</div>
                <div class="rows" v-for="ct in faculty_Class" :key="ct.FacultyID" v-else>
                 {{ct.CourseName}}: {{ct.Semester}} - {{ct.WeekDay}}s at {{ct.StartTime}} - {{ct.EndTime}}

                  
                </div>
                </div>
                <div class="modal-footer">

                </div>
              </div>
            </div>
          </div>
  </div>

</template>
  <script>
    import axios from "axios";

    export default {
        components:{
      
        },
        data() {
            return {
                faculty: [],
                loaded:false,
                sortedByTitle:false,
                sortedByFName:false,
                sortedByLName:false,
                sortedByMName:false,
                sortedByCT:false,
                faculty_Class:[],
                searchFirstName:"",
                searchLastName:"",
                searchByAll:"",
                facultyList:[]
            }
        },
        // this is using created hook 
        created() {
            let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/reports/count_class_by_faculty';
            axios.get(apiURL).then(res => {
                this.faculty = res.data;
                this.facultyList = res.data;
                
            }).catch(error => {
                console.log(error)
            });
            this.loaded=true
        },
        methods:{
          sortByFName() {
            this.sortedByTitle=false;
                this.sortedByLName=false;
                this.sortedByMName=false,
                this.sortedByCT=false;
      if (!this.sortedByFName) {
        this.facultyList.sort((a, b) => {
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
        this.facultyList.sort().reverse();
        this.sortedByFName = !this.sortedByFName;
      }
    },
    sortByLName() {
      this.sortedByTitle=false;
                this.sortedByFName=false;
                this.sortedByMName=false,
                this.sortedByCT=false;
      if (!this.sortedByLName) {
        this.facultyList.sort((a, b) => {
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
        this.facultyList.sort().reverse();
        this.sortedByLName = !this.sortedByLName;
      }
    },
    sortByTitle() {
      this.sortedByFName=false;
                this.sortedByLName=false;
                this.sortedByMName=false,
                this.sortedByCT=false;
      if (!this.sortedByTitle) {
        this.facultyList.sort((a, b) => {
          const nameA = a.Title.toUpperCase(); // ignore upper and lowercase
          const nameB = b.Title.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByTitle = !this.sortedByTitle;
      } else {
        this.facultyList.sort().reverse();
        this.sortedByTitle = !this.sortedByTitle;
      }
    },
    sortByMName() {
      this.sortedByTitle=false;
                this.sortedByLName=false;
                this.sortedByFName=false,
                this.sortedByCT=false;
      if (!this.sortedByMName) {
        this.facultyList.sort((a, b) => {
          let nameA = a.MiddleName // ignore upper and lowercase
          let nameB = b.MiddleName // ignore upper and lowercase
          if(nameA!==null){
            nameA = a.MiddleName.toUpperCase();
          }
          if(nameB!==null){
            nameB = b.MiddleName.toUpperCase();
          }
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        })
        this.sortedByMName = !this.sortedByMName;
      } else {
        this.facultyList.sort().reverse();
        this.sortedByMName = !this.sortedByMName;
      }
    },
    sortByCT() {
      this.sortedByTitle=false;
                this.sortedByLName=false;
                this.sortedByMName=false,
                this.sortedByFName=false;
            if (!this.sortedByCT)
                this.faculty.sort((a, b) => a.NoOfClass - b.NoOfClass);
            else {
                this.faculty.sort((a, b) => b.NoOfClass - a.NoOfClass);
            }
            this.sortedByCT = !this.sortedByCT;
        },
    getID(value){

      let apiURL=this.APIBASEURL + ":" + this.APIPORT +`/api/reports/faculty_class_list/${value}`
      axios.get(apiURL).then((res)=>{
this.faculty_Class=res.data
      })
    },

    searchAll() {
      const result = this.faculty.filter(
        (item) =>
          item.FirstName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.LastName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.PhoneNumber.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !== -1 || item.MiddleName.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          ) !==-1 || item.Email.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          )!==-1 || item.CellNumber.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          )!==-1 || item.Title.toUpperCase().indexOf(
            this.searchByAll.toUpperCase()
          )!==-1 
          
      );
      //save the results in the filtering list
      this.facultyList = result;
    },
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
