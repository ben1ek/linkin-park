@assets/<template>
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
import cover from '@assets//studio-albums/from-zero.webp';

@Component
class FromZero extends Vue {
  get descripiton(): string {
    return this.$t('fromZero.description');
  }

  get album(): DiscographyAlbum {
    return new DiscographyAlbum({ name: 'From Zero', yearReleased: 2024, description: this.descripiton, cover: cover, url: 'https://linkinpedia.com/wiki/From_Zero', tracklist: this.tracklist });
  }

  get tracklist(): Song[] {
    return [
      new Song({ name: 'From Zero (Intro)', writers: 'Linkin Park', length: '0:22', url: 'https://www.youtube.com/embed/y26UaUlvBws' }),
      new Song({ name: 'The Emptiness Machine', writers: 'Linkin Park', length: '3:10', url: 'https://www.youtube.com/embed/KBV_zpMm_0Q' }),
      new Song({ name: 'Cut The Bridge', writers: 'Linkin Park, Nick Long, Bea Miller', length: '3:48', url: 'https://www.youtube.com/embed/x3Wug55A0tk' }),
      new Song({ name: 'Heavy Is The Crown', writers: 'Linkin Park, Mike Elizondo', length: '2:47', url: 'https://www.youtube.com/embed/h0OK2oOG1no' }),
      new Song({ name: 'Over Each Other', writers: 'Linkin Park, Jon Green, Matias Mora', length: '2:50', url: 'https://www.youtube.com/embed/VianKGpW3bw' }),
      new Song({ name: 'Casualty', writers: 'Linkin Park', length: '2:20', url: 'https://www.youtube.com/embed/1Alzme5lq4c' }),
      new Song({ name: 'Overflow', writers: 'Linkin Park, Jaten Dimsdale, Mike Elizondo, Jake Torrey', length: '3:31', url: 'https://www.youtube.com/embed/SlVa6DK_Kqw' }),
      new Song({ name: 'Two Faced', writers: 'Linkin Park', length: '3:03', url: 'https://www.youtube.com/embed/ZQqW8622gV4' }),
      new Song({ name: 'Stained', writers: 'Linkin Park, Cal Shapiro', length: '3:05', url: 'https://www.youtube.com/embed/TkyFUjavMNU' }),
      new Song({ name: 'IGYEIH', writers: 'Linkin Park, Nick Long', length: '3:29', url: 'https://www.youtube.com/embed/bpFq9FzDfU8' }),
      new Song({ name: 'Good Things Go', writers: 'Linkin Park, Jake Torrey', length: '3:29', url: 'https://www.youtube.com/embed/7ooOL42f-2s' }),
      new Song({ name: 'Up From The Bottom (Bonus Track)', writers: 'Linkin Park', length: '3:03', url: 'https://www.youtube.com/embed/z41G40cBsrY' }),
      new Song({ name: 'Unshatter (Bonus Track)', writers: 'Linkin Park, Jake Torrey', length: '3:16', url: 'https://www.youtube.com/embed/GBCMpuqW50g' }),
      new Song({ name: 'Let You Fade (Bonus Track)', writers: 'Linkin Park, Elijah Noll', length: '3:28', url: 'https://www.youtube.com/embed/I-vcTugsQXY' }),
    ];
  }
}

export default toNative(FromZero);
</script>

<style lang="scss">

</style>
