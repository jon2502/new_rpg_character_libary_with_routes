import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import characterDetail from '../views/characterDetail.vue'
import GalleryPage from '../views/GalleryPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage,
  },
  {
    path: '/gallery/:name',
    name: 'character gallery',
    component: GalleryPage,
    props: true
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
