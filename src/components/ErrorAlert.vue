<template>
  <v-alert type="error" role="alert" border="start" class="errorAlert">
    <div class="mb-2">
      <span>{{ alertText }}</span>
    </div>
    <v-btn variant="outlined" prepend-icon="mdi-refresh" :ripple="false" @click="atButtonClick">{{ buttonText }}</v-btn>
  </v-alert>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';

@Component({
    name: 'ErrorAlert'
})
class ErrorAlert extends Vue {
  @Prop()
  alertText!: string;

  @Prop()
  withButton!: boolean;

  @Prop()
  buttonText!: string;

  atButtonClick(): void {
    this.$emit('button-click');
  }
}

export default toNative(ErrorAlert)
</script>

<style lang="scss">
  .errorAlert {
    .v-alert__content {
      font-size: 16px;
    }
    button {
      text-transform: none;
    }
    @media(max-width: 649px) {
      .v-alert__content {
        font-size: 14px;
      }
      button {
        font-size: 12px;
      }
    }
  }
</style>
