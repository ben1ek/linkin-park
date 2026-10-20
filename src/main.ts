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
      newsFeed: { loading: 'Ładowanie aktualności…', error: 'Nie udało się pobrać aktualności.', retry: 'Spróbuj ponownie', empty: 'Brak aktualności.', stale: 'Wyświetlamy ostatnio pobrane wpisy. Aktualizacja jest chwilowo niedostępna.', more: 'Pokaż więcej' },
      siteMenu: {
        news: 'Aktualności',
        aboutBand: 'O zespole',
        discography: 'Dyskografia',
        aboutSite: 'O stronie',
      },
      EnumRouteName: {
        news: 'Aktualności',
        aboutBand: 'O zespole',
        discography: 'Dyskografia',
        aboutSite: 'O stronie',
        home: 'Strona główna',
        studioAlbums: 'Albumy studyjne',
        hybridTheory: 'Hybrid Theory',
        meteora: 'Meteora',
        minutesToMidnight: 'Minutes To Midnight',
        aThousandSuns: 'A Thousand Suns',
        livingThings: 'Living Things',
        theHuntingParty: 'The Hunting Party',
        oneMoreLight: 'One More Light',
        fromZero: 'From Zero',
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
      livingThings: {
        description: 'Living Things (stylizowany jako LIVING THINGS) to piąty album studyjny amerykańskiego zespołu rockowego Linkin Park, wydany 26 czerwca 2012 roku nakładem wytwórni Warner Bros. Records. Z albumu pochodzą trzy oficjalne single: "Burn It Down", "Lost In The Echo" i "Castle Of Glass". Utwory "Lies Greed Misery", "Powerless" i "I\'ll Be Gone" również zostały wydane jako single promocyjne, mimo że nie były oficjalnymi singlami. Tworząc brzmienie Living Things, zespół połączył elementy charakterystyczne dla swoich czterech poprzednich albumów, ponieważ jego członkowie w końcu poczuli się pewnie z kierunkiem muzycznym, w którym podążali. Album zadebiutował na 1. miejscu list przebojów, stając się piątym z rzędu albumem zespołu, który osiągnął szczyt notowań.',
      },
      theHuntingParty: {
        description: 'The Hunting Party to szósty album studyjny amerykańskiego zespołu rockowego Linkin Park, wydany 17 czerwca 2014 roku nakładem wytwórni Warner Bros. Records. Z albumu pochodzi pięć singli: "Guilty All The Same", "Until It\'s Gone", "Wastelands", "Rebellion" i "Final Masquerade". Na tym albumie zespół powrócił do cięższego, rockowego brzmienia, odchodząc od muzyki opartej w większym stopniu na elektronice, charakterystycznej dla wcześniejszych wydawnictw, takich jak A Thousand Suns i Living Things. Album zadebiutował na 3. miejscu amerykańskiej listy Billboard 200, stając się pierwszym albumem studyjnym Linkin Park od czasu Hybrid Theory, który nie zadebiutował na szczycie tego zestawienia.',
      },
      oneMoreLight: {
        description: 'One More Light to siódmy album studyjny Linkin Park. Stanowi odejście od ciężkiego brzmienia znanego z The Hunting Party. Po raz pierwszy w historii zespołu proces tworzenia utworów rozpoczynał się od partii wokalnych. Jest to również pierwszy album Linkin Park, którego tytuł pochodzi od nazwy jednego z utworów. One More Light jest także ostatnim albumem zespołu wydanym za życia Chestera Benningtona.',
      },
      fromZero: {
        description: 'From Zero to ósmy album studyjny Linkin Park, wydany 15 listopada 2024 roku. Jest to pierwszy album zespołu nagrany bez udziału Chestera Benningtona, który zmarł w 2017 roku, oraz Roba Bourdona, który opuścił zespół w latach 2022–2023. Jednocześnie jest to pierwszy album, na którym pojawili się nowi członkowie zespołu: Emily Armstrong (wokal) oraz Colin Brittain (perkusja, współprodukcja).',
      },
      aThousandSuns: {
        description: 'A Thousand Suns to czwarty album studyjny amerykańskiego zespołu rockowego Linkin Park, wydany 8 września 2010 roku nakładem wytwórni Warner Bros. Records. Z albumu pochodzą cztery single: "The Catalyst", "Waiting For The End", "Burning In The Skies" i "Iridescent". Na tym albumie zespół kontynuował eksperymenty muzyczne zapoczątkowane na Minutes To Midnight. Jest to również pierwszy album koncepcyjny w dorobku Linkin Park. Album zadebiutował na 1. miejscu list przebojów, stając się czwartym z rzędu albumem zespołu, który osiągnął szczyt notowań.',
      },
      minutesToMidnight: {
        description: 'Minutes To Midnight to trzeci album studyjny amerykańskiego zespołu rockowego Linkin Park, wydany 14 maja 2007 roku nakładem wytwórni Warner Bros. Records. Z albumu pochodzi pięć singli: "What I\'ve Done", "Bleed It Out", "Shadow Of The Day", "Given Up" i "Leave Out All The Rest". Na tym albumie zespół odszedł od swojego charakterystycznego brzmienia nu-metalowego i po raz pierwszy na tak dużą skalę zaczął eksperymentować z różnymi gatunkami muzycznymi. Album zadebiutował na 1. miejscu list przebojów, stając się trzecim z rzędu albumem zespołu, który osiągnął szczyt notowań.',
      },
      source: 'Źródło',
    },
    en: {
      message: {
        hello: 'こんにちは、世界',
      },
      newsFeed: { loading: 'Loading news…', error: 'Could not load news.', retry: 'Try again', empty: 'No news yet.', stale: 'Showing previously fetched posts. Updates are temporarily unavailable.', more: 'Show more' },
      siteMenu: {
        news: 'News',
        aboutBand: 'About band',
        discography: 'Discography',
        aboutSite: 'About Site',
      },
      EnumRouteName: {
        news: 'News',
        aboutBand: 'About band',
        discography: 'Discography',
        aboutSite: 'About Site',
        home: 'Main site',
        studioAlbums: 'Studio albums',
        hybridTheory: 'Hybrid Theory',
        meteora: 'Meteora',
        minutesToMidnight: 'Minutes To Midnight',
        aThousandSuns: 'A Thousand Suns',
        livingThings: 'Living Things',
        theHuntingParty: 'The Hunting Party',
        oneMoreLight: 'One More Light',
        fromZero: 'From Zero',
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
      livingThings: {
        description: 'Living Things (stylized as LIVING THINGS) is American rock band Linkin Park\'s fifth studio album, released on June 26, 2012 through Warner Bros. Records. Three singles were released from the record: "Burn It Down", "Lost In The Echo", and "Castle Of Glass". Though they were not official singles, "Lies Greed Misery", "Powerless", and "I\'ll Be Gone" were all released as promotional singles. The band combined elements of the previous four albums to create the sound for Living Things, as they finally felt comfortable with where they were as a band. The album debuted at #1 on the charts, making it the band\'s fifth consecutive #1 record.',
      },
      theHuntingParty: {
        description: 'TThe Hunting Party is American rock band Linkin Park\'s sixth studio album, released on June 17, 2014 through Warner Bros. Records. Five singles were released from the record: "Guilty All The Same", "Until It\'s Gone", "Wastelands", "Rebellion", and "Final Masquerade". The album sees the band recording heavier rock music than what they had done on their more recent releases like A Thousand Suns and Living Things, which opted for a more electronic based sound. The album debuted at #3 on the US Billboard 200 charts, making it the first studio album released by Linkin Park to not debut at #1 on that chart since Hybrid Theory.',
      },
      oneMoreLight: {
        description: 'One More Light is the seventh studio album by Linkin Park. It marks a departure from the heavy sound of The Hunting Party, the first time the band has written songs starting from the vocals, and the first Linkin Park album to be titled after a song. It was also the final album released with Chester Bennington.',
      },
      fromZero: {
        description: 'From Zero is the eighth studio album by Linkin Park, released on November 15, 2024. From Zero is the first Linkin Park album to not feature Chester Bennington, after his passing in 2017, and Rob Bourdon, following his departure from the band in 2022-2023, while being the first to feature new band members Emily Armstrong (vocals) and Colin Brittain (drums, co-producer).',
      },
      aThousandSuns: {
        description: 'A Thousand Suns is American rock band Linkin Park\'s fourth studio album, released on September 8, 2010 through Warner Bros. Records. Four singles were released from the record: "The Catalyst", "Waiting For The End", "Burning In The Skies", and "Iridescent". The album sees the band continue the experimentation that began with Minutes To Midnight, and is the band\'s first concept album. The album debuted at #1 on the charts, making it the band\'s fourth consecutive #1 record.',
      },
      minutesToMidnight: {
        description: 'Minutes To Midnight is American rock band Linkin Park\'s third studio album, released on May 14, 2007, through Warner Bros. Records. It spawned five singles: "What I\'ve Done", "Bleed It Out", "Shadow Of The Day", "Given Up", and "Leave Out All The Rest". The album sees the band\'s departure from their signature nu-metal sound, and is the first to feature the band\'s big experimentation with genres. The album debuted at #1 on the charts, making it the band\'s third consecutive #1 record.',
      },
      source: 'Source',
    },
  },
});
const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(i18n);
registerPlugins(app);
app.mount('#app');
