<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Location</h3>
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Location ID</label>
                    <input type="number" class="form-control" v-model="location.LocationID" required>
                </div>
                <div class="form-group">
                    <label>Location Name</label>
                    <input type="text" class="form-control" v-model="location.LocationName" required>
                </div>
                 <div class="form-group">
                    <label>Location Status ID</label>
                    <input type="number" class="form-control" v-model="location.LocationStatusID" required>
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
        name: "EditLocation",
        data() {
            return {
               Location: { 
                    LocationID:"",
                    LocationName:"",
                    LocationStatusID: ""
                }, 
            };
        },
        
    }
</script>
