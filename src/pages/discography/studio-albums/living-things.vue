<template>
  <app-article>
    <under-construction-alert />
    <album :album="album" />
  </app-article>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { DiscographyAlbum } from '@/model/DiscographyAlbum';
import { Song } from '@/model/Song';
import cover from '@assets/studio-albums/living-things.webp';

@Component
class LivingThings extends Vue {
  get descripiton(): string {
    return this.$t('livingThings.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'Living Things', yearReleased: 2012, description: this.descripiton, cover: cover, url: 'https://linkinpedia.com/wiki/Living_Things', tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'Lost In The Echo', writers: 'Linkin Park', length: '3:25', url: 'https://www.youtube.com/embed/runQJVBO1GE' }),
      new Song({ name: 'In My Remains', writers: 'Linkin Park', length: '3:20', url: 'https://www.youtube.com/embed/5tkLkbe7WHM' }),
      new Song({ name: 'Burn It Down', writers: 'Linkin Park', length: '3:50', url: 'https://www.youtube.com/embed/vIOO_7DLr3M' }),
      new Song({ name: 'Lies Greed Misery', writers: 'Linkin Park', length: '2:26', url: 'https://www.youtube.com/embed/7nd3xzMOTAs' }),
      new Song({ name: 'I\'ll Be Gone', writers: 'Linkin Park', length: '3:31', url: 'https://www.youtube.com/embed/yTyi4ZBLC_I' }),
      new Song({ name: 'Castle Of Glass', writers: 'Linkin Park', length: '3:25', url: 'https://www.youtube.com/embed/x2umzqh8r4g' }),
      new Song({ name: 'Victimized', writers: 'Linkin Park', length: '1:46', url: 'https://www.youtube.com/embed/lrubJVJIJKQ' }),
      new Song({ name: 'Roads Untraveled', writers: 'Linkin Park', length: '3:49', url: 'https://www.youtube.com/embed/Nqh4Z8nfyDs' }),
      new Song({ name: 'Skin To Bone', writers: 'Linkin Park', length: '2:48', url: 'https://www.youtube.com/embed/IRL7Refc2oM' }),
      new Song({ name: 'Until It Breaks', writers: 'Linkin Park', length: '3:43', url: 'https://www.youtube.com/embed/08kc8XVNQt4' }),
      new Song({ name: 'Tinfoil', writers: 'Linkin Park', length: '1:11', url: 'https://www.youtube.com/embed/SGct4po3MmI' }),
      new Song({ name: 'Powerless', writers: 'Linkin Park', length: '3:44', url: 'https://www.youtube.com/embed/7Cc4UsvNFBU' }),
    ];
  }
}

export default toNative(LivingThings);
</script>

<style lang="scss">

</style>
