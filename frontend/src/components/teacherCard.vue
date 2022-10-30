<template>
        <div class="display mb-5">
        <div class="top">  <span id="name"> {{FName}} {{LName}}</span>
      <div id="id">{{id}}</div></div >
  <div class="body">
     <div class="rows"> <span class="label">Phone:</span> <span>{{Phone}}</span></div >
        <div class="rows"><div class="label">Email:</div>{{Email}}</div>
   
          <div class="rows mb-2"><button class="btn">View Profile</button><button class="btn">Edit Teacher</button></div>
      
  </div>
  
    </div>
</template>

<script>
export default{
props:['id','FName','LName','Phone','Email','teacher']
}
</script>