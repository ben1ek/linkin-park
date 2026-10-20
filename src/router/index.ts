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
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.ABOUT_BAND],
      },
    },
    {
      path: '/about-site',
      name: EnumRouteName.ABOUT_SITE,
      component: () => import('@/pages/about-site.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.ABOUT_SITE],
      },
    },
    {
      path: '/discography',
      name: EnumRouteName.DISCOGRAPHY,
      component: () => import('@/pages/discography/index.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY],
      },
    },
    {
      path: '/studio-albums',
      name: EnumRouteName.STUDIO_ALBUMS,
      component: () => import('@/pages/discography/studio-albums/index.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS],
      },
    },
    {
      path: '/hybrid-theory',
      name: EnumRouteName.HYBRID_THEORY,
      component: () => import('@/pages/discography/studio-albums/hybrid-theory.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.HYBRID_THEORY],
      },
    },
    {
      path: '/meteora',
      name: EnumRouteName.METEORA,
      component: () => import('@/pages/discography/studio-albums/meteora.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.METEORA],
      },
    },
    {
      path: '/minutes-to-midnight',
      name: EnumRouteName.MINUTES_TO_MIDNIGHT,
      component: () => import('@/pages/discography/studio-albums/minutes-to-midnight.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.MINUTES_TO_MIDNIGHT],
      },
    },
    {
      path: '/a-thousand-suns',
      name: EnumRouteName.A_THOUSAND_SUNS,
      component: () => import('@/pages/discography/studio-albums/a-thousand-suns.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.A_THOUSAND_SUNS],
      },
    },
    {
      path: '/living-things',
      name: EnumRouteName.LIVING_THINGS,
      component: () => import('@/pages/discography/studio-albums/living-things.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.LIVING_THINGS],
      },
    },
    {
      path: '/the-hunting-party',
      name: EnumRouteName.THE_HUNTING_PARTY,
      component: () => import('@/pages/discography/studio-albums/the-hunting-party.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.THE_HUNTING_PARTY],
      },
    },
    {
      path: '/one-more-light',
      name: EnumRouteName.ONE_MORE_LIGHT,
      component: () => import('@/pages/discography/studio-albums/one-more-light.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.ONE_MORE_LIGHT],
      },
    },
    {
      path: '/from-zero',
      name: EnumRouteName.FROM_ZERO,
      component: () => import('@/pages/discography/studio-albums/from-zero.vue'),
      meta: {
        breadcrumbs: [EnumRouteName.HOME, EnumRouteName.DISCOGRAPHY, EnumRouteName.STUDIO_ALBUMS, EnumRouteName.FROM_ZERO],
      },
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
