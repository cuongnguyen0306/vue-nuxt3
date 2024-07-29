export default {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  pages: {
    "/": {
      layout: "login",
    },
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  plugins: ["@/plugins/vuetify.js"],

  devtools: { enabled: false },
};
