<!-- <h1 class="mt-5">Add Location</h1>
          <div class="wrapper">
             <form @submit.prevent="submitForm" >
             <fieldset class="form-control p-3">
                   
                 <div class="row mb-3" >
                     <div class="col">
                      <label class="form-label">Location ID</label>
                       <input type="number" class="form-control"  required v-model="location.LocationID">
                    </div >
                    
                       <div class="col">
                        <div class="form-label">Location Name</div>
                        <input type="text" class="form-control" v-model="location.LocationName" required>
                       </div>
                 </div >
                 
                 <div class="row mb-3">
                   <div class="col">
                     <label class="form-label">Location Status ID</label>
                       <input type="number" class="form-control" v-model="location.LocationStatusID">
                     </div>  
                    </div>  
             </fieldset >
             <button class="btn mt-4">Submit</button>
            </form>
        </div>
 
</template> -->

<script>
//     import axios from "axios";
//     export default {
//         name: "AddLocation",
//         data() {
//             return {
//                location: { 
//                     LocationID:"",
//                     Location Name: "",
//                     LocationStatusID: ""
//                 }, 
//             };
//         },    
//         methods:{
//             submitForm(){
//                 let apiURL = "http://172.26.54.21:8082/api/location/"
//                 axios.post(apiURL,this.location).catch(error => {
//         console.log(error)
//       });
//       this.$router.push("/location")
// } 
//      }
//         }
    
</script>
