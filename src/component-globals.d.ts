import type { Emitter } from 'mitt';
import type { VueI18n } from 'vue-i18n';
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: VueI18n['t'];
    $i18n: VueI18n;
    $router: Router;
    $route: RouteLocationNormalizedLoaded;
    emitter: Emitter<Record<string | symbol, unknown>>;
  }
}

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: {
      init(options: { appId: string; xfbml: boolean; version: string }): void;
      api(path: string, callback: (response: { error?: unknown; data?: unknown[] }) => void): void;
    };
  }
}
export {};
