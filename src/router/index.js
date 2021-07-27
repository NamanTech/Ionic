import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/details',
    name: 'Deatils',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
