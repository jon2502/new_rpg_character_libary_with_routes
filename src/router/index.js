import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import characterDetail from '../views/characterDetail.vue'
import GalleryPage from '../views/GalleryPage.vue'
import systemPage from '../views/systemPage.vue'
import systemDetail from '../views/systemDetail'

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
  },
  {
    path: '/systems',
    name: 'systemPage',
    component: systemPage,
  },
  {
    path: '/systems/:system',
    name: 'systemDetail',
    component: systemDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
