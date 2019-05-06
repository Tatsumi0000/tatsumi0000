<template>
  <v-app>
    <MyHeader/>
    <v-content>
      <!-- <transition name="fade" mode="out-in"> -->
        <router-view></router-view>
      <!-- </transition> -->
      <MyFooter/>
      <!-- <my-footer  :key="my_footer"></my-footer> -->
    </v-content>
    
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
/*
 transitionの[name="○○"]で指定した○○とプリフィックスが一致しなければならない．
 例えば，
 .fadeA-enter-active, .fadeA-leave-active {
  transition-duration: 0.5s; 
  transition-timing-function: ease; 
}
なら[name=fadeA]としなければならない．
 */
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.5s; /* 変化の時間 */
  transition-timing-function: ease; /* 変化の進行割合を指定 easeは，開始と完了を滑らかにする */
}

.fade-enter, .fade-leave-to {
  opacity: 0; /* 透明度 */
}

* {
  margin: 0px;
  padding: 0px;
}

</style>

