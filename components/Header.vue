<template>
  <div>
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
            <button
              v-if="colorMode_ === 'dark'"
              @click="changeColorMode('light')"
              class="focus:outline-none text-3xl uppercase"
            >
              🌙
            </button>
            <button
              v-else-if="colorMode_ === 'light'"
              @click="changeColorMode('dark')"
              class="focus:outline-none text-3xl uppercase"
            >
              ☀️
            </button>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			colorMode_: 'dark'
		}
	},
  methods: {
    changeColorMode(colorMode) {
      if (colorMode) {
				this.colorMode_ = colorMode
        this.$colorMode.preference = colorMode;
      }
    },
  },
};
</script>