<template>
  <div class="album">
    <div class="album_mainInfo d-flex align-center pa-4 mb-2">
      <v-img :height="120" :width="120" :src="album.cover" class="album_cover mr-4" />
      <div class="d-flex flex-column">
        <h3 class="album_name font-weight-bold mb-2">{{ album.name }}</h3>
        <span class="album_yearReleased">{{ $t('album.released') }}: {{ album.yearReleased }}</span>
      </div>
    </div>
    <div class="album_description pa-4 mb-2">
      <h4 class="album_descriptionHeader font-weight-bold mb-4">{{ $t('album.description') }}</h4>
      <span class="album_descriptionText">{{ album.description }}</span>
      <div class="mt-4">
        <v-btn variant="outlined" density="comfortable" append-icon="mdi-open-in-new" :ripple="false" @click="openSourcePage" class="album_sourceButton">
          <span class="text-capitalize">{{ $t('source') }}</span>
        </v-btn>
      </div>
    </div>
    <div class="album_tracklist pa-4">
      <h4 class="album_descriptionHeader font-weight-bold mb-4">{{ $t('album.tracklist') }}</h4>
      <accordion :items="album.tracklist">
        <template v-slot:title="{ item }">
          <div class="d-flex align-center justify-space-between w-100 mr-4">
            <h5 class="album_trackName">{{ item.name }}</h5>
            <span class="album_trackLength ml-4">{{ item.length }}</span>
          </div>
        </template>
        <template v-slot:content="{ item }">
          <you-tube-player :url="item.url" />
        </template>
      </accordion>
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

  openSourcePage(): void {
    window.open(this.album.url, '_blank');
  }
}

export default toNative(Album)
</script>

<style lang="scss">
.album {
  &_mainInfo, &_description, &_tracklist {
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
  &_sourceButton {
    .v-btn__content span {
      font-size: 12px;
      letter-spacing: 1px;
    }
    .v-btn__append i {
        font-size: 14px;
    }
  }
  &_trackName {
    font-size: 14px;
    font-weight: 600;
  }
  &_trackLength {
    font-size: 12px;
  }
}
</style>
