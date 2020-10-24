<template>
    <div>
        <div class="mt-16 gl-readable-line-length">
            <p>Hello! I am Romadhan Prasetyo. I am a web developer. Most of my work is open source available on <a href="https://github.com/dyprast" target="_blank">GitHub</a>.</p>
            <br>
            <p>I also enjoy 🎸.</p>
        </div>
        <div class="mt-24">
            <h1 class="text-2xl font-bold">| PORTFOLIOS</h1>
            <div class="grid grid-cols-3">
                <div v-for="item in 6" :key="item" class="col my-10 mx-5 rounded-3xl shadow-xl mb-4 dark:bg-gray-900 gl-card">
                    <img
                        class="w-full"
                        src="~/assets/img/code_typing.svg"
                        alt="Sample Project"
                    >
                    <div class="px-6 py-4 pb-2">
                        <div class="font-bold text-xl mb-2">Sample Project</div>
                        <p
                        class="text-gray-700 dark:text-gray-300 text-base"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eum!</p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="badge mr-2">#laravel</span>
                        <span class="badge mr-2">#mysql</span>
                        <span class="badge">#stisla</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>