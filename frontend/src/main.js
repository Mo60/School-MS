import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// Import our custom CSS
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAngleDown ,faAngleUp,faArrowsUpDown} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { initializeApp } from "firebase/app";
// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
const app= createApp(App)
app.use(router)
app.mount("#app")
library.add(faAngleDown)
library.add(faAngleUp)
library.add(faArrowsUpDown)


app.component('font-awesome-icon', FontAwesomeIcon)
