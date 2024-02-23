import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import characterDetail from '../views/characterDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/libary/:name',
    name: 'characterDetail',
    component: characterDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
