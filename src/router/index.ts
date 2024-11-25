import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingView.vue')
    },
    {
      path: '/returning',
      name: 'returning',
      component: () => import('../views/ReturningView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/products/:name',
      name: 'products/name',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/:name/:id',
      name: 'products/name/id',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
