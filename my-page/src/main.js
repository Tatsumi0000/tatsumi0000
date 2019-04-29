import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Bubbly from 'bubbly-bg'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(Bubbly)
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
}).$mount('#app')
