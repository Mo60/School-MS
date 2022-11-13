<template>
    <div class="tablewrapper" > 
        <div class="text-center">
        <h1 class="mb-3 mt-3">Timeblocks</h1>
            <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                <th>Timeblock ID</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>   
                <tr v-for="t in Timeblocks" :key="t.TimeblockID">
                    <td><input class="form-control ds-input" v-model="t.TimeblockID" disabled ></td>
                    <td>{{t.StartTime }}</td>
                    <td>{{t.EndTime }}</td>
                    <td>
                        <router-link class="btn" :to="{name:'viewTimeblock'}"><font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon></router-link>
                        <!-- <router-link class="btn" :to="{name:'viewParent',params:{GuardianID:p.GuardianID}}"><font-awesome-icon icon="fa-solid fa-eye"></font-awesome-icon></router-link> -->
                        <!-- <router-link :to="{name: 'editworker', params: { id: worker._id }}" class="btn btn-success ">Edit</router-link> -->
                        <!-- <button @click.prevent="deleteWorker(worker._id)" class="btn btn-danger mx-2">Delete</button> -->
                     </td>
                </tr>
            </tbody>
            </table>    
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Timeblocks: []
            }
        },
        created() {
            console.log(this.Timeblocks)
            let apiURL = 'http://localhost:8082/api/timeblock';
            axios.get(apiURL).then(res => {
                this.Timeblocks = res.data;
                // console.log(this.Timeblocks)
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
