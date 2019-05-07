<template>
  <!-- <div class="skill-graph my_margin">
    <div class="bar bar1">{{ bar1 }}</div>
    <div class="bar bar2">{{ bar2 }}</div>
    <div class="bar bar3">{{ bar3 }}</div>
    <div class="bar bar4">{{ bar4 }}</div>
  </div> -->
  <v-container class="my_margin">
    <div class="headline"> プログラミング言語 </div>
    <!-- rowが横並び，columnにすれば縦並び．wrapを入れないと改行されない -->
    <v-layout row wrap mb-5>
    <v-flex xs12 sm6 md4 v-for="langData in langDatas" :key="langData.title" pa-3>
      <v-card class="black--text my_card_heght_size">
        <v-layout row align-center>
          <v-flex xs2 sm2 md2 px-2>
            <v-img
              class="icon_font_size"
              :src="`https://unpkg.com/simple-icons@latest/icons/${langData.icon}.svg`"
              >
            </v-img>
          </v-flex>
          <v-flex xs10 sm10 md10>
            <v-card-title class="headline">
              {{ langData.title }}
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
          <v-card-text>
            {{ langData.contents }}
          </v-card-text>
    </v-card>
    </v-flex>
    </v-layout>

    <div class="headline"> スキル </div>
    <!-- rowが横並び，columnにすれば縦並び．wrapを入れないと改行されない -->
    <v-layout row wrap>
    <v-flex xs12 sm6 md4 v-for="skillData in skillDatas" :key="skillData.title" pa-3>
      <v-card class="black--text my_card_heght_size2">
        <v-layout row align-center>
          <v-flex xs2 sm2 md2 px-2>
            <v-img
              class="icon_font_size"
              :src="`https://unpkg.com/simple-icons@latest/icons/${skillData.icon}.svg`"
              >
            </v-img>
          </v-flex>
          <v-flex xs10 sm10 md10>
            <v-card-title class="headline">
              {{ skillData.title }}
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
          <v-card-text>
            {{ skillData.contents }}
          </v-card-text>
    </v-card>
    </v-flex>
    </v-layout>

  </v-container>
</template>

<script>

export default {
  name: 'SkillGraph',
  data() {
    return {
      bar1: 'A 70%',
      bar2: 'B 30%',
      bar3: 'C 60%',
      bar4: 'D 50%',
      langDatas: [
        {
          title: 'Java',
          contents: '授業で習い，Android開発でも使用していました．',
          icon: 'java'
        },
        {
          title: 'Kotlin',
          contents: 'Android開発で使用しています．',
          icon: 'kotlin'
        },
        {
          title: 'Swift',
          contents: 'iOS開発で使用しています．',
          icon: 'swift'
        },
        {
          title: 'C，C++',
          contents: 'ETロボコンで使用しています．',
          icon: 'cplusplus'
        },
        {
          title: 'Python',
          contents: '授業で少しと，Pepper開発で使用していました．',
          icon: 'python'
        },
        {
          title: 'Ruby',
          contents: 'Twitter，FacebookのAPIを利用するためと，Android，iOS端末にプッシュ通知を送信するために使用しました．',
          icon: 'ruby'
        },
        {
          title: 'HTML，CSS',
          contents: 'このWebページを作成するために使用しました．',
          icon: 'html5'
        },
        {
          title: 'JavaScript',
          contents: 'このWebページを作成するために，Vue.jsを使用しました．',
          icon: 'javascript'
        },
        {
          title: 'PHP',
          contents: 'Android，iOS端末とサーバサイドの連携をするためのAPI開発で使用しました．',
          icon: 'php'
        },
        {
          title: 'SQL',
          contents: '授業で習いました．また，Android，iOS端末から受け取ったデータをDBに保存するために利用しました．授業ではMySQL，個人開発では，MariaDBを使用しました．',
          icon: 'mysql'
        },
      ],
      skillDatas: [
        {
          title: 'Android',
          contents: '友人がコーチをしているサッカークラブのアプリをチームで開発したり，研究室で開発していたアプリ開発の手伝いもしていました．',
          icon: 'android'
        },
        {
          title: 'iOS',
          contents: 'iPad上で動作するArduinoのシミュレータの開発をしています．XCTestを使ってテストコードも書いています．また，Travis CIを使ったCIもしています．また，CI時にjazzyを使って自動でドキュメントを生成し，GitHub Pagesに自動デプロイしています．',
          icon: 'xcode'
        },
        {
          title: 'CI',
          contents: 'Travis CIを使ってCIにも挑戦しています．このWebページもGitHubにプッシュすると自動でビルドし，GitHub Pagesに自動でデプロイしています．iOS開発では，Codecoveと連携した開発もしています．',
          icon: 'travisci'
        },
        {
          title: 'Git',
          contents: 'ソースコード管理では，GitHubを使用しています．',
          icon: 'git'
        },
        {
          title: 'Vue.js',
          contents: 'このWebページを開発するために使用しました．Vuetifyを使って開発しました．',
          icon: 'vue-dot-js'
        },
      ]
    }
  },
}
</script>

<style scoped>
.my_svg path{
  color: #fff;
  fill: currentColor;
}

.my_margin {
  margin-top: 80px;
  margin-bottom: 50px;
  max-width: 1200px;
  margin: auto;
}

/* 画面サイズが320pxからはここを読み込む */
@media screen and (min-width:320px) {
.my_card_heght_size {
  height: 15.5rem;
}
.my_card_heght_size2 {
  height: 19rem;
}
}


/* 画面サイズが768pxからはここを読み込む */
@media screen and (min-width:768px){
.my_card_heght_size {
  height: 15rem;
}
.my_card_heght_size2 {
  height: 17rem;
}

}




.icon_font_size {
  width: 3.5rem;
  height: 3.5rem;
  /* height="32" width="32" */
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



