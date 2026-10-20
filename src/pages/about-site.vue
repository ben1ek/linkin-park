<template>
  <app-article :header="$t('aboutSite.aboutSite')" :description="$t('aboutSite.description')">
    <under-construction-alert />
  </app-article>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component
class AboutSite extends Vue {

}

export default toNative(AboutSite);
</script>

<style lang="scss">

</style>
