import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Vuex)

import {routes} from './router/index'

const router =new VueRouter({
  routes
})
import {storage} from './store/index'

const store =new Vuex.Store(storage)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
