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
import { DiscographyAlbum } from '@/model/DiscographyAlbum';
import { Song } from '@/model/Song';
import cover from '@/assets/studio-albums/the-hunting-party.webp';

@Component
class TheHuntingParty extends Vue {
  get descripiton(): string {
    return this.$t('theHuntingParty.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'The Hunting Party', yearReleased: 2014, description: this.descripiton, cover: cover, url: 'https://linkinpedia.com/wiki/The_Hunting_Party', tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'Keys To The Kingdom', writers: 'Bennington Chester Charles, Bourdon Robert G, Delson Bradford Philip, Farrell David Michael, Hahn Joseph, Shinoda Michael Kenji', length: '3:38', url: 'https://www.youtube.com/embed/f5gStEj_CYA' }),
      new Song({ name: 'All For Nothing (feat. Page Hamilton)', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '3:33', url: 'https://www.youtube.com/embed/ziPbJuz_mpE' }),
      new Song({ name: 'Guilty All The Same (feat. Rakim)', writers: 'Bennington, Bourdon, Delson, Farrell, Griffin William, Hahn, Shinoda', length: '5:55', url: 'https://www.youtube.com/embed/doMrZzGfWJI' }),
      new Song({ name: 'The Summoning', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '1:00', url: 'https://www.youtube.com/embed/0l163sF_Pco' }),
      new Song({ name: 'War', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '2:11', url: 'https://www.youtube.com/embed/cdJjH0ssyoY' }),
      new Song({ name: 'Wastelands', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '3:15', url: 'https://www.youtube.com/embed/Fnv2JHuO6oE' }),
      new Song({ name: 'Until It\'s Gone', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '3:53', url: 'https://www.youtube.com/embed/apiwJjSGwUY' }),
      new Song({ name: 'Rebellion (feat. Daron Malakian)', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Malakian Daron V, Shinoda', length: '3:44', url: 'https://www.youtube.com/embed/gflo-hYPcEY' }),
      new Song({ name: 'Mark The Graves', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '5:05', url: 'https://www.youtube.com/embed/zcuOGIxr6Kc' }),
      new Song({ name: 'Drawbar (feat. Tom Morello)', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '2:46', url: 'https://www.youtube.com/embed/PSydPTF4_nY' }),
      new Song({ name: 'Final Masquerade', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Haynie Emile, Shinoda', length: '3:37', url: 'https://www.youtube.com/embed/fCjf-zm4vbo' }),
      new Song({ name: 'A Line In The Sand', writers: 'Bennington, Bourdon, Delson, Farrell, Hahn, Shinoda', length: '6:35', url: 'https://www.youtube.com/embed/R3-3OzhYyJU' }),
    ];
  }
}

export default toNative(TheHuntingParty);
</script>

<style lang="scss">

</style>
