<template>
  <div class="siteFooter d-flex align-center justify-space-between mx-auto px-5">
    <div class="d-flex align-center">
      <span>&#169; 2012 - 2026 Linkin Park - Poland</span>
    </div>
    <div class="d-flex align-center">
      <div class="siteFooter_socials d-flex align-center">
        <v-icon :size="28" icon="mdi-youtube" @click="openYoutubeChannel"></v-icon>
        <v-icon :size="26" icon="mdi-instagram" @click="openInstagramPage"></v-icon>
        <v-icon :size="26" icon="mdi-facebook" @click="openFacebookPage"></v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({
    name: 'SiteFooter'
})
class SiteFooter extends Vue {
  readonly FACEBOOK_URL = 'https://www.facebook.com/LPPoland';
  readonly YOUTUBE_URL = 'https://www.youtube.com/@LinkinParkPoland';
  readonly INSTAGRAM_URL = 'https://www.instagram.com/lppoland';

  openFacebookPage(): void {
    window.open(this.FACEBOOK_URL, '_blank');
  }

  openYoutubeChannel(): void {
    window.open(this.YOUTUBE_URL, '_blank');
  }

  openInstagramPage(): void {
    window.open(this.INSTAGRAM_URL, '_blank');
  }
}

export default toNative(SiteFooter)
</script>

<style lang="scss">

.siteFooter {
  max-width: 1280px;
  width: 100%;
  &_socials {
    column-gap: 16px;
  }
  @media(max-width: 499px) {
    flex-direction: column;
    > div:first-child {
      order: 2;
    }
    span {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
