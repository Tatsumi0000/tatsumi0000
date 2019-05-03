<template>
  <v-timeline
  class="timeline"
  dense>
    <v-timeline-item
      v-for="(history, i) in historys"
      :key="i"
      :color="history.color"
      :icon="history.icon"
      fill-dot
    >
       <!-- <template v-slot:opposite>
        <span>Tus eu perfecto</span>
      </template> -->
      <v-card :color="history.color" class="white--text">
        <v-card-text>
          {{ history.date }}
        </v-card-text>
        <v-card-title class="headline">
          {{ history.contents }}
        </v-card-title>

        <v-btn
        v-for="(link, i) in history.links"
        :key="i"
        class="white--text text_small" flat
        :href="link.url"
        target="_blank"
        
        border>
            {{ link.title }}
        </v-btn>

      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      historys: [
        {
          date: '2014-4', contents: '九州産業大学情報科学部情報科学科 入学',
          color: 'red', icon: 'school',
          links:
            [
              {
            title: '九州産業大学', url: 'https://www.kyusan-u.ac.jp/'
            },
            {
            title: '理工学部', url: 'http://welcome.is.kyusan-u.ac.jp/'
            }
          ],
        },
        {
          date: '2017-9', contents: 'enPiT2 Emb サマースクール参加',
          color: 'blue', icon: 'star',
          links:
            [
              {
            title: 'enPiT2 Emb', url: 'http://emb.enpit.jp/enpit2/'
            }
          ],
        },
        {
          date: '2018-3', contents: '九州産業大学情報科学部情報科学科 卒業',
          color: 'cyan', icon: 'school',
        },
        {
          date: '2018-4', contents: '宮崎大学大学院工学研究科工学専攻 入学',
          color: 'teal', icon: 'school',links:
            [
              {
            title: '宮崎大学', url: 'http://www.miyazaki-u.ac.jp/'
            },
            {
            title: '工学研究科', url: 'http://www.miyazaki-u.ac.jp/tech/departments/master.html'
            },
            {
              title: '片山(徹)研', url: 'http://earth.cs.miyazaki-u.ac.jp/'
            }
          ],
        },
      ],
    }
  },
  // "methos"の中にメソッドを記述
  methods: {
    // 新規ウィンドウで開く関数
    // openLink: function (link) {
    //   window.open(link);
    // }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.text_small {
  text-transform: none;
}

.timeline {
  margin-left: 10px;
  margin-right: 10px;
}

/* 画面サイズが480pxからはここを読み込む */
@media screen and (min-width:360px) {
.timeline {
  margin-left: 20px;
  margin-right: 20px;
}

}
/* 画面サイズが768pxから1024pxまではここを読み込む */
@media screen and (min-width:768px) and (max-width:1024px) {
.timeline {
  margin-left: 40px;
  margin-right: 40px;
}
}

/* 画面サイズが1024pxからはここを読み込む */
@media screen and (min-width:1024px) {
  .timeline {
  margin-left: 20%;
  margin-right: 20%;
}
}

</style>

