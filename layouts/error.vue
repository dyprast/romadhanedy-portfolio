<template>
    <section class="mt-16">
        <div class="container mx-auto px-4">
            <div class="text-center">
                <h1 v-if="error.statusCode === 404" class="text-3xl">Page not found</h1>
                <h1 v-else class="text-3xl">An error occurred</h1>
                <br>
                <nuxt-link to="/">Home page</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blank'
  }
</script>