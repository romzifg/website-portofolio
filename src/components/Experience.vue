<template>
	<section id="experience" class="py-16 sm:py-24 relative scroll-mt-20">
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div class="absolute top-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
		</div>

		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<!-- Header -->
			<header
				ref="targetRef"
				class="text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
			>
				<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
					Work <span class="text-gradient">Experience</span>
				</h2>
				<p class="text-gray-400 text-sm sm:text-base md:text-lg">My professional journey</p>
			</header>

			<!-- Timeline -->
			<div class="space-y-5 sm:space-y-6 md:space-y-8" role="list">
				<article
					v-for="(exp, index) in experiences"
					:key="exp.id || `exp-${index}`"
					class="relative pl-5 sm:pl-6 md:pl-8 border-l-2 border-primary-500/30 hover:border-primary-500 transition-all duration-300 group"
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
						class="absolute -left-2 top-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary-500 rounded-full group-hover:scale-125 transition-transform glow"
						aria-hidden="true"
					></div>

					<!-- Content Card -->
					<div class="glass p-4 sm:p-5 md:p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
						<!-- Header -->
						<div class="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
							<!-- Title + Company -->
							<div class="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2">
								<div class="flex-1 min-w-0">
									<h3 class="text-lg sm:text-xl md:text-2xl font-display font-bold text-gray-100 mb-0.5 sm:mb-1 leading-tight">
										{{ exp.title }}
									</h3>
									<p class="text-primary-400 font-semibold text-sm sm:text-base">
										{{ exp.company }}
									</p>
								</div>
								<!-- Period badge -->
								<time
									class="self-start inline-flex px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-primary-500/20 text-primary-300 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
									:datetime="formatDatetime(exp.period)"
								>
									{{ exp.period }}
								</time>
							</div>
						</div>

						<!-- Description -->
						<p v-if="exp.description" class="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
							{{ exp.description }}
						</p>

						<!-- Achievements/Responsibilities -->
						<ul
							v-if="exp.achievements && exp.achievements.length"
							class="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 space-y-1 list-disc list-inside"
						>
							<li v-for="(achievement, idx) in exp.achievements" :key="`achievement-${idx}`" class="leading-relaxed">
								{{ achievement }}
							</li>
						</ul>

						<!-- Tech Stack -->
						<div v-if="exp.tech && exp.tech.length" class="flex flex-wrap gap-1.5 sm:gap-2" role="list" aria-label="Technologies used">
							<span
								v-for="tech in exp.tech"
								:key="tech"
								class="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-dark-800/80 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
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
import { useIntersectionObserver } from "../composables/Useintersectionobserver";

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

const formatDatetime = (period) => period.replace(/\s*-\s*/g, "/");
const hasExperiences = computed(() => props.experiences && props.experiences.length > 0);
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
.translate-x-8 {
	transform: translateX(2rem);
}
.translate-x-0 {
	transform: translateX(0);
}

.glow {
	box-shadow: 0 0 20px rgba(var(--primary-rgb, 59, 130, 246), 0.5);
}

@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
</style>
