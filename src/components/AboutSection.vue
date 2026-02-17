<template>
	<section id="about" class="py-16 sm:py-24 scroll-mt-20">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<article class="glass p-6 sm:p-8 md:p-12 rounded-2xl">
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6 text-center">
					About <span class="text-gradient">Me</span>
				</h2>

				<p class="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
					Software Engineer with 4+ years of experience in web and mobile application development, with a strong emphasis on backend
					systems, RESTful APIs, and database optimization. Experienced in building scalable and maintainable applications using Golang,
					JavaScript, React, and Flutter. In addition to application development, I have hands-on experience with data-related engineering
					tasks such as data modeling, SQL-based data processing, and preparing data for analytics and reporting. Strong analytical
					background in Mathematics with interest in data engineering and data-driven systems.
				</p>

				<div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
					<div v-for="stat in stats" :key="stat.label" class="text-center p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors">
						<div class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-1 sm:mb-2">
							{{ stat.value }}
						</div>
						<div class="text-gray-400 text-xs sm:text-sm md:text-base leading-tight">
							{{ stat.label }}
						</div>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<script setup>
defineProps({
	stats: {
		type: Array,
		required: true,
		validator: (value) => value.every((stat) => stat.value && stat.label),
	},
});
</script>
