<template>
  <h1 class="mb-5 mt-5">Dashboard</h1>
<div class="container mt-5">
  <div class="dashboard">
    <div class="graph">
      <h4># of Classes Taught by Instructor</h4>
      <BarChart :data-list=data2 />
    </div>
    <div class="graph">
      <h4>Top Classes by enrollment</h4>
      <PieChart :course-names=data1 />
    </div>
    <div class="graph">
      <h4>Enrollments by Semester</h4>
      <BarChart_2 :data-list=semestersEnrollments :table-name=tableName3 />
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
import BarChart from '../components/barChart.vue';
import BarChart_2 from '../components/barChart_2.vue';
import PieChart from '../components/pieChart.vue';

export default {
  name: 'App',
  components: {
    BarChart,
    PieChart,
    BarChart_2
},
  data(){
    return{
      data1: [],
      data2: [],
      semestersEnrollments: [],
      tableName3: "Enrollments By Semester"
    }
  },
  async created(){
    await   axios.get(this.APIBASEURL + ":" + this.APIPORT +"/api/reports/count_students_course_view").then(res=> {
        this.data1= res.data
        })
        .catch(err=> {
          console.log(err)
        })
    await   axios.get(this.APIBASEURL + ":" + this.APIPORT +"/api/reports/count_class_by_faculty").then(res=> {
        this.data2= res.data   
        })
        .catch(err=> {
          console.log(err)
        })
        //count_students_by_semester
    await   axios.get(this.APIBASEURL + ":" + this.APIPORT +"/api/reports/count_students_by_semester").then(res=> {
        this.semestersEnrollments= res.data   
        })
        .catch(err=> {
          console.log(err)
        })
    await this.semestersEnrollments.sort().reverse()
  }
}
</script>