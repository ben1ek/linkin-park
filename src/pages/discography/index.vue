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
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { EnumRouteName } from '@/enum/EnumRouteName';
import { ImageTile } from "@/model/ImageTile";
import studioAlbums from '@assets/studio-albums.webp';
import liveAlbums from '@assets/live-albums.webp';
import singles from '@assets/singles.webp';
import lpu from '@assets/lpu.webp';
import others from '@assets/discography-others.webp';
import videos from '@assets/discography-videos.webp';

@Component
class Discography extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: studioAlbums, title: this.$t('discography.studioAlbums'), link: { name: EnumRouteName.STUDIO_ALBUMS } }),
      new ImageTile({ src: liveAlbums, title: this.$t('discography.liveAlbums') }),
      new ImageTile({ src: singles, title: this.$t('discography.singles') }),
      new ImageTile({ src: lpu, title: this.$t('discography.lpu') }),
      new ImageTile({ src: others, title: this.$t('discography.others') }),
      new ImageTile({ src: videos, title: this.$t('discography.videos') }),
    ]
  }
}

export default toNative(Discography);
</script>

<style lang="scss">
.discography {

}
</style>
