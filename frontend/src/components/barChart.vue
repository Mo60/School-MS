<template>
    
    <Bar :chart-data="chartData"
         :chart-options="chartOptions"
          />
 
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import axios from 'axios'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        _array1:[],
        _array2:[],
        data:[{FacultyID:"",NoOfClass:"",LastName:""}],
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#ffa101',
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
   async created (){
    await   axios.get("http://localhost:8082/api/reports/count_class_by_faculty").then(res=> {
        this.data= res.data   
        console.log(this.data) 
        })
        .catch(err=> {
          console.log(err)
        })
          this.data.forEach(faculty => {
            // for (let key in faculty) {
              this._array1.push(faculty.LastName);
              this._array2.push(faculty.NoOfClass)
          // this.chartData.datasets[0].data.push(faculty.NoOfClass);
          // this.chartData.labels.push(faculty.LastName);
            // }
           }); 
          // console.log(this.chartData.datasets[0].data);
          // console.log(this.chartData.labels)
          console.log(this._array1)
          console.log(this._array2)
          this.chartData.labels=this._array1
          this.chartData.datasets[0].data=this._array2
  
      }
  }
  </script>
  