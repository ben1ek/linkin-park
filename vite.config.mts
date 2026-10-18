// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import svgLoader from 'vite-svg-loader'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import type { Logger } from 'sass'

// Vuetify's virtual entrypoints can bypass Sass quietDeps classification.
const sassLogger: Logger = {
  warn(message, options) {
    const source = options.span?.url?.pathname.replace(/\\/g, '/') ?? ''
    if (options.deprecation && source.includes('/node_modules/vuetify/')) return

    const kind = options.deprecation ? 'Deprecation Warning' : 'Warning'
    console.warn(`${kind}: ${message}`)
    if (options.span) console.warn(options.span.toString())
    if (options.stack) console.warn(options.stack)
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [ {
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    svgLoader(),
  ],
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true, logger: sassLogger },
      sass: { quietDeps: true, logger: sassLogger },
    },
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
