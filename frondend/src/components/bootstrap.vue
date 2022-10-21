<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})


</script>

<template>

  <h1 class="text-center">{{ msg }}</h1>
   <div class="text-center">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>

</template>
