<template>
  <div v-if="!isMobile" class="breadcrumbs d-flex align-center">
    <div v-for="(item, index) in path" :key="index" class="d-flex align-center">
      <span @click="openSubpage(item)">{{ $t(`EnumRouteName.${item}`) }}</span>
      <v-icon v-if="index < path.length - 1" icon="mdi-chevron-right" color="#a9a7ad" />
    </div>
  </div>
  <div v-else class="breadcrumbs d-flex align-center">
    <v-icon icon="mdi-chevron-left" color="#a9a7ad" />
    <span @click="openSubpage(previousSite)">{{ $t(`EnumRouteName.${previousSite}`) }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Setup, toNative } from 'vue-facing-decorator';
import { useDisplay } from 'vuetify';
import { EnumRouteName } from '@/enum/EnumRouteName';

@Component({
    name: 'Breadcrumbs',
})
class Breadcrumbs extends Vue {
  @Prop({ required: true })
  path!: EnumRouteName[];

  @Setup(() => useDisplay().mobile)
  isMobile!: boolean;

  openSubpage(name: EnumRouteName): void {
    this.$router.push({ name });
  }

  get previousSite(): EnumRouteName | undefined {
    if (this.path.length - 2 >= 0) {
      return this.path[this.path.length - 2];
    }
  }
}

export default toNative(Breadcrumbs)
</script>

<style lang="scss">
.breadcrumbs {
  --fade-amount: 25%;
  font-size: 14px;
  line-height: 1;
  color: #a9a7ad;
  span {
    text-wrap: nowrap;
    cursor: pointer;
  }
}
</style>
