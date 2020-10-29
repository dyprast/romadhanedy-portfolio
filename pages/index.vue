<template>
    <div>
        <Hero/>

        <section id="section-portfolio">
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-base leading-base body-weight"><span class="text-xl font-bold">portfolio.</span></h1>
                <div class="mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <CardPortfolio v-for="(item, index) in portfolios" :key="index"
                        :technologies="item.technologies"
                        :screenshoot="require(`~/assets/img/${item.screenshoot}`)"
                        :category="item.category"
                        :name="item.name"
                        :description="item.description"
                        :link="item.link"
                    />
                </div>
                <div class="mt-8 text-center w-full">
                    <a href="javascript:void(0)" class="gl-btn text-sm border p-3 mt-3 light-text-black dark-text-white border-indigo-400 bg-transparent hover:bg-indigo-400 transition duration-500 ease-in-out" @click="viewPortfolioStatus()">
                        <span v-if="!portfolioViewStatus">View More</span>
                        <span v-else>View Less</span>
                    </a>
                </div>
            </div>
        </section>

        <section id="section-skills">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-base leading-base body-weight">
                <span class="text-xl font-bold">my skills.</span>
            </h1>
            <div class="my-16">
                <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
                    <CardSkills v-for="(item, index) of skills" :key="index"
                        :icon_class="item.icon_class"
                        :icon_img="item.icon_img"
                        :name="item.name"
                        :exp="item.exp"
                    />
                </div>
            </div>
        </div>
        </section>
        
    </div>
</template>

<script>
    import Hero from '@/components/Hero'
    import CardSkills from '@/components/Cards/Skills'
    import CardPortfolio from '@/components/Cards/Portfolio'

    export default {
        components: {
            Hero, CardSkills, CardPortfolio
        },
        data() {
            return {
                portfolios: [],
                portfoliosStore: [],
                portfolioViewStatus: false,
                skills: []
            }
        },
        mounted() {
            this.getPortfolio()
            this.getSkills()
        },
        methods: {
            async getPortfolio() { 
                try{
                    const portfolioStore = this.$store.state.portfolios
                    
                    this.portfolios = portfolioStore.slice(0, 4)
                    this.portfoliosStore = portfolioStore
                }
                catch(err){
                    this.portfolios = []
                    console.error(err)
                }
            },
            viewPortfolioStatus() {
                if (this.portfolioViewStatus) {
                    this.portfolioViewStatus = false
                    this.portfolios = this.portfoliosStore.slice(0, 4)
                }
                else {
                    this.portfolioViewStatus = true
                    this.portfolios = this.portfoliosStore
                }
            },
            async getSkills() {
                const skillsStore = this.$store.state.skills
                this.skills = skillsStore
            }
        }
    }
</script>