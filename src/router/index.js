import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'SEAKLIM | PORTFOLIO'
      }
    },
  ],
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
})
export default router
