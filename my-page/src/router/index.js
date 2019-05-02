// 参考サイト
// https://rara-world.com/vue-cli-router-vuex/
// import MyHeader from './components/MyHeader.vue'
import MyTopPage from '@/components/MyTopPage.vue'
import SkillGraph from '@/components/SkillGraph.vue'
import About from '@/components/About.vue'



export const routes = [
  {path: '/about', component: About},
  {path: '/top', component: MyTopPage},
  {path: '/skill', component: SkillGraph},
  {path: '*', redirect: '/top'}, // "いずれにもマッチしないとtopに自動でリダイレクト"
]
