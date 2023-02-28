<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Room</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Room ID</label>
                    <input type="number" class="form-control" v-model="room.RoomID" required>
                </div>
                <div class="form-group">
                    <label>Location ID</label>
                    <input type="number" class="form-control" v-model="room.LocationID" required>
                </div>
                <div class="form-group">
                    <label>Capacity</label>
                    <input type="number" class="form-control" v-model="room.Capacity" required>
                </div>
                <div class="form-group">
                    <label>Room Name</label>
                    <input type="text" class="form-control" v-model="room.RoomName" 
                    required>
                </div>

                <div class="form-group">
                    <label>Room Status ID</label>
                    <input type="number" class="form-control" v-model="room.RoomStatusID" required>
                </div>
                
                <div class="text-center m-3">
                <button class="btn btn-danger mt-3">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "EditRoom",
        data() {
            return {
               room: { 
                    RoomID:"",
                    LocationID:"",
                    Capacity:"",
                    RoomName:"",
                    RoomStatusID: ""
                }, 
            };
        },
    } 
    // methods: {
    //         handleSubmitForm() {
                
    //             let apiURL = this.APIBASEURL + ":" + this.APIPORT +'/api/room/';
                
    //             axios.post(apiURL, this.room).then(() => {
    //                 //changing the view to the list
    //               this.$router.push('/')
    //               this.room = {
    //               RoomID:"",
                    // LocationID:"",
                    // Capacity:"",
                    // RoomName:"",
                    // RoomStatusID: ""
    //               }
    //             }).catch(error => {
    //                 console.log(error)
    //             });
    //         }
    //     } 
           
    
</script>
