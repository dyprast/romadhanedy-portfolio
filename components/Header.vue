<template>
  <div>
    <header class="max-w-container-max-width m-auto h-14 md:h-20">
      <div class="h-full flex items-center justify-between">
				<h1 class="text-xl font-bold">
					<nuxt-link to="/" class="uppercase">Romadhan Prasetyo</nuxt-link>
				</h1>
        <div>
          <button v-if="colorMode_ === 'dark'" @click="changeColorMode('light')" class="focus:outline-none uppercase">Dark Mode</button>
          <button v-else-if="colorMode_ === 'light'" @click="changeColorMode('dark')" class="focus:outline-none uppercase">Light Mode</button>
        </div>
      </div>
    </header>
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
						console.log(colorMode)
						this.colorMode_ = colorMode
						this.$colorMode.preference = colorMode
					}
				}
			}
    }
</script>