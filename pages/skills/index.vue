<template>
    <section id="section-skills">
    <div class="container mx-auto px-4 pb-24 md:pb-64">
        <div class="my-16 pb-24">
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
</template>

<script>
    import CardSkills from '@/components/Cards/Skills'

    export default {
        components: {
            CardSkills
        },
        data() {
            return {
                skills: []
            }
        },
        mounted() {
            this.$store.commit("INITIAL_PAGE", {
                page: "skills",
                title: "Skiils"
            });
            this.getSkills()
        },
        methods: {
            async getSkills() {
                const skillsStore = this.$store.state.skills
                this.skills = skillsStore
            }
        }
    }
</script>