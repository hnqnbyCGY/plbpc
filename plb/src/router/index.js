import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/Details'
import Shop from '@/components/Shop'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/details/:id',
      name:'Details',
      component:Details
    }
    ,{
      path: '/shop',
      name:'Shop',
      component:Shop
    }
    ,{
      path: '/login',
      name:'Login',
      component:Login
    }
  ]
})
