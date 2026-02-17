<template>
	<section id="skills" class="py-16 sm:py-24 relative overflow-hidden scroll-mt-20">
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div class="absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<!-- Header -->
			<header
				ref="targetRef"
				class="text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
			>
				<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
					Technical <span class="text-gradient">Expertise</span>
				</h2>
				<p class="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Technologies and tools I work with</p>
			</header>

			<!-- Skills Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				<article
					v-for="(skill, index) in skills"
					:key="skill.category"
					class="glass p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
					:class="{
						'opacity-0 translate-y-8': !isVisible,
						'opacity-100 translate-y-0': isVisible,
					}"
					:style="{
						transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
						transitionDuration: '700ms',
					}"
				>
					<h3
						class="text-base sm:text-lg md:text-xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-primary-400 group-hover:text-primary-300 transition-colors"
					>
						{{ skill.category }}
					</h3>

					<ul class="flex flex-wrap gap-2" role="list">
						<li v-for="item in skill.items" :key="item">
							<span
								class="inline-block px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-dark-800/80 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:bg-primary-500/20 hover:text-primary-300 hover:scale-105 transition-all cursor-default"
							>
								{{ item }}
							</span>
						</li>
					</ul>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from "vue";
import { useIntersectionObserver } from "../composables/Useintersectionobserver";

const props = defineProps({
	skills: {
		type: Array,
		required: true,
		validator: (value) => value.every((skill) => skill.category && Array.isArray(skill.items) && skill.items.length > 0),
	},
});

const { isVisible, targetRef } = useIntersectionObserver({
	threshold: 0.1,
	rootMargin: "0px 0px -100px 0px",
});

const skillsCount = computed(() => props.skills.length);
</script>

<style scoped>
.opacity-0 {
	opacity: 0;
}
.opacity-100 {
	opacity: 1;
}
.translate-y-8 {
	transform: translateY(2rem);
}
.translate-y-0 {
	transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
</style>
