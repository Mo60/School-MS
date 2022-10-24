<template>
    <form action="">
    <div class="loginwrapper">
        <h1>Login</h1>
        <form  class="mt-4" @submit.prevent="submitForm">
            <fieldset class="form-control">
               <div class="col">
                    <label for="" class="form-label">User Name</label>
                    <input type="text" class="form-control mb-3" v-model.trim="userName">
                    <label for="" class="form-label" >Password</label>
                    <input type="password" class="form-control mb-3" v-model.trim="password">
               </div >
               <button class="btn">Login</button>
               <button class="btn">Sign Up</button>
            </fieldset >
<p v-if="!formIsValid">Please enter a valid username and password</p>
        </form>
    </div>
    </form>
</template>

    <!-- <RouterView></RouterView>  -->

 
<script>
import router from '../router';

export default{
    data(){
        return{
userName:"",
password:"",
formIsValid:true
        }
    },
    methods:{
      submitForm(){
        this.formIsValid=true
        if(this.userName===""||this.password.length<6)
        {
            this.formIsValid=false
        }
        else this.$router.push("/")
      }  
    }
}
</script>