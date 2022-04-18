import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterUserDetails from '../views/RegisterUserDetails.vue'

import DashboardPosts from '../views/DashboardPosts.vue'
// import Dashboard from '../components/DashboardPost.vue'
// import AdminPost from '../components/DashboardPost.vue'
import DashboardStats from '../views/DashboardStats.vue'
import DashboardProfile from '../views/DashboardProfile.vue'
import DashboardComments from "../views/DashboardComments.vue"
import EditProfile from "../views/EditProfile.vue"
import ViewBLog from "../views/Frontend/ViewBlog.vue"
import ViewAllBLogs from "../views/Frontend/ViewAllBLogs.vue"
import TagsPage from "../views/Frontend/TagsPage.vue"
import LoginPage from "../views/LoginPage.vue"
import CreatePost from "../views/CreatePost.vue"
import EditPost from "../views/EditPost.vue"
import RegisterReader from "../views/Frontend/RegisterReader.vue"
import LoginReader from "../views/Frontend/LoginReader.vue"
import SearchPage from "../views/Frontend/SearchPage.vue"
import NotFound from "../views/PageNotFound.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'

  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/login-reader',
    name: 'LoginReader',
    component: LoginReader
  },
  {
    path: '/register-userdetails',
    name: 'RegisterUserDetails',
    component: RegisterUserDetails,
    props:true
  },
  {
    path: '/register-reader',
    name: 'RegisterReader',
    component: RegisterReader,
    props:true
  },
  
  {
    path: '/dashboard/post',
    name: 'DashboardPosts',
    component: DashboardPosts,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }

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
    path:'/dashboard/create-post',
    name:CreatePost,
    component:CreatePost,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path:'/dashboard/edit-post/:postId',
    name:EditPost,
    component:EditPost,
    props:true,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path:'/dashboard/stats',
    name:DashboardStats,
    component:DashboardStats,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path:'/dashboard/profile',
    name:DashboardProfile,
    component:DashboardProfile,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path:'/dashboard/comments',
    name:DashboardComments,
    component:DashboardComments,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }

  },
  {
    path:'/view/:userId/search/:searchTerm',
    name:SearchPage,
    component:SearchPage,
    props:true
  },

  {
    path:'/dashboard/profile/edit',
    name:EditProfile,
    component:EditProfile
  },
  {
    path:'/view/:userId',
    name:ViewAllBLogs,
    component:ViewAllBLogs,
    props:true
  },
  {
    path:'/view/:userId/:blogId',
    name:ViewBLog,
    component:ViewBLog,
    props:true
  },
  {
    path:'/view/:userId/tags/:tagName',
    name:TagsPage,
    component:TagsPage,
    props:true
  },
  {
    path:'*',
    component:NotFound
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
