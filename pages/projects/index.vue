<template>
    <section id="section-portfolio" class="pd-0 md:pb-48">
        <div class="container mx-auto px-4 pb-64">
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
            <div class="mt-16 text-center w-full">
                <a href="javascript:void(0)" class="gl-btn text-sm border p-3 mt-3 light-text-black dark-text-white border-indigo-400 bg-transparent hover:bg-indigo-400 transition duration-500 ease-in-out" @click="viewPortfolioStatus()">
                    <span v-if="!portfolioViewStatus">View More</span>
                    <span v-else>View Less</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import CardPortfolio from '@/components/Cards/Portfolio'

    export default {
        components: {
            CardPortfolio
        },
        data() {
            return {
                portfolios: [],
                portfoliosStore: [],
                portfolioViewStatus: false
            }
        },
        mounted() {
            this.$store.commit("INITIAL_PAGE", {
                page: "projects",
                title: "Projects"
            });
            this.getPortfolio()
        },
        methods: {
            async getPortfolio() { 
                try{
                    const portfolioStore = this.$store.state.portfolios
                    
                    this.portfolios = portfolioStore.slice(0, 8)
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
                    this.portfolios = this.portfoliosStore.slice(0, 8)
                }
                else {
                    this.portfolioViewStatus = true
                    this.portfolios = this.portfoliosStore
                }
            }
        }
    }
</script>