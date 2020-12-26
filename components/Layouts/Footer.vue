<template>
	<div class="sm:mt-0 md:mt-16 lg:mt-32">
		<div class="container mx-auto px-4 pb-0 md:pb-0">
			<footer class="max-w-container-max-width m-auto sm:h-14 md:h-20">
				<div class="grid sm:grid-cols-1 md:grid-cols-2 items-center">
					<div class="flex justify-start">
						<p class="sm:text-gray-base md:text-white"><span class="font-semibold">© {{ yearNow }}</span> Romadhan Edy Prasetyo</p>
					</div>
                    <ul class="flex justify-end">
                        <li class="mr-2">
                            <a href="mailto:romadhanedy@gmail.com" target="blank" class="sm:text-gray-base md:text-white mr-2"> Email </a>
                            <span class="sm:text-gray-base md:text-white"> | </span>
                        </li>
                        <li class="mr-2">
                            <a href="https://www.linkedin.com/in/romadhan-prasetyo/" target="blank" class="sm:text-gray-base md:text-white mr-2"> Linkedin </a>
                            <span class="sm:text-gray-base md:text-white"> | </span>
                        </li>
                        <li class="">
                            <a href="https://github.com/dyvue" target="blank" class="sm:text-gray-base md:text-white"> GitHub </a>
                        </li>
                    </ul>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            yearNow: this.$dateFns.format(new Date(), 'yyyy')
        }
    }
}
</script>