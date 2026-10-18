<template>
  <div :id="String(newsItem.id)" class="news d-flex">
    <div class="news_multimediaContainer">
      <v-img :src="newsItem.multimedia || placeholderImage" :width="250" :height="200" cover @click="openArticle" />
    </div>
    <div class="news_contentContainer d-flex flex-column justify-space-evenly flex-grow-1">
      <div v-if="publicationDate" class="news_publicationDate d-flex align-center">
        <v-icon icon="mdi-calendar-blank" size="small" color="#a9a7ad" class="mr-2" />
        <time :datetime="newsItem.publishedAt">{{ publicationDate }}</time>
      </div>
      <p class="news_description">{{ newsItem.description }}</p>
      <v-btn v-if="newsItem.link" append-icon="mdi-chevron-double-right" :ripple="false" variant="plain" @click="openArticle">
        {{ $t('readMore') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative, Prop } from 'vue-facing-decorator';
import { NewsItem } from '@/model/NewsItem';
import placeholderImage from '../assets/members.webp';

@Component({
    name: 'News',
})
class News extends Vue {
  @Prop()
  newsItem!: NewsItem;

  get publicationDate(): string {
    const date = new Date(this.newsItem.publishedAt);

    return Number.isFinite(date.getTime())
      ? date.toLocaleDateString(this.$i18n.locale === 'pl' ? 'pl-PL' : 'en-GB')
      : '';
  }

  get placeholderImage(): string {
    return placeholderImage;
  }

  openArticle(): void {
    if (this.newsItem.link) {
      window.open(this.newsItem.link, '_blank', 'noopener,noreferrer');
    }
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
    &_description {
      font-size: 16px;
      white-space: pre-line;
      overflow-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &_contentContainer {
      min-width: 0;
    }
    time {
      color: #a9a7ad;
    }
    @media(max-width: 649px) {
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      padding: 6px 2.5vw;
      &_multimediaContainer {
        margin-right: 0;
      }
      &_publicationDate {
        margin: 12px auto;
      }
      &_description {
        font-size: 14px;
        margin-bottom: 12px;
        -webkit-line-clamp: 6;
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
