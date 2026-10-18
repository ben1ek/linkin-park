<template>
  <main-layout class="aboutBand">
    <template v-slot:content>
      <app-article :header="$t('aboutBand.aboutBand')" :description="$t('aboutBand.description')">
        <under-construction-alert />
        <image-tiles-group :tiles="tiles" />
      </app-article>
    </template>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { ImageTile } from '@/model/ImageTile';
import { EnumRouteName } from '@/enum/EnumRouteName';
import history from '../assets/history.webp';
import members from '../assets/members.webp';
import discography from '../assets/discography.webp';

@Component
class AboutBand extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: history, title: this.$t('aboutBand.history') }),
      new ImageTile({ src: members, title: this.$t('aboutBand.members') }),
      new ImageTile({ src: discography, title: this.$t('aboutBand.discography'), link: { name: EnumRouteName.DISCOGRAPHY } }),
    ]
  }
}

export default toNative(AboutBand);
</script>

<style lang="scss">

</style>
