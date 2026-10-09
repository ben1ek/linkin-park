<template>
  <v-expansion-panels>

  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';
import camelCase from 'lodash/camelCase';

@Component({
    name: 'Accordion',
})
class Accordion extends Vue {
    @Prop()
    value!: number | number[];

    @Prop({ default: () => [] })
    items!: { header: string; content?: string }[];

    set accordionValue(value: number | number[]) {
        this.$emit('update:modelValue', value);
    }

    get accordionValue(): number | number[] {
        return this.value;
    }

    generateHeaderSlotName(header: string): string {
      return `header.${camelCase(header)}`;
    }

    generateContentSlotName(header: string): string {
      return `content.${camelCase(header)}`;
    }

    generateName(header: string): string {
      return camelCase(header);
    }
}

export default toNative(Accordion)
</script>

<style lang="scss">

</style>
