import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// Import our custom CSS
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown ,faAngleUp,faArrowsUpDown,faEye,faTrash,faPenToSquare, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import all of Bootstrap's JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/app.css";
import Vuelidate from 'vuelidate'

const app= createApp(App)
app.use(router)
app.use(Vuelidate)
app.mount("#app")
library.add(faAngleDown)
library.add(faAngleUp)
library.add(faArrowsUpDown)
library.add(faEye)
library.add(faPenToSquare)
library.add(faPlus)
library.add(faTrash)
app.component('font-awesome-icon', FontAwesomeIcon)
