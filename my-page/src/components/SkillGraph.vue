<template>
    <div class="skill-graph my_margin">
    <div class="bar bar1">{{ bar1 }}</div>
    <div class="bar bar2">{{ bar2 }}</div>
    <div class="bar bar3">{{ bar3 }}</div>
    <div class="bar bar4">{{ bar4 }}</div>
  </div>
</template>

<script>

export default {
  name: 'SkillGraph',
  data() {
    return {
      bar1: 'A 70%',
      bar2: 'B 30%',
      bar3: 'C 60%',
      bar4: 'D 50%'
    }
  },
}
</script>

<style scoped>
.my_margin {
  margin-top: 80px;
  margin-bottom: 50px;
}

.bar {
  white-space: nowrap; /* 文字を折り返さない */
  text-align: left;
  max-width: 100vw;
  width: 100%;
  margin: 1em; /* 1emとは，フォントの高さを1とする */
  color: white;
  padding: 0.25em;
  animation: bar-animation 1 3s;
  /* transition-duration: 2s; */
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.bar1{
  max-width: 70%; /* MAXの値 */
  background: #0091EA;
}
.bar2{
  max-width: 30%;
  background: rgb(234, 0, 0);
}
.bar3{
  max-width: 60%;
  background: rgb(133, 234, 0);
}
.bar4{
  max-width: 50%;
  background: rgb(234, 0, 144);
}

@keyframes bar-animation{
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}

.my_margin {
  margin-top: 20px;
  margin-bottom: 60px;
}

/* 画面サイズが360pxからはここを読み込む */
@media screen and (min-width:360px) { 

.my_margin {
  margin-top: 20px;
  margin-bottom: 60px;
}
}

/* 画面サイズが768pxから1024pxまではここを読み込む */
@media screen and (min-width:768px) and (max-width:1024px) {

.my_margin {
  margin-top: 20px;
  margin-bottom: 60px;
}
}
/* 画面サイズが1024pxからはここを読み込む */
@media screen and (min-width:1024px) {

.my_margin {
  margin-top: 20px;
  margin-bottom: 60px;
}
}
</style>



