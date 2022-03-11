import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterUserDetails from '../views/RegisterUserDetails.vue'
import RegisterDomain from '../views/RegisterDomain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/register-userdetails'
    
  },
  {
    path:'/register-userdetails',
    name:'RegisterUserDetails',
    component:RegisterUserDetails
  },
  {
    path:'/register-domain',
    name:'RegisterDomain',
    component:RegisterDomain
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
