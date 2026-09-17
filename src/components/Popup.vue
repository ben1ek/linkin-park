<template>
  <v-dialog v-bind="$attrs" v-on="$listeners" :model-value="showDialog" :max-width="maxWidth" content-class="popup">
    <v-card :max-width="maxWidth">
      <v-btn icon="mdi-close" :ripple="false" variant="plain" @click="hidePopup" class="popup_closeButton position-absolute"/>
      <slot />
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, toNative } from 'vue-facing-decorator';

@Component({
    name: 'Popup',
})
class Popup extends Vue {
  @Prop()
  showPopup: boolean;

  @Prop()
  maxWidth: string;

  showDialog = false;

  created(): void {
    this.onShowPopupChange();
  }

  @Watch('showPopup')
  onShowPopupChange(): void {
    this.showDialog = this.showPopup;
  }

  hidePopup(): void {
    this.showDialog = false;
  }
}

export default toNative(Popup)
</script>

<style lang="scss">
  .popup {
    .v-card {
      width: fit-content;
    }
    &_closeButton {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 2;
    }
  }
</style>
