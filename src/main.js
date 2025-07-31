import './assets/style.css'

import 'aos/dist/aos.css';
import AOS from 'aos';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

AOS.init();


