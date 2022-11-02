template>
  <div class="container row justify-content-center">
    <div class="col-md-9">
	<h3 class="text-center fw-bold">Medical</h3>
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Medical ID</th>
	     <th>Condition</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="m in Medical" :key="m.MedicalID">
            <td>{{m.latest.MecicalID }}</td>
            <td>{{m.latest.Condition }}</td>
            
