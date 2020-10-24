<template>
  <div class="relative">
    <Header />

    <main>
      <Nuxt />
    </main>

    <Footer class="mt-32" />

    <Wave class="gl-wave" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

export default {
  components: {
    Header,
    Footer,
    Wave,
  },
};
</script>

<style scoped>
</style>