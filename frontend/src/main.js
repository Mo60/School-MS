import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import our custom CSS

import { initializeApp } from "firebase/app";
// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
const app= createApp(App)
app.use(router)
app.mount("#app")



  const firebaseConfig = {
    apiKey: "AIzaSyAvh1qv6ivO9-wvbKM4QQm8IwDzvhGgtIM",
    authDomain: "cis4375project-15020.firebaseapp.com",
    projectId: "cis4375project-15020",
    storageBucket: "cis4375project-15020.appspot.com",
    messagingSenderId: "480313408794",
    appId: "1:480313408794:web:25867f87ef5d30f32a00a3",
    measurementId: "G-8TJ0L0GTEL"
  };
  
  
const app2 = initializeApp(firebaseConfig);