<div class="row justify-content-center">
   <h1 class="mb-3 mt-3">Timeblock</h1>
      <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Timeblock ID</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>   
        <tr v-for="t in Timeblock" :key="t._id">
            <td>{{t.TimeblockID }}</td>
            <td>{{t.StartTime }}</td>
             <td>{{t.EndTime }}</td>
          </tr>
      </tbody>
    </table>    
 </div>
</template>
<script>
    import axios from "axios";

    export default {
        data() {
            return {
                Timeblock: []
            }
        },
        created() {
            let apiURL = '';
            axios.get(apiURL).then(res => {
                this.Timeblock = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>
