<template>
	<section id="projects" class="py-24 relative overflow-hidden scroll-mt-20">
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div class="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
			<div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
		</div>

		<div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
			<!-- Header -->
			<header
				ref="targetRef"
				class="text-center mb-12 md:mb-16 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
			>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Featured <span class="text-gradient">Projects</span></h2>
				<p class="text-gray-400 text-base md:text-lg">Some of my recent work</p>
			</header>

			<!-- Projects Grid -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
				<article
					v-for="(project, index) in projects"
					:key="project.id || project.title"
					class="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
					:class="{
						'opacity-0 translate-y-8': !isVisible,
						'opacity-100 translate-y-0': isVisible,
					}"
					:style="{
						transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
						transitionDuration: '700ms',
					}"
					:tabindex="project.link ? 0 : undefined"
					:role="project.link ? 'button' : undefined"
					@click="handleProjectClick(project)"
					@keydown.enter="handleProjectClick(project)"
					@keydown.space.prevent="handleProjectClick(project)"
				>
					<!-- Project Image/Banner -->
					<div class="relative h-48 md:h-64 bg-linear-to-br from-primary-500/20 to-pink-500/20 overflow-hidden">
						<!-- Project Image if available -->
						<img
							v-if="project.image"
							:src="project.image"
							:alt="`${project.title} preview`"
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							loading="lazy"
						/>

						<!-- Icon Fallback -->
						<div v-else class="absolute inset-0 flex items-center justify-center">
							<div
								class="text-6xl md:text-8xl opacity-50 group-hover:scale-110 transition-transform duration-300"
								role="img"
								:aria-label="`${project.category || 'Project'} icon`"
							>
								{{ getProjectIcon(project.category) }}
							</div>
						</div>

						<!-- Category Badge -->
						<div class="absolute top-3 md:top-4 right-3 md:right-4">
							<span class="px-3 md:px-4 py-1.5 glass rounded-full text-xs md:text-sm font-medium backdrop-blur-md">
								{{ project.category || "Project" }}
							</span>
						</div>

						<!-- Links Overlay -->
						<div
							v-if="project.link || project.github"
							class="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
						>
							<a
								v-if="project.link"
								:href="project.link"
								target="_blank"
								rel="noopener noreferrer"
								class="px-4 md:px-6 py-2 md:py-3 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold text-sm md:text-base transition-colors inline-flex items-center gap-2"
								@click.stop
								aria-label="View live project"
							>
								<svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
								<span class="hidden sm:inline">View</span>
							</a>
							<a
								v-if="project.github"
								:href="project.github"
								target="_blank"
								rel="noopener noreferrer"
								class="px-4 md:px-6 py-2 md:py-3 glass hover:bg-white/20 rounded-lg font-semibold text-sm md:text-base transition-colors inline-flex items-center gap-2"
								@click.stop
								aria-label="View source code on GitHub"
							>
								<svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
								<span class="hidden sm:inline">Code</span>
							</a>
						</div>
					</div>

					<!-- Project Info -->
					<div class="p-5 md:p-6">
						<h3
							class="text-xl md:text-2xl font-display font-bold mb-2 md:mb-3 group-hover:text-primary-400 transition-colors line-clamp-2"
						>
							{{ project.title }}
						</h3>

						<p class="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
							{{ project.description }}
						</p>

						<!-- Tech Stack -->
						<div v-if="project.tech && project.tech.length" class="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="inline-block px-2.5 md:px-3 py-1 bg-dark-800/80 rounded-lg text-xs md:text-sm font-medium text-gray-300 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
								role="listitem"
							>
								{{ tech }}
							</span>
						</div>
					</div>
				</article>
			</div>

			<!-- Empty State -->
			<div v-if="!projects || projects.length === 0" class="text-center py-12 text-gray-500">
				<p class="text-lg">No projects available</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from "vue";
import { useIntersectionObserver } from "../composables/useIntersectionObserver";

const props = defineProps({
	projects: {
		type: Array,
		required: true,
		default: () => [],
		validator: (value) => {
			return value.every((project) => project.title && project.description && (!project.tech || Array.isArray(project.tech)));
		},
	},
});

const { isVisible, targetRef } = useIntersectionObserver({
	threshold: 0.1,
	rootMargin: "0px 0px -100px 0px",
});

// Project icon mapping
const getProjectIcon = (category) => {
	const icons = {
		Web: "🌐",
		Mobile: "📱",
		Desktop: "💻",
		Backend: "⚙️",
		Frontend: "🎨",
		Fullstack: "🚀",
		API: "🔌",
		Database: "🗄️",
		DevOps: "🛠️",
		AI: "🤖",
	};
	return icons[category] || "🚀";
};

// Handle project click
const handleProjectClick = (project) => {
	if (project.link) {
		window.open(project.link, "_blank", "noopener,noreferrer");
	}
};

// Check if projects exist
const hasProjects = computed(() => props.projects && props.projects.length > 0);
</script>

<style scoped>
/* Text truncation utilities */
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

/* Smooth transitions */
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

/* Image hover effect */
img {
	will-change: transform;
}

/* Focus styles for accessibility */
article:focus {
	outline: 2px solid rgb(var(--primary-rgb, 59, 130, 246));
	outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}

	img {
		transform: none !important;
	}
}
</style>
