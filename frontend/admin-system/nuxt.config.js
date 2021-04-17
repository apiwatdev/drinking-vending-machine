require("dotenv").config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "machine",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500;1,600&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/google-maps", ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/auth-next"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  },

  server: {
    port: 3000 // default: 3000
  },

  styleResources: {
    scss: ["~assets/scss/_colors.scss"]
  },

  axios: {
    proxy: true
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  proxy: {
    "/api/": { target: "http://localhost:3001", pathRewrite: { "^/api/": "" } }
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "access_token"
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "username"
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/api/auth/login", method: "post" },
          logout: false,
          user: { url: "/api/auth/profile", method: "get" }
        }
      }
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/"
    }
  }
};
