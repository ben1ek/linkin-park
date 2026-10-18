<template>
  <div class="newsContainer d-flex flex-column" :aria-busy="loading">
    <div v-if="loading" role="status" class="text-center py-6">
      <v-progress-circular indeterminate class="mr-3" />
      <span>{{ $t('newsFeed.loading') }}</span>
    </div>
    <error-alert v-else-if="error" :alert-text="$t('newsFeed.error')" with-button :button-text="$t('newsFeed.retry')" @button-click="loadNews" />
    <template v-else>
      <v-alert v-if="stale" type="info" variant="tonal" border="start" class="mb-4">{{ $t('newsFeed.stale') }}</v-alert>
      <p v-if="!newsItems.length" role="status">{{ $t('newsFeed.empty') }}</p>
      <div class="newsContainer_newsItems d-flex flex-column">
        <news v-for="newsItem in newsItems.slice(0, visibleCount)" :key="newsItem.id" :newsItem="newsItem" />
      </div>
      <v-btn append-icon="mdi-chevron-triple-right" :ripple="false" variant="outlined" class="mx-auto mt-6" @click="viewMore">
        {{ $t('newsFeed.more') }}
      </v-btn>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { NewsItem } from '../model/NewsItem';
import { fetchNews } from '../services/NewsService';

@Component({ name: 'NewsContainer' })
class NewsContainer extends Vue {
  readonly FACEBOOK_URL = 'https://www.facebook.com/LPPoland';

  newsItems: NewsItem[] = [];

  visibleCount = 6;

  loading = true;

  error = false;

  stale = false;

  controller: AbortController | null = null;

  created() {
    void this.loadNews();
  }

  beforeUnmount() {
    this.controller?.abort();
  }

  viewMore(): void {
    if (this.visibleCount < this.newsItems.length) {
      this.visibleCount += 6;
    } else {
      window.open(this.FACEBOOK_URL, '_blank');
    }
  }

  async loadNews(): Promise<void> {
    this.controller?.abort();
    const controller = new AbortController();
    this.controller = controller;
    this.loading = true;
    this.error = false;
    // Allow time for a sleeping Render instance to start.
    const timeout = window.setTimeout(() => controller.abort(), 90_000);
    try {
      const result = await fetchNews(controller.signal);
      this.newsItems = result.data;
      this.stale = result.stale;
      this.visibleCount = 6;
    } catch {
      this.error = true;
    } finally {
      window.clearTimeout(timeout);
      this.loading = false;
    }
  }
}
export default toNative(NewsContainer);
</script>

<style lang="scss">
.newsContainer_newsItems {
  row-gap: 20px;
}
</style>
