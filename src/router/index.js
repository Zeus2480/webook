import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterUserDetails from '../views/RegisterUserDetails.vue'
import RegisterDomain from '../views/RegisterDomain.vue'
import DashboardPosts from '../views/DashboardPosts.vue'
// import Dashboard from '../components/DashboardPost.vue'
// import AdminPost from '../components/DashboardPost.vue'
import DashboardStats from '../views/DashboardStats.vue'
import DashboardProfile from '../views/DashboardProfile.vue'
import EditProfile from "../views/EditProfile.vue"
import ViewBLog from "../views/Frontend/ViewBlog.vue"
import ViewAllBLogs from "../views/Frontend/ViewAllBLogs.vue"
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

  },
  {
    path:'/dashboard/profile',
    name:DashboardProfile,
    component:DashboardProfile

  },
  {
    path:'/dashboard/profile/edit',
    name:EditProfile,
    component:EditProfile
  },
  {
    path:'/view/:userId/',
    name:ViewAllBLogs,
    component:ViewAllBLogs,
    props:true
  },
  {
    path:'/view/:userId/:blogId',
    name:ViewBLog,
    component:ViewBLog,
    props:true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
