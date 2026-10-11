<template>
  <main-layout class="studioAlbum">
    <template v-slot:content>
      <app-article>
        <under-construction-alert />
        <album :album="album" />
      </app-article>
    </template>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { DiscographyAlbum } from '../model/DiscographyAlbum';
import { Song } from '@/model/Song';
import cover from '../assets/studio-albums/hybrid-theroy.webp';

@Component
class HybridTheory extends Vue {
  get descripiton(): string {
    return this.$t('hybridTheory.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'Hybrid Theory', yearReleased: 2000, description: this.descripiton, cover: cover, tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
      return [
        new Song({ name: 'Papercut', writers: 'Bennington Chester Charles, Bourdon Robert G, Delson Brad, Hahn Joseph, Shinoda Mike', length: '3:04', url: 'https://www.youtube.com/embed/84J_XmGkX48' }),
        new Song({ name: 'One Step Closer', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '2:35', url: 'https://www.youtube.com/embed/KwN_f0fTHoE' }),
        new Song({ name: 'With You', writers: 'Bennington, Bourdon, Delson, Hahn, King John Robert, Shinoda, Simpson Michael', length: '3:23', url: 'https://www.youtube.com/embed/lF4AQzguAR8' }),
        new Song({ name: 'Points Of Authority', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '3:20', url: 'https://www.youtube.com/embed/TV5vfYOiwYU' }),
        new Song({ name: 'Crawling', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '3:29', url: 'https://www.youtube.com/embed/I6NU3kWqnDE' }),
        new Song({ name: 'Runaway', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda, Wakefield Mark', length: '3:03', url: 'https://www.youtube.com/embed/xMyS6c2PeXU' }),
        new Song({ name: 'By Myself', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '3:09', url: 'https://www.youtube.com/embed/E0oMYDDArhk' }),
        new Song({ name: 'In The End', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '3:36', url: 'https://www.youtube.com/embed/BLZWkjBXfN8' }),
        new Song({ name: 'A Place For My Head', writers: 'Bennington, Bourdon, Delson, Farrell David Michael, Hahn, Shinoda, Wakefield', length: '3:04', url: 'https://www.youtube.com/embed/Th-VIM6_GSc' }),
        new Song({ name: 'Forgotten', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda, Wakefield', length: '3:14', url: 'https://www.youtube.com/embed/9AB6Vo739UU' }),
        new Song({ name: 'Cure For The Itch', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '2:37', url: 'https://www.youtube.com/embed/WZQz2oxy-V8' }),
        new Song({ name: 'Pushing Me Away', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', length: '3:11', url: 'https://www.youtube.com/embed/QyWR34MpMiE' }),
        new Song({ name: 'My December (Bonus Track)', writers: 'Shinoda', length: '4:19', url: 'https://www.youtube.com/embed/Cfip9nnV8eE' }),
        new Song({ name: 'High Voltage (Bonus Track)', writers: 'Bennington, Delson, Hahn, Shinoda', length: '3:44', url: 'https://www.youtube.com/embed/nsGY6BJkxmQ' }),
      ];
  }
}

export default toNative(HybridTheory);
</script>

<style lang="scss">

</style>
