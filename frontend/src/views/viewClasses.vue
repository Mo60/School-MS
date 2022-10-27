<template>
  <div class="row justify-content-center">
   <h1 class="mb-3 mt-3">Classes</h1>
      <table class="table table-striped">
      <thead class="table-dark">
        <tr>
         <th>Class ID</th>
         <th>Teacher ID</th>
         <th>Classdate</th>
         <th>Classtime</th>
         <th>Numstudents</th>
         <th>Maxcapacity</th>
         <th>Notes</th>
        </tr>
      </thead>  
  </table></div>   
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        Classes: []
      }
    },
    created() {
      // Get all the classes from database
      axios.get('')
      .then(res => {
        this.Classes = res.data
      }).catch(err => {
        alert("Data could not be fetched")
      })
    },
    methods: {
      // Handles deleting of classes
      deleteClass(class_id){
        if (window.confirm("Do you really want to delete this class?")) {
          axios.delete(``).then(() => {
            this.Classes.splice(this.Classes.findIndex(i => i.class_id === class_id), 1);
          }).catch(error => {
            alert("Class could not be deleted")
          });
        }
      }
    }
  }

</script>
</template>       
        
    
