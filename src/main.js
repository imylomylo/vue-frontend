import Vue from 'vue'
import router from './router'
import App from './App.vue'

// Vue modules
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate';

Vue.use(VueResource)
Vue.use(VeeValidate)

new Vue(Vue.util.extend({ router}, App)).$mount('#app')