export default {
  colorMode: "dark",
  ssr: false,
  target: "static",
  head: {
    title: "Romadhan Prasetyo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["~/assets/css/global.css"],
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],
};
