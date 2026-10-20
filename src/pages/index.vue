<template>
  <app-article :header="$t('siteMenu.news')">
    <news-container class="py-2"/>
  </app-article>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
  .mainPage {
    .appArticle {
      @media(max-width: 649px) {
        h2 {
          text-align: center;
        }
      }
    }
  }
</style>
