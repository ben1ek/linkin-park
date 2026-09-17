<template>
  <v-btn-toggle v-model="$i18n.locale" class="languageToggle">
    <v-btn v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" :height="20" :ripple="false">
      <img v-if="locale === 'pl'" src="../assets/pl.webp" alt="" class="languageToggle_flagIcon mr-1" />
      <img v-if="locale === 'en'" src="../assets/us.webp" alt="" class="languageToggle_flagIcon mr-1" />
      <span>{{ locale }}</span>
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({
    name: 'LanguageToggle',
})
class LanguageToggle extends Vue {
}

export default toNative(LanguageToggle)
</script>

<style lang="scss">
  .languageToggle {
    height: auto !important;
    column-gap: 12px;
    button {
      padding: 0;
      opacity: 0.5;
      background: transparent;
      width: auto;
      min-width: auto;
      &:hover {
        opacity: 1;
      }
      &.v-btn--active {
        opacity: 1;
      }
      .v-btn__overlay, .v-btn__underlay {
        display: none;
      }
      .v-btn__content {
        span {
          font-size: 14px;
          line-height: 1;
        }
      }
    }
    &_flagIcon {
      height: 14px;
    }
  }
</style>
