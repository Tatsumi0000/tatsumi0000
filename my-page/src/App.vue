<template>
  <v-app>
    <MyHeader/>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyTopPage from './components/MyTopPage.vue'
import SkillGraph from './components/SkillGraph.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyTopPage,
    SkillGraph,
    MyHeader
  },
  data () {
    return {
      
      methods: {
      //
      },
    }
  }
}
</script>
