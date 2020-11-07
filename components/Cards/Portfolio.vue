<template>
    <div class="relative overflow-hidden border bg-white gl-dark-bg-transparent gl-card">
        <div class="relative">
            <div class="absolute gl-overflow"></div>
            <p class="absolute text-gray-700 text-sm mt-2 ml-2 gl-card-category">
                <span class="badge bg-indigo-800 text-white px-2 py-1 text-sm mr-2 mb-2" v-for="(technology,index) in technologies" :key="index">{{ technology }}</span>
            </p>
            <img class="w-full" :src="screenshoot" :alt="name">
        </div>
        <div class="px-4 py-2">
            <div class="font-bold text-xl mb-2">
                {{ name }}
                <span class="text-gray-700 text-sm mt-2">
                    / {{ category.name }}
                </span>
            </div>
            <p class="text-gray-700 text-sm">
                {{ description }}
            </p>
            <div class="my-5">
                <a v-if="link" :href="link" target="blank" class="gl-btn text-sm border p-3 mt-3 text-black bg-indigo-300 hover:bg-indigo-400 transition duration-500 ease-in-out">Demo / Source</a>
                <a v-else href="javascript:void(0)" class="gl-btn text-sm border p-3 mt-3 text-black bg-indigo-100 hover:bg-indigo-200 transition duration-500 ease-in-out">Demo / Source</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            technologies: Array,
            screenshoot: String,
            category: Object,
            name: String,
            description: String,
            link: String
        }
    }
</script>