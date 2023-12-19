import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { auth } from "@/firebase/firebaseInit";
import { onAuthStateChanged } from 'firebase/auth';

// ui components
const Modal = defineAsyncComponent(() => import('@/components/Modal.vue'));
const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'));
const NavButton = defineAsyncComponent(() => import('@/components/NavButton.vue'));

// font-awesome icons
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
app.component('modal', Modal)
app.component('loading', Loading)
app.component('nav-button', NavButton)

onAuthStateChanged(auth, () => {
  if (!app.mounted) {
    app.mount('#app');
  }
});
