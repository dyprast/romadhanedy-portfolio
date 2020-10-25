<template>
    <div class="mt-24 mb-8">
        <section>
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-base leading-base body-weight"><span class="text-xl font-bold">portfolio.</span></h1>
                <div class="mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div v-for="item in portfolios" :key="item.id" class="overflow-hidden border">
                        <img class="w-full" :src="item.screenshoot" :alt="item.name">
                        <div class="px-4 py-2">
                            <div class="font-bold text-xl mb-2">{{ item.name }}</div>
                            <p class="text-gray-700 text-sm">
                                {{ item.description }}
                            </p>
                            <p class="text-gray-700 text-sm mt-2">
                                Tech: {{ item.technology }}
                            </p>
                            <div class="my-5">
                                <a v-if="item.link" :href="item.link" target="blank" class="gl-btn text-sm border p-3 mt-3 text-black bg-indigo-300 hover:bg-indigo-400 transition duration-500 ease-in-out">Demo / Source</a>
                                <a v-else href="javascript:void(0)" class="gl-btn text-sm border p-3 mt-3 text-black bg-indigo-100 hover:bg-indigo-200 transition duration-500 ease-in-out">Demo / Source</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-center w-full">
                    <a href="javascript:void(0)" class="gl-btn text-sm border p-3 mt-3 light-text-black dark-text-white border-indigo-400 bg-transparent hover:bg-indigo-400 transition duration-500 ease-in-out">View Details</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoadingData: false,
                portfolios: []
            }
        },
        mounted() {
            this.getPortfolio()
        },
        methods: {
            sortJSON() {

            },
            async getPortfolio() { 
                try{
                    this.isLoadingData 	= true
                    const getAll		= await this.$store.dispatch('portfolio/index')
                    this.isLoadingData 	= false
                    
                    this.portfolios     = getAll.data
                }
                catch(err){
                    this.portfolios     = []
                    this.isLoadingData  = false
                    console.error(err)
                }
            },
        }
    }
</script>

<style scoped>

</style>