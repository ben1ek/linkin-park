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
import cover from '@/assets/studio-albums/meteora.webp';

@Component
class Meteora extends Vue {
  get descripiton(): string {
    return this.$t('meteora.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'Meteora', yearReleased: 2003, description: this.descripiton, cover: cover, url: 'https://linkinpedia.com/wiki/Meteora', tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'Foreword', writers: 'Linkin Park', length: '0:13', url: 'https://www.youtube.com/embed/Ccvqxa8vMGQ' }),
      new Song({ name: 'Don\'t Stay', writers: 'Linkin Park', length: '3:08', url: 'https://www.youtube.com/embed/O1WAuqn9t0o' }),
      new Song({ name: 'Somewhere I Belong', writers: 'Linkin Park', length: '3:34', url: 'https://www.youtube.com/embed/-YQ8IbVIwPM' }),
      new Song({ name: 'Lying From You', writers: 'Linkin Park', length: '2:55', url: 'https://www.youtube.com/embed/zbUcO3J3UYE' }),
      new Song({ name: 'Hit The Floor', writers: 'Linkin Park', length: '2:44', url: 'https://www.youtube.com/embed/Ablk0NUR1kU' }),
      new Song({ name: 'Easier To Run', writers: 'Linkin Park', length: '3:24', url: 'https://www.youtube.com/embed/M3nlvAb8Kc8' }),
      new Song({ name: 'Faint', writers: 'Linkin Park', length: '2:42', url: 'https://www.youtube.com/embed/yOW7Eh81Gto' }),
      new Song({ name: 'Figure.09', writers: 'Linkin Park', length: '3:17', url: 'https://www.youtube.com/embed/rKdgl8OUKpk' }),
      new Song({ name: 'Breaking The Habit', writers: 'Linkin Park', length: '3:16', url: 'https://www.youtube.com/embed/_e7bqZGPyFI' }),
      new Song({ name: 'From The Inside', writers: 'Linkin Park', length: '2:55', url: 'https://www.youtube.com/embed/CLTW-9nFZIA' }),
      new Song({ name: 'Nobody\'s Listening', writers: 'Linkin Park', length: '2:59', url: 'https://www.youtube.com/embed/ek3TR-g2at0' }),
      new Song({ name: 'Session', writers: 'Linkin Park', length: '2:24', url: 'https://www.youtube.com/embed/rL_q2fBNSnQ' }),
      new Song({ name: 'Numb', writers: 'Linkin Park', length: '3:07', url: 'https://www.youtube.com/embed/u-IcadiJCrE' }),
    ];
  }
}

export default toNative(Meteora);
</script>

<style lang="scss">

</style>
