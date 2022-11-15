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
    props: {
    dataList: Array,
    },
    data() {
      return {
        fields: [],
        numberOfFields: null,
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
   async updated (){
         this.fields= await Object.getOwnPropertyNames(this.dataList[0])
        this.numberOfFields= await this.fields.length;
        console.log(this.fields);
        console.log(this.numberOfFields)
    await     this.dataList.forEach(faculty => {
              this._array1.push(faculty.LastName);
              this._array2.push(faculty.NoOfClass)
           }); 
          this.chartData.labels=this._array1
          this.chartData.datasets[0].data=this._array2
  
      }
  }
  </script>
  