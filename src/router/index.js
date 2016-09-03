import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from '../auth'

// Components
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

function requireAuth (route, redirect, next) {
  if (!auth.loggedIn()) {
    redirect({
      path: '/login',
      query: { redirect: route.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Dashboard, beforeEnter: requireAuth }
  ]
})

export default router
