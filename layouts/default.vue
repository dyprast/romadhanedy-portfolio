<template>
  <div class="relative">
    <Header />

    <main>
      <Nuxt />
    </main>

    <Footer />

    <Wave class="gl-wave sm: hidden md:block" />
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