import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/productos', name: 'products', component: () => import('./ProductsView.vue') },
    { path: '/productos/:id', name: 'category', component: () => import('./CategoryView.vue') },
    { path: '/quienes-somos', name: 'about', component: () => import('./AboutUsView.vue') },
    { path: '/tiendas', name: 'stores', component: () => import('./TiendasView.vue') },
    { path: '/contactanos', name: 'contact', component: () => import('./ContactView.vue') },
  ]
})

export default router