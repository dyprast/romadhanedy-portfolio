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
              v-if="$colorMode.preference === 'dark'"
              @click="changeColorMode('light')"
              class="focus:outline-none text-3xl uppercase"
            >
              🌙
            </button>
            <button
              v-else-if="$colorMode.preference === 'light'"
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
  methods: {
    changeColorMode(colorMode) {
      if (colorMode) {
        this.$colorMode.preference = colorMode;
      }
    },
  },
};
</script>