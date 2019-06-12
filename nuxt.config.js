
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
 proxy:{
  '/api/*':'http://localhost:8000'
 },
 webfontloader: {
  google: {
    families: ['Roboto:300,400,700'] //Loads Lato font with weights 400 and 700
  }
},

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }  
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'pretty-checkbox/dist/pretty-checkbox.css',
    '@/assets/global.css',
    'animate.css/animate.css',
    '@/assets/math.css',

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/bus',
    '~/plugins/lodash',
    '~/plugins/circularTimer',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-material-design-icons',
    'nuxt-webfontloader',
    '@nuxtjs/proxy'

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
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
