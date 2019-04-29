<template>

  <span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{item.title}}
              </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
        <v-toolbar app color="brown darken-4" dark>
          <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
          <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
        </v-toolbar>
    </span>


</template>

<script>
export default {
  data() {
    return {
      title: 'Title',
      drawer: false,
      items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ],
      toolbar: {
        fixed: true,
        color: "rgb(0,0,255)"
      }
    }
  },
}
</script>


<style scoped>
/* scopedをつけるとこのcss内でのみ適用される */
v-toolbar {
  color: #000;
}
</style>

