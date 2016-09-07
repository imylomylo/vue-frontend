import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Auth from '../auth'

// Components
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Charts from '../components/Charts.vue'

function requireAuth (route, redirect, next) {
  if (!Auth.check()) {
    redirect({
      path: '/login',
      query: { redirect: route.fullPath }
    })
  } else {
    next()
  }
}

function onlyGuest (route, redirect, next) {
  if (Auth.check()) {
    redirect({ path: '/' })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      component: Login,
      beforeEnter: onlyGuest
    },
    {
      path: '/',
      component: Dashboard,
      beforeEnter: requireAuth,
      children: [
        { path: '', component: Charts}
      ]
    }
  ]
})

export default router
