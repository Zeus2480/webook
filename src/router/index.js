import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterUserDetails from '../views/RegisterUserDetails.vue'
import RegisterDomain from '../views/RegisterDomain.vue'
import DashboardPosts from '../views/DashboardPosts.vue'
// import Dashboard from '../components/DashboardPost.vue'
// import AdminPost from '../components/DashboardPost.vue'
import DashboardStats from '../views/DashboardStats.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/register-userdetails'

  },
  {
    path: '/register-userdetails',
    name: 'RegisterUserDetails',
    component: RegisterUserDetails
  },
  {
    path: '/register-domain',
    name: 'RegisterDomain',
    component: RegisterDomain
  },
  {
    path: '/dashboard/post',
    name: 'DashboardPosts',
    component: DashboardPosts,
      // adminPanel: Dashboard
    
    // children:[{
    //   path:'/dashboard/post',
    //   component:Dashboard
    // }]
    // children:{
    //   adminPanel:AdminPost
    // }


  },
  {
    path:'/dashboard/stats',
    name:DashboardStats,
    component:DashboardStats

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
