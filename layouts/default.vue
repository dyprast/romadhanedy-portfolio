<template>
    <div class="container mx-auto px-4">
    	<Header/>
      <Nuxt/> 
    </div>
</template>

<script>

    import Header from '@/components/Header'

    export default {
        colorMode: 'dark',
        components: {
            Header
        },
    }
</script>

<style scoped>

</style>