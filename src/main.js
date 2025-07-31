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
onMounted(() => {
  AOS.init({
    once: true, // only animate once
    duration: 800,
    delay: 100,
  });

  // Re-initialize when navigating or refreshing
  nextTick(() => {
    AOS.refreshHard(); // force reflow
  });
});

