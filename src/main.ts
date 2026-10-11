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
      album: {
        released: 'Data wydania',
        description: 'Opis',
        tracklist: 'Lista utworów',
      },
      hybridTheory: {
        description: 'Hybrid Theory to debiutancki album Linkin Park, wydany 24 października 2000 roku nakładem wytwórni Warner Bros. Records. Z albumu Hybrid Theory pochodzą cztery przebojowe single: "One Step Closer", "Crawling", "Papercut" i "In The End". Utwory takie jak "Points Of Authority", "Pushing Me Away" i "My December" również trafiły do stacji radiowych, mimo że nie zostały oficjalnie wydane jako single. Album dotarł jedynie do 2. miejsca na liście Billboard 200, jednak z czasem stał się najlepiej sprzedającym się debiutanckim albumem XXI wieku.'
      },
      meteora: {
        description: 'Meteora to drugi album studyjny amerykańskiego zespołu rockowego Linkin Park, wydany 25 marca 2003 roku nakładem wytwórni Warner Bros. Records. Z albumu Meteora wydano pięć oficjalnych singli: "Somewhere I Belong", "Faint", "Numb", "From The Inside" i "Breaking The Habit". Utwór "Lying From You" został wydany jako singiel promocyjny w 2004 roku. Oficjalne DVD dokumentujące proces powstawania albumu nosi tytuł "The Making Of Meteora".',
      },
      minutesToMidnight: {
        description: 'Minutes To Midnight to trzeci album studyjny amerykańskiego zespołu rockowego Linkin Park, wydany 14 maja 2007 roku nakładem wytwórni Warner Bros. Records. Z albumu pochodzi pięć singli: "What I\'ve Done", "Bleed It Out", "Shadow Of The Day", "Given Up" i "Leave Out All The Rest". Na tym albumie zespół odszedł od swojego charakterystycznego brzmienia nu-metalowego i po raz pierwszy na tak dużą skalę zaczął eksperymentować z różnymi gatunkami muzycznymi. Album zadebiutował na 1. miejscu list przebojów, stając się trzecim z rzędu albumem zespołu, który osiągnął szczyt notowań.',
      },
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
      album: {
        released: 'Released',
        description: 'Description',
        tracklist: 'Tracklist',
      },
      hybridTheory: {
        description: 'Hybrid Theory is Linkin Park\'s debut album, released on October 24, 2000 through Warner Bros. Records. Four successful singles were spawned from Hybrid Theory: "One Step Closer", "Crawling", "Papercut", "In The End", but tracks such as "Points Of Authority", "Pushing Me Away", and "My December" were also sent to radio stations for airplay despite not being officially released as singles. The album only peaked at #2 on the Billboard 200, but it would go on to become the best selling debut album of the 21st century.'
      },
      meteora: {
        description: 'Meteora is American rock band Linkin Park\'s second studio album, released on March 25, 2003 through Warner Bros. Records. Five official singles were released from Meteora, including "Somewhere I Belong", "Faint", "Numb", "From The Inside", and "Breaking The Habit". "Lying From You" was released as a promotional single in 2004. The official DVD for the album is titled The Making Of Meteora.',
      },
      minutesToMidnight: {
        description: 'Minutes To Midnight is American rock band Linkin Park\'s third studio album, released on May 14, 2007, through Warner Bros. Records. It spawned five singles: "What I\'ve Done", "Bleed It Out", "Shadow Of The Day", "Given Up", and "Leave Out All The Rest". The album sees the band\'s departure from their signature nu-metal sound, and is the first to feature the band\'s big experimentation with genres. The album debuted at #1 on the charts, making it the band\'s third consecutive #1 record.',
      },
    },
  },
});
const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(i18n);
registerPlugins(app);
app.mount('#app');
