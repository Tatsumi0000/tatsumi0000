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
// import MyTopPage from './components/MyTopPage.vue'
// import SkillGraph from './components/SkillGraph.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MyTopPage,
    // SkillGraph,
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

<style>
* {
  margin: 0px;
  padding: 0px;
}

body {
  @font-face {
  font-family: YuGothicM;
  src: local("Yu Gothic Medium");
}
 
font-family:-apple-system,BlinkMacSystemFont, "Helvetica Neue" ,"游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN",メイリオ,Meiryo,sans-serif;
}


</style>

