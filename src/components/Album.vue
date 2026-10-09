<template>
  <div class="album">
    <div class="album_mainInfo d-flex align-center pa-4 mb-2">
      <v-img :height="120" :width="120" :src="album.cover" class="album_cover mr-4" />
      <div class="d-flex flex-column">
        <h3 class="album_name font-weight-bold mb-2">{{ album.name }}</h3>
        <span class="album_yearReleased">Released: {{ album.yearReleased }}</span>
      </div>
    </div>
    <div class="album_description pa-4">
      <h4 class="album_descriptionHeader font-weight-bold mb-4">Description</h4>
      <span class="album_descriptionText">{{ album.description }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';
import { DiscographyAlbum } from '../model/DiscographyAlbum';

@Component({
    name: 'Album',
})
class Album extends Vue {
  @Prop({ required: true })
  album!: DiscographyAlbum;
}

export default toNative(Album)
</script>

<style lang="scss">
.album {
  &_mainInfo, &_description {
    background-color: #1f3141;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 4px 0px;
  }
  &_cover {
    flex-grow: 0;
  }
  &_name {
    font-size: 18px;
  }
  &_yearReleased {
    font-size: 16px;
  }
  &_descriptionHeader {
    font-size: 16px;
  }
  &_descriptionText {
    font-size: 14px;
    text-align: justify;
  }
}
</style>
