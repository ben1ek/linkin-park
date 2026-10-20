<template>
  <v-app>
    <v-app-bar flat absolute :height="270">
      <nav-bar />
    </v-app-bar>
    <v-main :max-width="1280" width="100%" class="mx-auto px-5">
      <main-layout>
        <template v-slot:content>
          <router-view />
        </template>
        <template v-slot:sidebar>
          <side-bar />
        </template>
      </main-layout>
    </v-main>
    <v-footer app height="50">
      <site-footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import '@/styles/main.scss';

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
  #app {
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(0deg, rgba(15,0,36,1) 0%, rgba(8,1,28,1) 100%);
    .v-application, .v-app-bar.v-toolbar {
      background: transparent;
    }
  }
</style>
