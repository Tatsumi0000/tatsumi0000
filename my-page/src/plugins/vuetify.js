import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

// Vuetifyのテーマカラー設定
Vue.use(Vuetify, {
  theme: {
    primary: '#f44336',
    secondary: '#e91e63',
    accent: '#00bcd4',
    error: '#ff5722',
    warning: '#ffc107',
    info: '#3f51b5',
    success: '#4caf50'
    }
});

Vue.use(Vuetify, {
  iconfont: 'md',
})
