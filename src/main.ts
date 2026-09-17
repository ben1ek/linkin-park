/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import mitt from 'mitt';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages: {
    'pl': {
      message: {
        hello: 'hello world',
      },
      siteMenu: {
        news: 'Aktualności',
        aboutBand: 'O zespole',
        discography: 'Dyskografia',
        aboutSite: 'O stronie',
      },
      aboutBand: {
        aboutBand: 'O zespole',
        description: 'Dowiedz się więcej o zespole',
        history: 'Historia',
        members: 'Członkowie',
        discography: 'Dyskografia',
      },
      discography: {
        discography: 'Dyskografia',
        description: 'Poznaj dyskografię zespołu',
        studioAlbums: 'Albumy studyjne',
        liveAlbums: 'Albumy koncertowe',
        singles: 'Single',
        lpu: 'LPU',
        others: 'Inne',
        videos: 'Teledyski',
      },
      aboutSite: {
        aboutSite: 'O stronie',
        description: 'Dowiedz się więcej o naszej stronie.',
      },
      concertEventsPopup: {
        header: 'Akcje<br>koncertowe',
        description: 'Kliknij, aby dowiedzieć się więcej...',
      },
      alerts: {
        underConstruction: 'Podstrona w trakcie budowy',
        underConstuctionDescription: 'Pracujemy nad stworzeniem treści dla tej podstrony.',
      },
      readMore: 'Czytaj więcej',
    },
    en: {
      message: {
        hello: 'こんにちは、世界',
      },
      siteMenu: {
        news: 'News',
        aboutBand: 'About band',
        discography: 'Discography',
        aboutSite: 'About Site',
      },
      aboutBand: {
        aboutBand: 'About band',
        description: 'Learn more about the band',
        history: 'History',
        members: 'Members',
        discography: 'Discography',
      },
      discography: {
        discography: 'Discography',
        description: 'Check out the band\'s discography',
        studioAlbums: 'Studio albums',
        liveAlbums: 'Live albums',
        singles: 'Singles',
        lpu: 'LPU',
        others: 'Others',
        videos: 'Videos',
      },
      aboutSite: {
        aboutSite: 'About site',
        description: 'Learn more about our website',
      },
      concertEventsPopup: {
        header: 'Concert<br>events',
        description: 'Click to learn more...',
      },
      alerts: {
        underConstruction: 'Subpage under construction',
        underConstuctionDescription: 'We are working on creating content for this subpage.',
      },
      readMore: 'Read More',
    },
  },
});
const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(i18n);
registerPlugins(app);
app.mount('#app');
