<template>
  <div class="card px-5 py-5 mb-2 bg-white gl-dark-bg-transparent cursor-pointer">
        <div class="text-center">
            <i v-if="!!icon_class" :class="icon_class" class="text-6xl"></i>
            <img v-if="!!icon_img" :src="icon_img" :alt="name">
            <h5 class="text-xl mt-3 font-bold light:text-gray-800 dark:text-white">
                {{ name }}
            </h5>
            <p>
                <span class="font-bold text-sm">{{ exp }}</span> of experience.
            </p>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        icon_class: String,
        icon_img: String,
        name: String,
        exp: String,
    }
}
</script>