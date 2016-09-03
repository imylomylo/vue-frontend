import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue(Vue.util.extend({ router}, App)).$mount('#app')
