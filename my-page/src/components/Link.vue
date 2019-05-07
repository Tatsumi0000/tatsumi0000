<template>
<div class="my_margin">
  <v-container pa-1 text-xs-center>
    <v-layout>
      <v-flex class="display-1">
        工事中
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: '', url: ''},
        {title: '', url: ''},
        {title: '', url: ''},
        {title: '', url: ''},
      ]
    }
  },
}
</script>

<style scoped>
.my_margin {
  margin-top: 20px;
  margin-bottom: 60px;
}

.my_margin h1 {
  text-align: center;
}

</style>

