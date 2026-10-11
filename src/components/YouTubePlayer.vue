<template>
  <div class="youTubePlayer">
    <iframe
      :src="url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style="width: 100%; height: 400px">
    </iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';

@Component({
    name: 'YouTubePlayer',
})
class YouTubePlayer extends Vue {
  @Prop({ required: true })
  url!: string;
}

export default toNative(YouTubePlayer)
</script>

<style lang="scss">

</style>
