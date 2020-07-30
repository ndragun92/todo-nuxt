import { project } from './config/project.js'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/todo-nuxt/'
  }
} : {}

export default {
  ...routerBase,
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: project.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: project.description
      },
      {
        hid: 'og:og:title',
        name: 'og:og:title',
        content: project.name
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: project.description
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: project.url
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: project.ogImage
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: project.favicon }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/bootstrap-icons.js' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  manifest: {
    title: project.name,
    name: project.name,
    description: project.description,
    lang: project.lang,
    theme_color: project.themeColor
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
