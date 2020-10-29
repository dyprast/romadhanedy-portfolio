<template>
    <div>
        <Hero/>

        <!-- <PortfolioContent/> -->

        <SkillsContent/>

        <!-- <Contact/> -->
    </div>
</template>

<script>
    import Hero from '@/components/Hero'
    import SkillsContent from '@/components/SkillsContent'
    import PortfolioContent from '@/components/PortfolioContent'
    import Contact from '@/components/Contact'

    export default {
        components: {
            Hero, SkillsContent, PortfolioContent, Contact
        }
    }
</script>