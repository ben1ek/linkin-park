<template>
  <v-alert :title="$t('alerts.underConstruction')" :text="$t('alerts.underConstuctionDescription')" type="warning" border="start" closable class="underConstructionAlert my-3">
  </v-alert>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({
    name: 'UnderConstructionAlert'
})
class UnderConstructionAlert extends Vue {
}

export default toNative(UnderConstructionAlert)
</script>

<style lang="scss">
  .underConstructionAlert {
    background: rgb(var(--v-theme-surface-light)) !important;
    .v-alert__content {
      font-size: 14px;
      .v-alert-title {
        font-size: 16px;
      }
    }
  }
</style>
