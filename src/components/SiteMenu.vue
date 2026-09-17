<template>
  <nav v-if="!isMobile" class="siteMenu d-flex align-center">
    <p v-for="(menuItem, index) in siteMenuItems" :key="index" :class="{ 'font-weight-bold': menuItem.active }" class="text-center text-uppercase py-5" @click="openSubpage(menuItem)">{{ $t(menuItem.name) }}</p>
  </nav>
  <div v-else class="siteMenu mobile mx-5" :class="{ visible: mobileNavigation }">
    <div class="siteMenu_mobileDrawer d-flex justify-space-between pl-6 pr-5 py-5">
      <nav class="siteMenu_menuItems d-flex flex-column justify-space-between py-1">
        <div v-for="(menuItem, index) in siteMenuItems" :key="index" @click="openSubpage(menuItem)" class="d-flex align-center">
          <v-icon :icon="menuItem.icon" :size="30" class="mr-4" />
          <span :class="{ 'font-weight-bold': menuItem.active }" class="siteMenu_menuItem mobile">{{ $t(menuItem.name) }}</span>
        </div>
      </nav>
      <v-icon icon="mdi-close" size="36" @click="mobileNavigation = false" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';
import { SiteMenuItem } from '../model/SiteMenuItem';
import { EnumEventType } from '../enum/EnumEventType';

@Component({
    name: 'SiteMenu'
})
class SiteMenu extends Vue {
  @Prop()
  isMobile: boolean;

  mobileNavigation = false;

  siteMenuItems = [
    new SiteMenuItem({ name: 'siteMenu.news', icon: 'mdi-newspaper', address: '/' }),
    new SiteMenuItem({ name: 'siteMenu.aboutBand', icon: 'mdi-account-multiple', address: '/about-band' }),
    new SiteMenuItem({ name: 'siteMenu.discography', icon: 'mdi-disc', address: '/discography' }),
    new SiteMenuItem({ name: 'siteMenu.aboutSite', icon: 'mdi-information-outline', address: '/about-site' }),
  ];

  created(): void {
    this.emitter.on(EnumEventType.OPEN_NAV_DRAWER, () => this.mobileNavigation = true);
    this.emitter.on(EnumEventType.OPEN_MAIN_PAGE, () => this.markActivePage(this.siteMenuItems[0]));

    const indexOfMenuItemToMark = this.siteMenuItems.findIndex((menuItem: SiteMenuItem) => this.isSubpageActive(menuItem));
    if (indexOfMenuItemToMark !== -1) {
      this.siteMenuItems[indexOfMenuItemToMark].active = true;
    }
  }

  openSubpage(menuItem: SiteMenuItem): void {
    this.$router.push(menuItem.address);
    this.markActivePage(menuItem);
    if (this.isMobile) {
      this.mobileNavigation = false;
    }
  }

  isSubpageActive(menuItem: SiteMenuItem): boolean {
    const pathname = window.location.pathname.replace('/', '');
    return Boolean(pathname.match(new RegExp(`^${menuItem.address.replace('/', '')}$`)));
  }

  markActivePage(page: SiteMenuItem): void {
    this.siteMenuItems.forEach((menuItem: SiteMenuItem, index: number) => this.siteMenuItems[index].active = false);
    const indexOfMenuItemToMark = this.siteMenuItems.findIndex((menuItem: SiteMenuItem) => menuItem.address === page.address);
    if (indexOfMenuItemToMark !== -1) {
      this.siteMenuItems[indexOfMenuItemToMark].active = true;
    }
  }
}

export default toNative(SiteMenu)
</script>

<style lang="scss">
  .siteMenu {
    position: relative;
    &:not(.mobile) {
      border-top: 1px solid white;
      border-bottom: 1px solid white;
    }
    > p {
      width: 25%;
      font-size: 14px;
      line-height: 1;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      &.active {
        font-weight: 700;
      }
      &:hover {
        background-color: rgba($color: white, $alpha: 0.05)
      }
    }
    &_menuItems {
      height: 100%;
    }
    &_menuItem {
      letter-spacing: normal;
      font-size: 14px;
      font-weight: 400;
      &.mobile {
        cursor: pointer;
      }
    }
    &.mobile {
      position: absolute;
      top: 20px;
      left: 0;
      width: calc(100% - 40px);
      height: 230px;
      background: #1c1726;
      border-radius: 6px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
      &.visible {
        opacity: 1;
        pointer-events: all;
      }
    }
    &_mobileDrawer {
      height: 100%;
    }
  }
</style>
