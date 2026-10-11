<template>
  <v-expansion-panels variant="accordion" class="accordion">
    <v-expansion-panel v-for="(item, i) in items" :key="i">
      <v-expansion-panel-title>
        <slot name="title" :item="item" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <slot name="content" :item="item" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';

@Component({
    name: 'Accordion',
})
class Accordion extends Vue {
    @Prop({ default: () => [] })
    items!: any[];
}

export default toNative(Accordion)
</script>

<style lang="scss">
.accordion {

}
</style>
