<template>
    <Hero/>
</template>

<script>
    import Hero from '@/components/Hero'

    export default {
        components: {
            Hero
        },
        mounted() {
            this.$store.commit("INITIAL_PAGE", {
                page: "home",
                title: "Romadhan Prasetyo"
            });
        },
    }
</script>