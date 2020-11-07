<template>
  <div class="relative">
    <Header />

    <main>
      <Nuxt />
    </main>

    <!-- <Footer /> -->

    <Wave class="gl-wave"/>
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
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