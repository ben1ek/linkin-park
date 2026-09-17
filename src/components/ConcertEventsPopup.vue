<template>
  <popup :show-popup="true" max-width="60vh">
    <v-img src="/src/assets/popup-image.webp" width="60vh" height="60vh" cover>
      <div class="concertEventsPopup_content d-flex flex-column align-center justify-center">
        <header>
          <h2 v-html="$t('concertEventsPopup.header')" />
        </header>
        <div class="my-4">
          <p>LINKIN PARK / 05.07.2025</p>
          <p>OPEN'ER FESTIVAL</p>
        </div>
        <span v-html="$t('concertEventsPopup.description')" @click="openPopupPage" />
      </div>
    </v-img>
  </popup>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { useDisplay } from 'vuetify';

@Component({
    name: 'ConcertEventsPopup',
})
class ConcertEventsPopup extends Vue {
  openPopupPage(): void {
    window.open('https://www.facebook.com/photo/?fbid=1159807695513133&set=a.598317274995514', '_blank');
  }

  get isMobile(): boolean {
    return useDisplay().mobile;
  }
}

export default toNative(ConcertEventsPopup)
</script>

<style lang="scss">
  .concertEventsPopup {
    &_content {
      height: 100%;
      padding: 2vw;
      h2 {
        font-size: 5vh;
        line-height: 1.2;
        text-transform: uppercase;
      }
      p, span {
        font-size: 2.5vh;
      }
      span {
        text-decoration: underline;
        cursor: pointer;
        font-weight: 500;
      }
      h2, p, span {
        text-align: center;
        user-select: none;
        letter-spacing: 0.02em;
      }
    }
  }
</style>
