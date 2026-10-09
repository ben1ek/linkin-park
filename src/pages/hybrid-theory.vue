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
    return 'Hybrid Theory is Linkin Park\'s debut album, released on October 24, 2000 through Warner Bros. Records. Four successful singles were spawned from Hybrid Theory: "One Step Closer", "Crawling", "Papercut", "In The End", but tracks such as "Points Of Authority", "Pushing Me Away", and "My December" were also sent to radio stations for airplay despite not being officially released as singles. The album only peaked at #2 on the Billboard 200, but it would go on to become the best selling debut album of the 21st century.';
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'Hybrid Theory', yearReleased: 2000, description: this.descripiton, cover: cover, tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
      return [
        new Song({ name: 'Papercut', writers: 'Bennington Chester Charles, Bourdon Robert G, Delson Brad, Hahn Joseph, Shinoda Mike', lenght: '3:04', url: 'https://youtu.be/84J_XmGkX48?si=cnVfkolh0c0JWcWg' }),
        new Song({ name: 'One Step Closer', writers: 'Bennington, Bourdon, Delson, Hahn, Shinoda', lenght: '2:35', url: 'https://youtu.be/KwN_f0fTHoE?si=8jhNn7Nng1tRs58F' }),
        new Song({ name: 'With You', writers: '	Bennington, Bourdon, Delson, Hahn, King John Robert, Shinoda, Simpson Michael', lenght: '3:23', url: 'https://youtu.be/lF4AQzguAR8?si=MWvip1YwyaQoMrVc' }),
      ]
  }
}

export default toNative(HybridTheory);
</script>

<style lang="scss">

</style>
