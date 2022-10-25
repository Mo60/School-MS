<template>
 
    <div class="wrapper2">
      <h1 class="mt-5 mb-5">Login</h1>
      <form class="mt-4" @submit.prevent="login">
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
            <button class="btn">{{submitButtonCaption}}</button>
            <button class="btn" mode="flat" @click="switchAuthMode">{{swithModeButtonCaption}}</button>
          </div>
        </fieldset>
        <p v-if="!formIsValid">Please enter a valid email and password</p>
      </form>
    </div>
 
</template>

    <!-- <RouterView></RouterView>  -->

 
<script>
import router from "../router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "Login",
    errorMsg:""
    };
  },
  computed:{
    submitButtonCaption(){
if(this.mode==='Login')
    return 'Login'
    else return 'Sign Up'
},
    swithModeButtonCaption(){if(this.mode==='Login')
    return 'Sign Up Instead'
    else return 'Login Instead'
}
  },
  methods: {
    login() {
    //   this.formIsValid = true;
    //   if (this.email === "" || this.password.length < 6) {
    //     this.formIsValid = false;
    //   } 

const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
  );

  switch (error.code){
    case "auth/invalid-email":
    this.errorMsg="Invalid Email"
    break;
    case "auth/user-not-found":
        this.errorMsg="No account with that email was found"
        break;
        default:
        this.errorMsg="Email or password was incorrect"
        break;
}

  this.$router.push("/")
    },

    switchAuthMode() {
      if (this.mode === "Login") {
        this.mode = "Sign Up";
      }

      else {
        this.mode="Login"
      }
    },
  },
};
</script>

