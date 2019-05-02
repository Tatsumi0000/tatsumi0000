import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'
import { routes } from './router/index.js'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history', // urlに出てくる "#" を消す
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
