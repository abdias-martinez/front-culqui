import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/login-view.vue'
import CardRegister from '../views/card-register/card-register-view.vue'
import GetCard from '../views/get-card/get-card-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/card-register',
    name: 'cardRegister',
    component: CardRegister
  },
  {
    path: '/card',
    name: 'card',
    component: GetCard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
