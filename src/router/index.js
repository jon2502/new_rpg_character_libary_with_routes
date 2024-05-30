import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import allCharacters from '../views/allCharachters.vue'
import characterDetail from '../views/characterDetail.vue'
import GalleryPage from '../views/GalleryPage.vue'
import systemPage from '../views/systemPage.vue'
import systemDetail from '../views/systemDetail'
import DownloadPage from '../views/DownloadPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/characters',
    name: 'characters',
    component: allCharacters
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
    name: 'character Detail',
    component: characterDetail,
    props: true
  },
  {
    path: '/systems',
    name: 'systems',
    component: systemPage,
  },
  {
    path: '/systems/:system',
    name: 'system Detail',
    component: systemDetail,
    props: true
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component: DownloadPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
