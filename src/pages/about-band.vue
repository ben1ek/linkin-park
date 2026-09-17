<template>
  <main-layout class="aboutBand">
    <template v-slot:content>
      <app-article :header="$t('aboutBand.aboutBand')" :description="$t('aboutBand.description')">
        <under-construction-alert />
        <image-tiles-group :tiles="tiles" />
      </app-article>
    </template>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { ImageTile } from '@/model/ImageTile';

@Component
class AboutBand extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: '/src/assets/history.webp', title: this.$t('aboutBand.history') }),
      new ImageTile({ src: '/src/assets/members.webp', title: this.$t('aboutBand.members') }),
      new ImageTile({ src: '/src/assets/discography.webp', title: this.$t('aboutBand.discography'), link: '/discography' }),
    ]
  }
}

export default toNative(AboutBand);
</script>

<style lang="scss">

</style>
