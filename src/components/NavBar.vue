<template>
  <div class="navBar mx-auto py-10 px-5">
    <div class="d-flex">
      <site-logo class="mr-4" @click="openMainPage" />
      <div class="navBar_navigationArea d-flex flex-column justify-end" :class="{ 'justify-space-between' : isMobile }">
        <v-icon v-if="isMobile" icon="mdi-menu" :size="36" :ripple="false" @click="openMobileDrawer" class="ml-auto" />
        <div class="d-flex justify-space-between" :class="{ 'flex-column align-start mb-0': isMobile, 'align-end mb-6': !isMobile }">
          <header @click="openMainPage">
            <h1 v-if="!isMobile">Linkin Park - Poland</h1>
            <h1 v-else>Linkin Park <br> Poland</h1>
          </header>
          <language-toggle :class="{'ml-4': !isMobile, 'mt-4': isMobile }" />
        </div>
        <site-menu :is-mobile="isMobile" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Setup, toNative } from 'vue-facing-decorator';
import { useDisplay } from 'vuetify';
import { EnumEventType } from '../enum/EnumEventType';

@Component({
    name: 'NavBar'
})
class NavBar extends Vue {
  openMainPage(): void {
    this.$router.push('/');
    this.emitter.emit(EnumEventType.OPEN_MAIN_PAGE);
  }

  openMobileDrawer(): void {
    this.emitter.emit(EnumEventType.OPEN_NAV_DRAWER);
  }

  @Setup(() => useDisplay().mobile)
  isMobile!: boolean;
}

export default toNative(NavBar)
</script>

<style lang="scss">

.navBar {
  max-width: 1280px;
  width: 100%;
  &_navigationArea {
    width: 100%;
    header {
      h1 {
        font-size: 40px;
        line-height: 1;
        font-weight: 300;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
  @media(max-width: 399px) {
    > div:first-child {
      justify-content: center;
      margin-left: 36px;
    }
    &_navigationArea {
      width: fit-content;
      > i {
        position: relative;
        left: 4vw;
      }
    }
    .siteLogo {
      margin-right: 0 !important;
    }
    header {
      display: none;
    }
    .languageToggle {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
    }
  }
}
</style>
