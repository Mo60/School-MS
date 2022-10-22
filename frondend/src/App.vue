<script>
import pages from '~pages'
</script>
<template>
    <nav class="text-center">

     <p v-for="component in pages" :key="pages.component">
                  {{ pages.component}}egrgrgr
     </p>
     <p>eee {{pages}}  eee</p> 
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <main>
    <router-view />
  </main>


</template>


