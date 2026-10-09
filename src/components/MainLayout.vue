<template>
  <div class="mainLayout d-flex pb-10">
    <div class="mainLayout_content" :class="{ 'mobile' : isMobile }">
      <slot name="content" />
    </div>
    <div class="mainLayout_sidebar" :class="{ 'mobile' : isMobile }">
      <slot name="sidebar" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Setup, toNative } from 'vue-facing-decorator';
import { useDisplay } from 'vuetify';

@Component({
    name: 'MainLayout',
})
class MainLayout extends Vue {
  @Setup(() => useDisplay().mobile)
  isMobile!: boolean;
}

export default toNative(MainLayout)
</script>

<style lang="scss">
  .mainLayout {
    min-height: calc(100vh - 320px);
    gap: 16px;
    &_content, &_sidebar {
      background-color: rgba(45, 45, 45, 0.5);
      border-radius: 6px;
      padding: 1.5vw;
      &.mobile {
        padding: 15px;
      }
    }
    &_content {
      width: 75%;
      @media (max-width: 1199px) {
        width: 100%;
      }
    }
    &_sidebar {
      width: 25%;
      @media (max-width: 1199px) {
        width: 100%;
      }
    }
    @media (max-width: 1199px) {
      flex-direction: column;
    }
  }
</style>
