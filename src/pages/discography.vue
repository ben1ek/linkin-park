<template>
  <main-layout class="discography">
    <template v-slot:content>
      <app-article :header="$t('discography.discography')" :description="$t('discography.description')">
        <under-construction-alert />
        <image-tiles-group :tiles="tiles" />
      </app-article>
    </template>
  </main-layout>
</template>

<script lang="ts">
import { ImageTile } from "../model/ImageTile";
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component
class Discography extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: '/src/assets/studio-albums.webp', title: this.$t('discography.studioAlbums'), link: '/studio-albums' }),
      new ImageTile({ src: '/src/assets/live-albums.webp', title: this.$t('discography.liveAlbums') }),
      new ImageTile({ src: '/src/assets/singles.webp', title: this.$t('discography.singles') }),
      new ImageTile({ src: '/src/assets/lpu.webp', title: this.$t('discography.lpu') }),
      new ImageTile({ src: '/src/assets/discography-others.webp', title: this.$t('discography.others') }),
      new ImageTile({ src: '/src/assets/discography-videos.webp', title: this.$t('discography.videos') }),
    ]
  }
}

export default toNative(Discography);
</script>

<style lang="scss">
.discography {

}
</style>
