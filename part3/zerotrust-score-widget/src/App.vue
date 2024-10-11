<template>
  <v-app>
    <v-main>
      <ZeroTrustScoreWidget />
    </v-main>
  </v-app>
</template>

<script>
import ZeroTrustScoreWidget from './components/ZeroTrustScoreWidget.vue';

export default {
  name: 'App',

  components: {
    ZeroTrustScoreWidget,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
</style>
