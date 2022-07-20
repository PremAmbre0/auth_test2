import Vue from 'vue'
import VueRouter from 'vue-router'
import Authentication from '../views/Authentication.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect : "/auth"
  },
  {
    path: '/auth',
    name: 'auth',
    component: Authentication
  }
]

const router = new VueRouter({
  routes
})

export default router
