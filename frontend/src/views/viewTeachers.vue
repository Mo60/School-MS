<template>
  <div class="row justify-content-center">
   <h1 class="mb-3 mt-3">Teachers</h1>
      <table class="table table-striped">
      <thead class="table-dark">
        <tr>
         <th>Teacher ID</th>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Teacher Phone Number</th>
         <th>Teacher email</th>
         <th>Notes</th>
        </tr>
      </thead>  
  </table></div>   
  <script>
    import axios from "axios";
    export default {
        data() {
            return {
                Teachers: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = '';
            axios.get(apiURL).then(res => {
                this.Teachers = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteTeachers(id){
                let apiURL = ``;
                let indexOfArrayItem = this.Teachers.findIndex(i => i.teacher_id === id);
                if (window.confirm("Are you sure you want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Teachers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>

</template>
<script></script>
