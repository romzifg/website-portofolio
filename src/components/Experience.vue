<template>
	<section id="experience" class="py-24 relative scroll-mt-20">
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div class="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
		</div>

		<div class="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
			<!-- Header -->
			<header
				ref="targetRef"
				class="text-center mb-12 md:mb-16 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
			>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Work <span class="text-gradient">Experience</span></h2>
				<p class="text-gray-400 text-base md:text-lg">My professional journey</p>
			</header>

			<!-- Timeline -->
			<div class="space-y-6 md:space-y-8" role="list">
				<article
					v-for="(exp, index) in experiences"
					:key="exp.id || `exp-${index}`"
					class="relative pl-6 md:pl-8 border-l-2 border-primary-500/30 hover:border-primary-500 transition-all duration-300 group"
					:class="{
						'opacity-0 translate-x-8': !isVisible,
						'opacity-100 translate-x-0': isVisible,
					}"
					:style="{
						transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
						transitionDuration: '700ms',
					}"
					role="listitem"
				>
					<!-- Timeline Dot -->
					<div
						class="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full group-hover:scale-125 transition-transform glow"
						aria-hidden="true"
					></div>

					<!-- Content Card -->
					<div class="glass p-5 md:p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
						<!-- Header -->
						<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4 mb-4">
							<div class="flex-1 min-w-0">
								<h3 class="text-xl md:text-2xl font-display font-bold text-gray-100 mb-1 truncate">
									{{ exp.title }}
								</h3>
								<p class="text-primary-400 font-semibold text-sm md:text-base">
									{{ exp.company }}
								</p>
							</div>
							<time
								class="inline-flex px-3 md:px-4 py-1.5 bg-primary-500/20 text-primary-300 rounded-full text-xs md:text-sm font-medium whitespace-nowrap shrink-0"
								:datetime="formatDatetime(exp.period)"
							>
								{{ exp.period }}
							</time>
						</div>

						<!-- Description -->
						<p v-if="exp.description" class="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
							{{ exp.description }}
						</p>

						<!-- Achievements/Responsibilities -->
						<ul
							v-if="exp.achievements && exp.achievements.length"
							class="text-gray-400 text-sm md:text-base mb-4 space-y-1 list-disc list-inside"
						>
							<li v-for="(achievement, idx) in exp.achievements" :key="`achievement-${idx}`" class="leading-relaxed">
								{{ achievement }}
							</li>
						</ul>

						<!-- Tech Stack -->
						<div v-if="exp.tech && exp.tech.length" class="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
							<span
								v-for="tech in exp.tech"
								:key="tech"
								class="inline-block px-3 py-1 bg-dark-800/80 rounded-lg text-xs md:text-sm font-medium text-gray-300 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
								role="listitem"
							>
								{{ tech }}
							</span>
						</div>
					</div>
				</article>
			</div>

			<!-- Empty State -->
			<div v-if="!experiences || experiences.length === 0" class="text-center py-12 text-gray-500">
				<p class="text-lg">No experience data available</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from "vue";
import { useIntersectionObserver } from "../composables/useIntersectionObserver";

const props = defineProps({
	experiences: {
		type: Array,
		required: true,
		default: () => [],
		validator: (value) => {
			return value.every((exp) => exp.title && exp.company && exp.period && (!exp.tech || Array.isArray(exp.tech)));
		},
	},
});

const { isVisible, targetRef } = useIntersectionObserver({
	threshold: 0.1,
	rootMargin: "0px 0px -100px 0px",
});

// Format period for datetime attribute (SEO & Accessibility)
const formatDatetime = (period) => {
	// Example: "2020 - 2023" -> "2020/2023"
	// Adjust based on your date format
	return period.replace(/\s*-\s*/g, "/");
};

// Computed property for checking if experiences exist
const hasExperiences = computed(() => props.experiences && props.experiences.length > 0);
</script>

<style scoped>
/* Smooth transition utilities */
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

.translate-x-8 {
	transform: translateX(2rem);
}

.translate-x-0 {
	transform: translateX(0);
}

/* Timeline glow effect */
.glow {
	box-shadow: 0 0 20px rgba(var(--primary-rgb, 59, 130, 246), 0.5);
}

/* Responsive timeline border */
@media (max-width: 640px) {
	.border-l-2 {
		border-left-width: 1.5px;
	}
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
</style>
