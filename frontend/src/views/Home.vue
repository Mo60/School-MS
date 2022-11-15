<template>
  <h1>Dashboard</h1>
<div class="container">
  <div class="row">
    <div class="col">
      <BarChart :data-list=data2 />
    </div>
    <div class="col">
      <PieChart :course-names=data1 />
    </div>
    <div class="col">
      <BarChart :data-list=data2 />
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import BarChart from '../components/barChart.vue';
import PieChart from '../components/pieChart.vue';

export default {
  name: 'App',
  components: {
    BarChart,
    PieChart
},
  data(){
    return{
      data1: [],
      data2: []
    }
  },
  async created(){
    await   axios.get("http://172.26.54.21:8082/api/reports/count_students_course_view").then(res=> {
        this.data1= res.data
        })
        .catch(err=> {
          console.log(err)
        })
    await   axios.get("http://172.26.54.21:8082/api/reports/count_class_by_faculty").then(res=> {
        this.data2= res.data   
        })
        .catch(err=> {
          console.log(err)
        })
        //count_students_by_semester
    await   axios.get("http://172.26.54.21:8082/api/reports/count_students_by_semester").then(res=> {
        this.semestersEnrollments= res.data   
        })
        .catch(err=> {
          console.log(err)
        })
  }
}
</script>