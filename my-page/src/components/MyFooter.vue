<template>
<div class="my_margin">
<v-footer dark >
  <v-card flat tile class="primary white--text text-xs-center flex">
    <v-card-text>
      <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-3 white--text"
      :href="icon.url"
      target="_blank"
      icon
      >
        <v-icon size="24px">{{ icon.title }}</v-icon>
      </v-btn>
    </v-card-text>
   
    <v-divider></v-divider>
    <v-card-text class="white--text">
      &copy;{{ new Date().getFullYear() }}
      <a href="https://github.com/Tatsumi0000/tatsumi0000" target="_black" class="white--text">
        Tatsumi0000
      </a>
    </v-card-text>
  </v-card>
  </v-footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {title: 'fab fa-facebook', url: 'https://www.facebook.com/tatsumi.nishida.90'},
        {title: 'fab fa-twitter', url: 'https://twitter.com/raisondetre137'},
        {title: 'fab fa-github', url: 'https://github.com/Tatsumi0000'},
      ]
    }
  }
}
</script>

<style scoped>
.my_margin {
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>

