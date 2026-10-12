<template>
  <div class="youTubePlayer">
    <iframe
      :src="url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      :style="playerStyle">
    </iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Setup, toNative } from 'vue-facing-decorator';
import { useDisplay } from 'vuetify';

@Component({
    name: 'YouTubePlayer',
})
class YouTubePlayer extends Vue {
  @Prop({ required: true })
  url!: string;

  @Setup(() => useDisplay().mobile)
  isMobile!: boolean;

  get playerStyle(): { width: string, height: string } {
    return { width: '100%', height: this.isMobile ? '200px' : '400px' };
  }
}

export default toNative(YouTubePlayer)
</script>

<style lang="scss">

</style>
