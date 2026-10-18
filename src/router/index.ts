import { EnumRouteName } from '@/enum/EnumRouteName';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: EnumRouteName.HOME,
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/about-band',
      name: EnumRouteName.ABOUT_BAND,
      component: () => import('@/pages/about-band.vue'),
    },
    {
      path: '/about-site',
      name: EnumRouteName.ABOUT_SITE,
      component: () => import('@/pages/about-site.vue'),
    },
    {
      path: '/discography',
      name: EnumRouteName.DISCOGRAPHY,
      component: () => import('@/pages/discography/index.vue'),
    },
    {
      path: '/studio-albums',
      name: EnumRouteName.STUDIO_ALBUMS,
      component: () => import('@/pages/discography/studio-albums/index.vue'),
    },
    {
      path: '/hybrid-theory',
      name: EnumRouteName.HYBRID_THEORY,
      component: () => import('@/pages/discography/studio-albums/hybrid-theory.vue'),
    },
    {
      path: '/meteora',
      name: EnumRouteName.METEORA,
      component: () => import('@/pages/discography/studio-albums/meteora.vue'),
    },
    {
      path: '/minutes-to-midnight',
      name: EnumRouteName.MINUTES_TO_MIDNIGHT,
      component: () => import('@/pages/discography/studio-albums/minutes-to-midnight.vue'),
    },
    {
      path: '/a-thousand-suns',
      name: EnumRouteName.A_THOUSAND_SUNS,
      component: () => import('@/pages/discography/studio-albums/a-thousand-suns.vue'),
    },
    {
      path: '/living-things',
      name: EnumRouteName.LIVING_THINGS,
      component: () => import('@/pages/discography/studio-albums/living-things.vue'),
    },
    {
      path: '/the-hunting-party',
      name: EnumRouteName.THE_HUNTING_PARTY,
      component: () => import('@/pages/discography/studio-albums/the-hunting-party.vue'),
    },
    {
      path: '/one-more-light',
      name: EnumRouteName.ONE_MORE_LIGHT,
      component: () => import('@/pages/discography/studio-albums/one-more-light.vue'),
    },
    {
      path: '/from-zero',
      name: EnumRouteName.FROM_ZERO,
      component: () => import('@/pages/discography/studio-albums/from-zero.vue'),
    },
  ],
});


// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
