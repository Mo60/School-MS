<template>
 
    <div class="wrapper2">
      <h1 class="mt-5 mb-5">Sign Up</h1>
      <form class="mt-4" @submit.prevent="signUp">
        <fieldset class="form-control p-5">
          <div class="col">
            <label for="" class="form-label">Email</label>
            <input
              type="email"
              class="form-control mb-5"
              v-model.trim="email"
            />
            <label for="" class="form-label">Password</label>
            <input
              type="password"
              class="form-control mb-5"
              v-model.trim="password"
            />
          </div>
          <div class="btns">
            <button class="btn">Sign Up</button>
          </div>
        </fieldset>
      </form>
    </div>
 
</template>

<script>
import {getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import {useRouter} from 'vue-router'
import {ref} from "vue";
// const email=ref("");
// const password=ref("")
export default{
data(){
    return{
password:"",
email:""
    }
},
    methods:{
        signUp(){
    createUserWithEmailAndPassword(getAuth(),this.email, this.password).then((data)=>{
        console.log("Successfully Registered!")
        this.$router.push("/")
    }).catch((error)=>{
        alert(error.message)
        console.log(error.message)
    })}}
}
</script>