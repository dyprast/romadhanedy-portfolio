export default {
  ssr: false,
  target: "static",
  head: {
    title: "Romadhan Prasetyo | Dyprast",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" },
		]
  },
  css: ["~/assets/css/global.css"],

  components: true,
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/date-fns'
  ],
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],
  env: {
		API_PORTFOLIO: "https://raw.githubusercontent.com/romadhanedymyid/databasejson/master",
		API_EMAIL: "https://romadhanedymyid.herokuapp.com"
	}
};
