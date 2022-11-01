template>
  <div class="container row justify-content-center">
    <div class="col-md-9">
		<h3 class="text-center fw-bold">Student Medical</h3>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Student ID</th>
            <th>Medical ID</th>
			      <th>Description</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="m in Medical" :key="s._id">
           td>{{ m.latest.StudentID }}</td>
            <td>{{m.latest.MecicalID }}</td>
            <td>{{m.latest.Description }}</td>
            
