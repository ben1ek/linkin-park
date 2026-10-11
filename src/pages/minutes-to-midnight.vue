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
import cover from '../assets/studio-albums/minutes-to-midnight.webp';

@Component
class MinutesToMidnight extends Vue {
  get descripiton(): string {
    return this.$t('minutesToMidnight.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'Minutes To Midnight', yearReleased: 2007, description: this.descripiton, cover: cover, tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'Wake', writers: 'Linkin Park', length: '1:41', url: 'https://www.youtube.com/embed/Gd8D42EsxNY' }),
      new Song({ name: 'Given Up', writers: 'Linkin Park', length: '3:09', url: 'https://www.youtube.com/embed/BstHvsCGmiA' }),
      new Song({ name: 'Leave Out All The Rest', writers: 'Linkin Park', length: '3:29', url: 'https://www.youtube.com/embed/fGuNOcmHj54' }),
      new Song({ name: 'Bleed It Out', writers: 'Linkin Park', length: '2:44', url: 'https://www.youtube.com/embed/PIidgyl8U9s' }),
      new Song({ name: 'Shadow Of The Day', writers: 'Linkin Park', length: '4:50', url: 'https://www.youtube.com/embed/opMFoF5r7-U' }),
      new Song({ name: 'What I\'ve Done', writers: 'Linkin Park', length: '3:26', url: 'https://www.youtube.com/embed/qu0k38VMaV4' }),
      new Song({ name: 'Hands Held High', writers: 'Linkin Park', length: '3:53', url: 'https://www.youtube.com/embed/2c8Rlke_k4g' }),
      new Song({ name: 'No More Sorrow', writers: 'Linkin Park', length: '3:42', url: 'https://www.youtube.com/embed/A9yY8mft608' }),
      new Song({ name: 'Valentine\'s Day', writers: 'Linkin Park', length: '3:17', url: 'https://www.youtube.com/embed/osOBnlQcLW4' }),
      new Song({ name: 'In Between', writers: 'Linkin Park', length: '3:17', url: 'https://www.youtube.com/embed/KltPqBVx2CI' }),
      new Song({ name: 'In Pieces', writers: 'Linkin Park', length: '3:38', url: 'https://www.youtube.com/embed/5Vu_um5sGQg' }),
      new Song({ name: 'The Little Things Give You Away', writers: 'Linkin Park', length: '6:24', url: 'https://www.youtube.com/embed/VreH8AQuuH8' }),
      new Song({ name: 'No Roads Left (Bonus Track)', writers: 'Linkin Park', length: '3:48', url: 'https://www.youtube.com/embed/d0MCvaBwFq0' }),
      new Song({ name: 'Across The Line (Bonus Track)', writers: 'Linkin Park', length: '3:10', url: 'https://www.youtube.com/embed/XEi44BbYfUw' }),
    ];
  }
}

export default toNative(MinutesToMidnight);
</script>

<style lang="scss">

</style>
