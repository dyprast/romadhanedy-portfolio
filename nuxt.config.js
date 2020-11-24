export default {
  ssr: false,
  target: "static",
  head: {
    title: "Romadhan Edy Prasetyo",
    meta: [
      { charset: "utf-8" },
      { name: "google-site-verification", content: "w2tKgPWu24ur4xsvhTai56PK_2EU4nM5wLk0gy4QAe8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Web developer and creator of the open source Nuxt Stisla." }
    ],
    link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" },
		]
  },
  css: ["~/assets/css/global.css"],
  plugins: [
    { src: '~/plugins/awesomeConsole', ssr: false}
  ],
  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/date-fns'
  ],
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ]
};
