<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Bootstrap from './components/bootstrap.vue'
</script>

<template>
  <div class="cover-container p-5">
  <div class="text-center" >
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg"  alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Vite + Vue" />
  <Bootstrap msg="Bootstrap"/>  
</div>
</template>


