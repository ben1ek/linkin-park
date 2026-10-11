<template>
  <div class="imageTile pa-1" @click="openLink">
    <v-img :src="src" :width="imageWidth" :height="imageHeight" :aspect-ratio="aspectRatio" cover>
      <div class="imageTile_imageMask"></div>
    </v-img>
    <div class="imageTile_descriptionArea pt-5 pb-8">
      <h3 v-if="title" v-html="title" class="text-center font-weight-medium" />
      <p v-if="description" v-html="description" class="text-center mt-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';

@Component({
    name: 'ImageTile',
})
class ImageTile extends Vue {
  @Prop({ required: true })
  src!: string;

  @Prop({ default: '100%' })
  imageWidth!: string;

  @Prop({ default: '220px' })
  imageHeight!: string;

  @Prop({ default: 'auto' })
  aspectRatio!: string;

  @Prop()
  title!: string;

  @Prop()
  description!: string;

  @Prop()
  link!: string;

  openLink(): void {
    if (!this.link) {
      return;
    }

    this.$router.push(this.link);
  }
}

export default toNative(ImageTile)
</script>

<style lang="scss">
.imageTile {
 background-color: rgb(31, 49, 65);
 border-radius: 2px;
 box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 4px 0px;
 cursor: pointer;
 .v-img {
  border-radius: 2px;
 }
 &_imageMask {
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
 }
 &_descriptionArea {
  h3 {
    font-size: 20px;
    line-height: 1;
  }
  span {
    font-size: 18px;
    line-height: 1;
  }
 }
   &:hover {
    .imageTile_imageMask {
      opacity: 0.2;
    }
  }
}
</style>
