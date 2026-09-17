<template>
  <main-layout class="studioAlbums">
    <template v-slot:content>
      <app-article :header="$t('discography.discography')" :description="$t('discography.description')">
        <under-construction-alert />
        <image-tiles-group :tiles="tiles" image-aspect-ratio="1/1" image-height="auto"/>
      </app-article>
    </template>
  </main-layout>
</template>

<script lang="ts">
import { ImageTile } from "../model/ImageTile";
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component
class StudioAlbums extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: '/src/assets/studio-albums/hybrid-theroy.webp', title: 'Hybrid Theory', description: '2000'}),
      new ImageTile({ src: '/src/assets/studio-albums/meteora.webp', title: 'Meteora', description: '2003'}),
      new ImageTile({ src: '/src/assets/studio-albums/minutes-to-midnight.webp', title: 'Minutes To Midnight', description: '2007'}),
      new ImageTile({ src: '/src/assets/studio-albums/a-thousand-suns.webp', title: 'A Thousand Suns', description: '2010'}),
      new ImageTile({ src: '/src/assets/studio-albums/living-things.webp', title: 'Living Things', description: '2012'}),
      new ImageTile({ src: '/src/assets/studio-albums/the-hunting-party.webp', title: 'The Hunting Party', description: '2014'}),
      new ImageTile({ src: '/src/assets/studio-albums/one-more-light.webp', title: 'One More Light', description: '2017'}),
      new ImageTile({ src: '/src/assets/studio-albums/from-zero.webp', title: 'From Zero', description: '2024'}),
    ]
  }
}

export default toNative(StudioAlbums);
</script>

<style lang="scss">
.studioAlbums {

}
</style>
