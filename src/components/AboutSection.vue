<template>
	<section id="about" class="py-16 sm:py-24 scroll-mt-20">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<article class="glass p-6 sm:p-8 md:p-12 rounded-2xl">
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6 text-center">
					About <span class="text-gradient">Me</span>
				</h2>

				<!-- Bio — lebih natural, tidak generik -->
				<p class="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
					{{ bio }}
				</p>

				<!-- Personal cards — lebih mencerminkan karakter -->
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
					<div
						v-for="card in personalCards"
						:key="card.label"
						class="flex flex-col gap-1.5 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
					>
						<span class="text-xl sm:text-2xl" aria-hidden="true">{{ card.icon }}</span>
						<span class="text-xs sm:text-sm text-primary-400 font-semibold tracking-wide uppercase">{{ card.label }}</span>
						<span class="text-sm sm:text-base text-gray-300 font-medium leading-snug">{{ card.value }}</span>
					</div>
				</div>
			</article>
		</div>
	</section>
</template>

<script setup>
defineProps({
	bio: {
		type: String,
		required: true,
	},
	personalCards: {
		type: Array,
		required: true,
		validator: (value) => value.every((card) => card.icon && card.label && card.value),
	},
});
</script>
