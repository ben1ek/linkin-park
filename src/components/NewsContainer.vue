<template>
  <div class="newsContainer d-flex flex-column">
    <div class="newsContainer_newsItems d-flex flex-column">
      <news v-for="(newsItem, index) in newsItems" :key="index" :newsItem="newsItem" />
    </div>
    <v-btn append-icon="mdi-chevron-triple-right" :ripple="false" variant="outlined" class="newsContainer_pagination mx-auto mt-6">
      {{ $t('readMore') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { NewsItem } from '../model/NewsItem';
import img1 from '../assets/studio-albums/hybrid-theroy.webp';

@Component({
    name: 'NewsContainer',
})
class NewsContainer extends Vue {
  created() {
    // const loadFeed = () => {
    //   const sdk = window.FB;
    //   if (!sdk) return;
    //   sdk.init({
    //     appId: '2866893286824757',
    //     xfbml: true,
    //     version: 'v21.0',
    //   });
    //   sdk.api('/LPPoland/feed', (response) => {
    //     if (response && !response.error) {
    //       /* handle the result */
    //     }
    //   });
    // };
    // if (window.FB) {
    //   loadFeed();
    // } else {
    //   const previousInit = window.fbAsyncInit;
    //   window.fbAsyncInit = () => {
    //     previousInit?.();
    //     loadFeed();
    //   };
    // }
  }

  // MOCKED:
  get newsItems(): NewsItem[] {
    return [
      new NewsItem({ id: 1, multimedia: img1,  description: 'Use this endpoint to get and publish to a Page. The Page Feed encompasses any interactions with a Facebook Page including: posts and links published by this Page, visitors to this Page, and public posts in which the Page has been tagged.' }),
      new NewsItem({ id: 2, multimedia: img1,  description: 'Use this endpoint to get and publish to a Page. The Page Feed encompasses any interactions with a Facebook Page including: posts and links published by this Page, visitors to this Page, and public posts in which the Page has been tagged.' }),
      new NewsItem({ id: 3, multimedia: img1,  description: 'Use this endpoint to get and publish to a Page. The Page Feed encompasses any interactions with a Facebook Page including: posts and links published by this Page, visitors to this Page, and public posts in which the Page has been tagged.' }),
      new NewsItem({ id: 4, multimedia: img1,  description: 'Use this endpoint to get and publish to a Page. The Page Feed encompasses any interactions with a Facebook Page including: posts and links published by this Page, visitors to this Page, and public posts in which the Page has been tagged.' }),
      new NewsItem({ id: 5, multimedia: img1,  description: 'Use this endpoint to get and publish to a Page. The Page Feed encompasses any interactions with a Facebook Page including: posts and links published by this Page, visitors to this Page, and public posts in which the Page has been tagged.' }),
      new NewsItem({ id: 6, multimedia: img1,  description: 'Use this endpoint to get and publish to a Page. The Page Feed encompasses any interactions with a Facebook Page including: posts and links published by this Page, visitors to this Page, and public posts in which the Page has been tagged.' }),
    ];
  }
}

export default toNative(NewsContainer)
</script>

<style lang="scss">
  .newsContainer {
    &_newsItems {
      row-gap: 20px;
    }
    &_pagination {
      .v-btn__content {
        line-height: 1;
      }
    }
  }
</style>
