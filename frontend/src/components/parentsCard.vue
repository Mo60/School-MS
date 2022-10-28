<template>
       <div class="display">
      <div class="top">  <span id="name">{{fName}} {{lName}}</span>
    <div id="id">{{id}}</div></div >
<div class="body">
   <div class="rows"> <span class="label">Phone Number:</span> <span>{{phone}}</span></div >
   <div class="rows"> <span class="label">Email: </span><a v-bind:href="`mailto:${email}`">{{email}}</a></div >
   
        <div class="rows"><button class="btn">See More</button> <button class="btn">Edit Parent</button></div>
    
</div>
    </div>
</template>

<script>
export default{
    props:['parents', "fName","lName","email","phone","id"]
}</script>