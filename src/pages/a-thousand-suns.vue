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
import cover from '../assets/studio-albums/a-thousand-suns.webp';

@Component
class AThousandSuns extends Vue {
  get descripiton(): string {
    return this.$t('aThousandSuns.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'A Thousand Suns', yearReleased: 2010, description: this.descripiton, cover: cover, tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'The Requiem', writers: 'Linkin Park', length: '2:01', url: 'https://www.youtube.com/embed/YwPunX_3s6M' }),
      new Song({ name: 'The Radiance', writers: 'Linkin Park', length: '0:57', url: 'https://www.youtube.com/embed/FzLsOESp7NY' }),
      new Song({ name: 'Burning In The Skies', writers: 'Linkin Park', length: '4:13', url: 'https://www.youtube.com/embed/cPtrHOBNOKA' }),
      new Song({ name: 'Empty Spaces', writers: 'Linkin Park', length: '0:18', url: 'https://www.youtube.com/embed/dNY1yaccjic' }),
      new Song({ name: 'When They Come For Me', writers: 'Linkin Park', length: '4:55', url: 'https://www.youtube.com/embed/UNG_b9x6Bs8' }),
      new Song({ name: 'Robot Boy', writers: 'Linkin Park', length: '4:28', url: 'https://www.youtube.com/embed/L4zloAkucgY' }),
      new Song({ name: 'Jornada Del Muerto', writers: 'Linkin Park', length: '1:34', url: 'https://www.youtube.com/embed/3dMZd0Qgj3E' }),
      new Song({ name: 'Waiting For The End', writers: 'Linkin Park', length: '3:51', url: 'https://www.youtube.com/embed/9pEBaXlWqWE' }),
      new Song({ name: 'Blackout', writers: 'Linkin Park', length: '4:39', url: 'https://www.youtube.com/embed/Bi5yahiQbnw' }),
      new Song({ name: 'Wretches And Kings', writers: 'Linkin Park', length: '4:15', url: 'https://www.youtube.com/embed/7x53ET3X5ys' }),
      new Song({ name: 'Wisdom, Justice, And Love', writers: 'Linkin Park', length: '1:38', url: 'https://www.youtube.com/embed/Ei3h0P_miDU' }),
      new Song({ name: 'Iridescent', writers: 'Linkin Park', length: '4:56', url: 'https://www.youtube.com/embed/J_qAYBp6AEM' }),
      new Song({ name: 'Fallout', writers: 'Linkin Park', length: '1:23', url: 'https://www.youtube.com/embed/-kHD7u4oTzs' }),
      new Song({ name: 'The Catalyst', writers: 'Linkin Park', length: '5:39', url: 'https://www.youtube.com/embed/tfm8c7-yNjk' }),
      new Song({ name: 'The Messenger', writers: 'Linkin Park', length: '3:01', url: 'https://www.youtube.com/embed/mbzqubjthgM' }),
      new Song({ name: 'Blackbirds (Bonus Track)', writers: 'Linkin Park', length: '3:21', url: 'https://www.youtube.com/embed/b30hgljtBu8' }),
    ];
  }
}

export default toNative(AThousandSuns);
</script>

<style lang="scss">

</style>
