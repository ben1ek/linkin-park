<template>
  <div class="siteLogo d-flex align-center justify-center">
    <v-img :height="186" :width="186" src="../assets/logo.webp"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({
    name: 'SiteLogo'
})
class SiteLogo extends Vue {

}

export default toNative(SiteLogo)
</script>

<style lang="scss">
  .siteLogo {
    background-color: white;
    padding: 2px;
    border-radius: 6px;
    cursor: pointer;
    .v-img {
      border-radius: 6px;
    }
  }
</style>
