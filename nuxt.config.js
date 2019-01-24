const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ccc' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/normalize.css',
    '@/assets/typography.css',
    '@/assets/grid.css',
    '@/assets/decorator.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  //workbox: {
    // offlineAssets:[
    //   '_nuxt/*'
    // ],
    // offlinePage:[
    //   '/.*'
    // ],
    // cachingExtensions:'workbox.precaching.*',
    // routingExtensions:'workbox.routing.*'
    // Workbox options
  //},
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
