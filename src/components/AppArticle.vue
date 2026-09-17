<template>
  <article class="appArticle">
    <header class="mb-4">
      <h2 v-if="header" v-html="header" class="font-weight-medium" />
      <p v-if="description" v-html="description" class="mt-2" />
    </header>
    <slot />
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';

@Component({
    name: 'AppArticle',
})
class AppArticle extends Vue {
  @Prop()
  header: string;

  @Prop()
  description: string;
}

export default toNative(AppArticle)
</script>

<style lang="scss">
  .appArticle {
    h2 {
      font-size: 24px;
      line-height: 1;
    }
  }
</style>
