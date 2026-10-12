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
import cover from '../assets/studio-albums/one-more-light.webp';

@Component
class OneMoreLight extends Vue {
  get descripiton(): string {
    return this.$t('oneMoreLight.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'One More Light', yearReleased: 2017, description: this.descripiton, cover: cover, tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'Nobody Can Save Me', writers: 'Delson Bradford Philip, Green Jonathan Ian, Shinoda Michael Kenji', length: '3:45', url: 'https://www.youtube.com/embed/Dpe4FgGDmcA' }),
      new Song({ name: 'Good Goodbye (feat. Pusha T & Stormzy)', writers: 'Delson, Shatkin Jesse, Omari Michael, Shinoda, Thornton Terrance', length: '3:31', url: 'https://www.youtube.com/embed/LPrFRMIDNQ8' }),
      new Song({ name: 'Talking To Myself', writers: 'Delson, Juber Ilsey Anna, Rotem Jonathan Reuven, Shinoda', length: '3:51', url: 'https://www.youtube.com/embed/idkdKeXaC3M' }),
      new Song({ name: 'Battle Symphony', writers: 'Delson, Green, Shinoda', length: '3:36', url: 'https://www.youtube.com/embed/4XSyasr0w8k' }),
      new Song({ name: 'Invisible', writers: 'Parker Justin, Shinoda', length: '3:34', url: 'https://www.youtube.com/embed/GVvY_1PMTfs' }),
      new Song({ name: 'Heavy (feat. Kiiara)', writers: 'Bennington Chester Charles, Cavazos Carin Julia, Delson, Shinoda, Tranter Drew Justin', length: '2:49', url: 'https://www.youtube.com/embed/uEITghr7Rxg' }),
      new Song({ name: 'Sorry For Now', writers: 'Shinoda', length: '3:23', url: 'https://www.youtube.com/embed/T09cCJUzxGA' }),
      new Song({ name: 'Halfway Right', writers: 'Bennington, Delson, Golan Ross Jacob, Leary Michael Keenan, Shinoda', length: '3:37', url: 'https://www.youtube.com/embed/sffJsD_G6I4' }),
      new Song({ name: 'One More Light', writers: 'Shinoda, White Anthony Francis', length: '4:15', url: 'https://www.youtube.com/embed/H1LdQntDnFY' }),
      new Song({ name: 'Sharp Edges', writers: 'Delson, Juber, Shinoda', length: '2:58', url: 'https://www.youtube.com/embed/DEJp2UUip7U' }),
    ];
  }
}

export default toNative(OneMoreLight);
</script>

<style lang="scss">

</style>
