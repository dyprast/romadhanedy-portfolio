<template>
  <div class="pt-8 md:pt-5">
    <div class="container mx-auto px-4">
      <header class="max-w-container-max-width m-auto h-14 md:h-20">
        <div class="h-full flex flex-wrap items-center justify-center md:justify-between">
          <h1
            class="text-2xl md:text-3xl leading-base font-bold body-weight lowercase md:text-six md:leading-six"
          >
            <nuxt-link to="/">
              <span class="align-middle gl-heading-stroke" :data-title="pages.title">{{ pages.title }}</span>
            </nuxt-link>
          </h1>
          <div class="flex item-center mt-8 md:mt-0">
            <nuxt-link to="/" class="text-lg px-4 gl-link" :class="menu('home')">Home</nuxt-link>
            <nuxt-link to="/projects" class="text-lg px-4 gl-link" :class="menu('projects')">Projects</nuxt-link>
            <nuxt-link to="/skills" class="text-lg px-4 gl-link" :class="menu('skills')">Skills</nuxt-link>
            <!-- <nuxt-link to="/" class="text-lg px-4 gl-link" :class="menu('contact')">Contact</nuxt-link> -->
            <button
              v-if="colorMode_ === 'dark'"
              @click="changeColorMode('light')"
              class="focus:outline-none ml-5 text-4xl uppercase"
              style="margin-top: -5px"
            >
              <IconMoon/>
            </button>
            <button
              v-else-if="colorMode_ === 'light'"
              @click="changeColorMode('dark')"
              class="focus:outline-none ml-5 text-4xl uppercase"
              style="margin-top: -5px"
            >
              <IconSun/>
            </button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconSun from '@/components/Icons/Sun'
import IconMoon from '@/components/Icons/Moon'
export default {
	computed: {
    ...mapState({ pages: (state) => state.pages }),
  },
	components: {
		IconSun, IconMoon
	},
	mounted() {
		this.getTitle()
		this.getCurrentColorMode()
	},
	data() {
		return {
			title: '',
			colorMode_: ''
		}
	},
  methods: {
		getTitle() {
			const title = this.pages.title
			this.title = title
		},
		getCurrentColorMode() {
			const currentMode = this.$colorMode.value
			this.colorMode_ = currentMode
		},
    changeColorMode(colorMode) {
      if (colorMode) {
				this.colorMode_ = colorMode
        this.$colorMode.preference = colorMode;
      }
		},
		menu(menuName) {
      const name = menuName,
        current_page = this.pages.current_page;
        if (name == current_page) {
          return "active";
        }
        return "";
    },
  },
};
</script>