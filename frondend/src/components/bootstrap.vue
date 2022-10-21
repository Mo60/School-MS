<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})


</script>

<template>

  <h1>{{ msg }}</h1>
   <div class="card">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>

</template>
