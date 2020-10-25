<template>
    <div class="my-24 mb-48 bg-gray-300">
        <section>
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-xl leading-base font-bold body-weight">
                    get in touch.
                </h1>
                <div class="mt-8">
                    <div class="illustrations-under-construction"></div>
                </div>
                <!-- <div class="mt-8">
                    <form @submit.prevent="submitContactForm">
                        <div>
                            <div class="col-sm-4 col-xs-12 p5">
                                <input type="text" name="name" placeholder="Name" required v-model="contact.name">
                                <input type="email" name="email" placeholder="Email" required v-model="contact.email">
                            </div>
                            <div class="col-sm-7  col-xs-12 p5">
                                <textarea name="text" cols="30" rows="10" placeholder="Message" required v-model="contact.message"></textarea>
                            </div>
                            <div class="col-sm-1 col-xs-12 p5">
                                <button type="submit" class="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div> -->
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoadingData: false,
                isSuccessData: false,
                isFailedData: false,
                contact: []
            }
        },
        methods: {
            validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(String(email).toLowerCase())
            },
            async submitContactForm() {
                this.isLoadingData 	= true
                try {
                    const checkValidEmail = this.validateEmail(this.contact.email)
    
                    if (checkValidEmail) {
                        let data = {
                            recipient: this.contact.email,
                            subject: "romadhanedy.my.id",
                            params: {
                                bodyName: this.contact.name,
                                bodyMessage: this.contact.message
                            }
                        }
    
                        const postForm      = await this.$store.dispatch('email/post', data)
                        this.isLoadingData 	= false
    
                        if (postForm.data.code === 200) {
                            this.contact        = [] 
                            this.isSuccessData  = true
                        }
                        else {
                            this.isLoadingData  = false
                            this.isFailedData   = true
                        }
                    }
                    else {
                        this.isLoadingData  = false
                        this.isFailedData   = true
                    }
                }
                catch (err) {
                    this.isLoadingData  = false
                    this.isFailedData   = true
                }
            },
            hideSuccessNotif() {
                this.isSuccessData = false
            },
            hideFailedNotif() {
                this.isFailedData = false
            }
        }
    }
</script>

<style scoped>

</style>