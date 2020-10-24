<template>
    <div>
        <Hero/>

        <PortfolioContent/>

        <!-- <Contact/> -->
    </div>
</template>

<script>
    import Hero from '@/components/Hero'
    import PortfolioContent from '@/components/PortfolioContent'
    import Contact from '@/components/Contact'

    export default {
        components: {
            Hero, PortfolioContent, Contact
        }
    }
</script>