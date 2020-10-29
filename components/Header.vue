<template>
  <div class="pt-5 md:pt-0">
    <div class="container mx-auto px-4">
      <header class="max-w-container-max-width m-auto h-14 md:h-20">
        <div class="h-full flex items-center justify-between">
          <h1
            class="text-xl leading-base font-bold body-weight lowercase md:text-six md:leading-six"
          >
            <nuxt-link to="/">
              <span class="align-middle">Romadhan.</span>
            </nuxt-link>
          </h1>
					<div>
						<div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
							<span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Info</span>
							<span class="font-semibold mr-2 text-left flex-auto">this website is under construction</span>
						</div>
					</div>
          <div class="flex item-center">
            <button
              v-if="colorMode_ === 'dark'"
              @click="changeColorMode('light')"
              class="focus:outline-none text-4xl uppercase"
            >
              <IconDark/>
            </button>
            <button
              v-else-if="colorMode_ === 'light'"
              @click="changeColorMode('dark')"
              class="focus:outline-none text-4xl uppercase"
            >
              <IconLight/>
            </button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import IconLight from '@/components/IconLight'
import IconDark from '@/components/IconDark'
export default {
	mounted() {
		this.getCurrentColorMode()
	},
	data() {
		return {
			colorMode_: ''
		}
	},
	components: {
		IconLight, IconDark
	},
  methods: {
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
  },
};
</script>