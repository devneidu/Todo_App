
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
    '@/assets/css/main.css'
  ],
  
  plugins: [
    '~/plugins/axios',
    '~/plugins/mixins/toast',
    '~/plugins/mixins/getErrors',
    '~/plugins/mixins/getUser',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
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

  axios: {
    baseURL: 'http://todoapp.test/api'
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
