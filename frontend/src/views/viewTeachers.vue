<template>
    <h1 class="mb-3 mt-3">Teachers</h1>
  <div class="row justify-content-center">
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

</template>
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
            let apiURL = 'http://172.26.54.21:8082/api/teacher/';
            axios.get(apiURL).then(res => {
                this.Teachers = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteTeachers(id){
                let apiURL = `http://172.26.54.21:8082/api/teacher/`;
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
