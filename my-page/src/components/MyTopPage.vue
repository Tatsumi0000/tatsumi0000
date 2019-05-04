<template>
  <div class="my-top-page">
    <transition appear>
        <h1> {{ title }} </h1>
    </transition>
    <vue-particles
        color="#808080"
        :linesWidth="3"
        :clickEffect="false"
        :hoverEffect="false"
        />
  </div>
  
</template>

<script>
// import Bubbly from 'bubbly-bg'
// Vue.use(Bubbly)

export default {
  // コンポーネントの名前
  // name: 'MyTopPage',
  data() {
    return {
      title: 'Tatsumi0000\'s Page'
    }
  },
  // "methos"の中にメソッドを記述
  methods: {
    // bubbly: function () {
    //   return bubbly();
    // }
  },
}
</script>

<style scoped>
/* particlesのサイズをトップページと同じにする */
#particles-js {
  width: 100vw;
  height: 100vh;
}

.my-top-page {
  position: relative;
  width: 100vw; /* viewport width ビューポートの幅に対する割合 */
  height: 100vh; /* viewport height ビューポートの高さに対する割合 */
  background: rgba(0, 255, 200, 0.5);
  
/* text-align: center; */
}

.my-top-page h1 {
  font-size: 40px;
  position: absolute;
  top: 300px;
  left: 50%;
  transform : translate(-50%,-50%);
  color:gray;
  text-align: center;
   }

/* https://sole-color-blog.com/blog/71/  */
/* 画面サイズが480pxからはここを読み込む */
@media screen and (min-width:360px) { 

.my-top-page h1 {
  position: absolute;
  top: 300px;
  left: 50%;
  transform : translate(-50%,-50%);
  font-size: 50px;
  color:gray;
  text-align: center;
   }
}

/* 画面サイズが768pxから1024pxまではここを読み込む */
@media screen and (min-width:768px) and (max-width:1024px) {

.my-top-page h1 {
  position: absolute;
  top: 300px;
  left: 50%;
  transform : translate(-50%,-50%);
   font-size: 60px;
   color:gray;
   text-align: center;
   }
}
/* 画面サイズが1024pxからはここを読み込む */
@media screen and (min-width:1024px) {

.my-top-page h1 {
  font-size: 60px;
  position: absolute;
  top: 300px;
  left: 50%;
  transform : translate(-50%, -50%);
  /* margin: auto; */
  color:gray;
  text-align: center;
   }
}

/* .v-leaveは削除されるとき */
/* .v-enterは挿入されるとき */
.v-enter-to {
  /* 2秒かける */
  transition: 2s;
}

.v-enter {
/* 透明度を0 */
  opacity: 0;
}



</style>

