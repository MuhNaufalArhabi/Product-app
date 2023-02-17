import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import OrderList from '../views/OrderList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: OrderList
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.access_token) next({ name: 'login' })
  else next()
  if (to.name === 'login' && localStorage.access_token) next({ name: 'home' })
  else next()
})

export default router
