import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PlazmetView from '../views/PlazmetView.vue'
import WaterjetView from '@/views/WaterjetView.vue'
import GalleryView from '@/views/GalleryView.vue'
const routes = [
  {
    path: '/',
    name: 'Start',
    component: HomeView
  },
  {
    path: '/waterjet',
    name: 'Cięcie wodą',
    component: WaterjetView
  },
  {
    path: '/ciecie-tlenem',
    name: 'Plazmet',
    component: PlazmetView
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: GalleryView
  },
  {
    path: '/about',
    name: 'Kontakt',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
