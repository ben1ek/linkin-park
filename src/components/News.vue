<template>
  <div :id="String(newsItem.id)" class="news d-flex">
    <div class="news_multimediaContainer">
      <v-img :src="newsItem.multimedia" :width="250" :height="200" cover @click="openArticle" />
    </div>
    <div class="news_contentContainer d-flex flex-column justify-space-evenly flex-grow-1">
      <p>{{ newsItem.description }}</p>
      <v-btn append-icon="mdi-chevron-double-right" :ripple="false" variant="plain" @click="openArticle">
        {{ $t('readMore') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative, Prop } from 'vue-facing-decorator';
import { NewsItem } from '@/model/NewsItem';

@Component({
    name: 'News',
})
class News extends Vue {
  @Prop()
  newsItem!: NewsItem;

  created(): void {
    console.log(this.newsItem);
  }

  openArticle(): void {
    window.open(this.newsItem.link, '_blank');
  }
}

export default toNative(News)
</script>

<style lang="scss">
  .news {
    &_multimediaContainer {
      background-color: white;
      padding: 2px;
      border-radius: 6px;
      margin-right: 16px;
      cursor: pointer;
      .v-img {
        border-radius: 6px;
      }
    }
    &_contentContainer {
      .v-btn {
        padding: 0;
        width: fit-content;
      }
    }
    @media(max-width: 649px) {
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      padding: 0 5vw;
      &_multimediaContainer {
        margin-right: 0;
      }
      &_contentContainer {
        p {
          text-align: center;
        }
        button {
          margin: 0 auto;
        }
      }
    }
  }
</style>
