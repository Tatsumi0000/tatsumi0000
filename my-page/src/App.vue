<template>
  <v-app>
    <MyHeader/>
    <!-- <v-container fluid class="my_margin">
      <router-view></router-view>
    </v-container> -->
    <v-content>
      <router-view></router-view>
    </v-content>
            
    <MyFooter/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyTopPage from './components/MyTopPage.vue'
// import SkillGraph from './components/SkillGraph.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MyTopPage,
    // SkillGraph,
    MyHeader,
    MyFooter
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

<style scoped>
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

