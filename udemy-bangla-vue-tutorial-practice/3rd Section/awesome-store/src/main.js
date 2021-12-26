import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
import VueRouter from 'vue-router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

import {routes} from './router/index'

const router =new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
