<template>
  <h1>Dashboard</h1>
<div class="container">
  <div class="row">
    <div class="col">
      <BarChart/>
    </div>
    <div class="col">
      <BarChart/>
    </div>
    <div class="col">
      <BarChart/>
    </div>
  </div>
</div>
</template>
<script>
import BarChart from '../components/barChart.vue'

export default {
  name: 'App',
  components: {
    BarChart
  }
}
</script>