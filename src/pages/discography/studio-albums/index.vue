<template>
  <app-article :header="$t('discography.studioAlbums')">
    <under-construction-alert />
    <image-tiles-group :tiles="tiles" image-aspect-ratio="1/1" image-height="auto"/>
  </app-article>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { EnumRouteName } from '@/enum/EnumRouteName';
import { ImageTile } from "@/model/ImageTile";
import hybridTheory from '@assets/studio-albums/hybrid-theory.webp';
import meteora from '@assets/studio-albums/meteora.webp';
import minutesToMidnight from '@assets/studio-albums/minutes-to-midnight.webp';
import aThousandSuns from '@assets/studio-albums/a-thousand-suns.webp';
import livingThings from '@assets/studio-albums/living-things.webp';
import theHuntingParty from '@assets/studio-albums/the-hunting-party.webp';
import oneMoreLight from '@assets/studio-albums/one-more-light.webp';
import fromZero from '@assets/studio-albums/from-zero.webp';

@Component
class StudioAlbums extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: hybridTheory, title: 'Hybrid Theory', description: '2000', link: { name: EnumRouteName.HYBRID_THEORY } }),
      new ImageTile({ src: meteora, title: 'Meteora', description: '2003', link: { name: EnumRouteName.METEORA } }),
      new ImageTile({ src: minutesToMidnight, title: 'Minutes To Midnight', description: '2007', link: { name: EnumRouteName.MINUTES_TO_MIDNIGHT } }),
      new ImageTile({ src: aThousandSuns, title: 'A Thousand Suns', description: '2010', link: { name: EnumRouteName.A_THOUSAND_SUNS }}),
      new ImageTile({ src: livingThings, title: 'Living Things', description: '2012', link: { name: EnumRouteName.LIVING_THINGS } }),
      new ImageTile({ src: theHuntingParty, title: 'The Hunting Party', description: '2014', link: { name: EnumRouteName.THE_HUNTING_PARTY } }),
      new ImageTile({ src: oneMoreLight, title: 'One More Light', description: '2017', link: { name: EnumRouteName.ONE_MORE_LIGHT } }),
      new ImageTile({ src: fromZero, title: 'From Zero', description: '2024', link: { name: EnumRouteName.FROM_ZERO } }),
    ]
  }
}

export default toNative(StudioAlbums);
</script>

<style lang="scss">
.studioAlbums {

}
</style>
