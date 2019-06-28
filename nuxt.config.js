
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  
  loading: { color: '#fff' },
  
  css: [
    '@/assets/css/main.css',
    '@/assets/css/animated.css',
  ],
  
  plugins: [
    '~/plugins/axios',
    '~/plugins/mixins/toast',
    '~/plugins/mixins/getErrors',
    '~/plugins/mixins/getUser',
    '~/plugins/helpers/retrieveWeek',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-dayjs-module',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',  
    '@nuxtjs/toast',  
    '@nuxtjs/auth',  
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],
  toast: {
    position: 'bottom-center',
    keepOnHover: true,
    duration: 3000
  },
  manifest: {
    name: 'TodoApp',
    short_name: 'Nuxt_laravel',
    lang: 'en',
    description: 'Simple todo app for learning purpose, built on laravel api and nuxt',
    theme_color: '#188269',
    background_color: '#fff',
    icons: '/icon.png',
    display: 'standalone',
    start_url: 'https://gifted-borg-5b68d2.netlify.com/',
    theme_color: '#da552f',
  },

  axios: {
    baseURL: 'https://fathomless-gorge-19280.herokuapp.com/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/login', method: "post", propertyName: 'token'},
          user: {url: 'user', method: 'get', propertyName: 'data'},
          logout: { url: '/logout', method: 'get'}
        }
      }
    },
    redirect: {
      login: '/',
      home: '/'
    },
    plugins: [
      './plugins/auth'
    ]
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
