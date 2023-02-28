<!-- <h1 class="mt-5">Add Room</h1>
          <div class="wrapper">
                      <form @submit.prevent="submitForm" >
             <fieldset class="form-control p-3">
                   
                 <div class="row mb-3" >
                       <div class="col">
                                <label class="form-label">Room ID</label>
                                <input type="number" class="form-control"  required v-model="room.RoomID">
                       </div >
                       <div class="col">   
                                <label class="form-label">Location ID</label>
                                <input type="number" class="form-control" v-model="room.LocationID" required>
                       </div >
                       <div class="col">
                        <div class="form-label">Capacity</div>
                        <input type="number" class="form-control" v-model="room.Capacity" required>
                 </div >
                    <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Room Name</label>
                            <input type="text" class="form-control" v-model="room.RoomName">
                        </div>
                      <div class="row mb-3">
                        <div class="col">
                            <label class="form-label">Room Status ID</label>
                            <input type="number" class="form-control" v-model="room.RoomStatusID">
                        </div>  
                    <div class="text-center m-3">
                   
                    </div>  
             </fieldset >
             <button class="btn mt-4">Submit</button>
            </form>
        </div>
 
</template> -->

<script>
    import axios from "axios";
    export default {
        name: "AddRoom",
        data() {
            return {
               room: { 
                    RoomID:"",
                    LocationID: "",
                    Capacity:"",
                    RoomName:"",
                    RoomStatusID: ""
                }, 
            };
        },    

        methods:{
            submitForm(){
                let apiURL = this.APIBASEURL + ":" + this.APIPORT +"/api/room/"
                axios.post(apiURL,this.room).catch(error => {
        console.log(error)
      });
      this.$router.push("/room")
} 
     }
        }
    
</script>
