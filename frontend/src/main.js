import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import our custom CSS


// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
const app= createApp(App)
app.use(router)
app.mount("#app")