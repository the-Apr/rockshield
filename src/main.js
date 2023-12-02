import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { auth } from "@/firebase/firebaseInit";
import { onAuthStateChanged } from 'firebase/auth';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const app= createApp(App)

app.use(store)
app.use(router)

app.component('fa-icon', FontAwesomeIcon);

onAuthStateChanged(auth, () => {
  if (!app.mounted) {
    app.mount('#app');
  }
});
