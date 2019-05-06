import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'
import { routes } from './router/index.js'
import '@fortawesome/fontawesome-free/css/all.css'
import './stylus/main.styl'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'history', // urlに出てくる "#" を消す
  routes,
  // 画面遷移時に上に戻しつつ0.5秒後に遷移
  scrollBehavior(to, from, savedPosition) {
    let position = {x: 0, y: 0}
    if (savedPosition) {
      position = savedPosition
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position)
      }, 500)
    })
  }
})

// scrollBehavior (to, from, savedPosition) {
//   let position = { x: 0, y: 0 }
//   // Keep scroll position when using browser buttons
//   if (savedPosition) {
//     position = savedPosition
//   }

//   // Workaround for transitions scrolling to the top of the page
//   // However, there are still some problems being fixed by the vue team
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(position)
  //   }, 500)
  // })
// }

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
