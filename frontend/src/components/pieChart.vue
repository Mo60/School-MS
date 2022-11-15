<template>
    
    <Pie :chart-data="chartData"
         :chart-options="chartOptions"
          />
 
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import axios from 'axios'
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
  
  export default {
    name: 'PieChart',
    props: {
    courseNames: Array,
  },
    components: { Pie },
    data() {
      return {
        _array1:[],
        _array2:[],
        data1:[{CourseName:"",TotalStudents:""}],
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'Classes',
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD3416','#41B343', '#E34651', '#00D431', '#DDht16',],
              data: []
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: true
        }
      }
    },

   async updated (){
    await  this.courseNames.forEach(faculty => {
              this._array1.push(faculty.CourseName);
              this._array2.push(faculty.TotalStudents)
           }); 
          this.chartData.labels=this._array1
          this.chartData.datasets[0].data=this._array2
          console.log(this.courseNames)
         
  
      }
  }
  </script>
  