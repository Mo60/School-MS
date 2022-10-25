import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import our custom CSS


// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const app= createApp(App)
app.use(router)
app.mount("#app")

  // Import the functions you need from the SDKs you need
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAvh1qv6ivO9-wvbKM4QQm8IwDzvhGgtIM",
    authDomain: "cis4375project-15020.firebaseapp.com",
    projectId: "cis4375project-15020",
    storageBucket: "cis4375project-15020.appspot.com",
    messagingSenderId: "480313408794",
    appId: "1:480313408794:web:25867f87ef5d30f32a00a3",
    measurementId: "G-8TJ0L0GTEL"
  };
  