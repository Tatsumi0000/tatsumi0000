<template>
<!-- <v-app> -->
  <div>
    
  <v-navigation-drawer
  enable-resize-watcher
  app
  dark
  fixed
  clipped="clipped"
  class="primary"
  v-model="drawer">
   
    <v-list class="pt-0">
      <v-list-tile
      v-for="item in items"
      :key="item.title"
      :to="item.path"
      active-class="primary darken-1"
      @click.stop=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </v-navigation-drawer>

<v-toolbar
app
fixed
dark
clipped-left="clipped"
class="primary"
>
  <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
  <v-toolbar-title>{{ title }}</v-toolbar-title>
  <v-spacer/>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn
    flat
    v-for="item in items"
    v-bind:key="item.title"
    :to="item.path"
    active-class="primary darken-1">
      {{ item.title }}
    </v-btn>
  </v-toolbar-items>
</v-toolbar>

</div>

</template>

<script>

export default {
  data() {
    return {
      title: 'Title',
      drawer: false,
      clipped: false,
      items: [
        { title: 'Top', icon: 'filter_vintage', path: 'top' },
        { title: 'About', icon: 'person', path: 'about' },
        { title: 'Skill', icon: 'info', path: 'skill' },
        { title: 'Link', icon: 'sentiment_satisfied_alt', path: 'link' }
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

/* * {
  margin-bottom: 10px;
  margin: 0px;
} */

</style>

