<template>
	<section id="projects" class="py-16 sm:py-24 relative overflow-hidden scroll-mt-20">
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div class="absolute top-1/4 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
			<div class="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<!-- Header -->
			<header
				ref="targetRef"
				class="text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
			>
				<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
					Featured <span class="text-gradient">Projects</span>
				</h2>
				<p class="text-gray-400 text-sm sm:text-base md:text-lg">Some of my recent work</p>
			</header>

			<!-- Projects Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
				<article
					v-for="(project, index) in projects"
					:key="project.id || project.title"
					class="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group flex flex-col"
					:class="{
						'opacity-0 translate-y-8': !isVisible,
						'opacity-100 translate-y-0': isVisible,
					}"
					:style="{
						transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
						transitionDuration: '700ms',
					}"
				>
					<!-- ============================================
					     PROJECT BANNER
					     - Jika project.image ada → tampilkan foto/screenshot
					     - Jika tidak ada → gradient + pattern + emoji
					     ============================================ -->
					<div class="relative h-40 sm:h-48 md:h-56 overflow-hidden">
						<!-- Ada screenshot / foto project -->
						<img
							v-if="project.image"
							:src="project.image"
							:alt="`${project.title} preview`"
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							loading="lazy"
						/>

						<!-- Fallback: gradient unik per kategori + emoji -->
						<div
							v-else
							class="absolute inset-0 flex flex-col items-center justify-center gap-2"
							:style="getBannerStyle(project.category)"
						>
							<!-- Dot pattern overlay -->
							<div
								class="absolute inset-0 opacity-20"
								style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px"
							></div>

							<!-- Glow blob di belakang emoji -->
							<div class="absolute w-32 h-32 rounded-full blur-2xl opacity-30" :style="getBlobStyle(project.category)"></div>

							<!-- Emoji -->
							<div
								class="text-5xl sm:text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300"
								role="img"
								:aria-label="`${project.category || 'Project'} icon`"
							>
								{{ getProjectIcon(project.category) }}
							</div>

							<!-- Label kategori -->
							<p class="text-xs text-white/40 font-medium tracking-[0.2em] uppercase relative z-10">
								{{ project.category || "Project" }}
							</p>
						</div>

						<!-- Category Badge -->
						<div class="absolute top-3 right-3 z-20">
							<span class="px-2.5 sm:px-3 py-1 sm:py-1.5 glass rounded-full text-xs sm:text-sm font-medium backdrop-blur-md">
								{{ project.category || "Project" }}
							</span>
						</div>

						<!-- Links Overlay on hover -->
						<div
							v-if="project.link || project.github"
							class="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4 z-20"
						>
							<a
								v-if="project.link"
								:href="project.link"
								target="_blank"
								rel="noopener noreferrer"
								class="px-4 sm:px-5 py-2 sm:py-2.5 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
								@click.stop
								aria-label="View live project"
							>
								<svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
								View
							</a>
							<a
								v-if="project.github"
								:href="project.github"
								target="_blank"
								rel="noopener noreferrer"
								class="px-4 sm:px-5 py-2 sm:py-2.5 glass hover:bg-white/20 rounded-lg font-semibold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
								@click.stop
								aria-label="View source code on GitHub"
							>
								<svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
								Code
							</a>
						</div>
					</div>

					<!-- Project Info -->
					<div class="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
						<h3 class="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 md:mb-3 group-hover:text-primary-400 transition-colors">
							{{ project.title }}
						</h3>

						<!-- Description with Show More/Less -->
						<div class="mb-3 sm:mb-4 flex-1">
							<p
								:ref="(el) => setDescriptionRef(el, index)"
								class="text-gray-400 text-sm sm:text-base leading-relaxed transition-all duration-300"
								:class="expandedProjects[index] ? '' : 'line-clamp-3'"
							>
								{{ project.description }}
							</p>

							<button
								v-if="shouldShowButton[index]"
								@click="toggleDescription(index)"
								class="mt-2 text-primary-400 hover:text-primary-300 text-xs sm:text-sm font-medium inline-flex items-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 rounded-md px-1.5 sm:px-2 py-1"
								:aria-expanded="expandedProjects[index]"
								:aria-label="expandedProjects[index] ? 'Show less description' : 'Show more description'"
							>
								{{ expandedProjects[index] ? "Show Less" : "Show More" }}
								<svg
									class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300"
									:class="expandedProjects[index] ? 'rotate-180' : ''"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</button>
						</div>

						<!-- Tech Stack -->
						<div
							v-if="project.tech && project.tech.length"
							class="flex flex-wrap gap-1.5 sm:gap-2 mt-auto"
							role="list"
							aria-label="Technologies used"
						>
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="inline-block px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-dark-800/80 rounded-lg text-xs sm:text-sm font-medium text-gray-300 hover:bg-primary-500/20 hover:text-primary-300 transition-colors"
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
import { computed, reactive, onMounted, nextTick, watch, onBeforeUnmount } from "vue";
import { useIntersectionObserver } from "../composables/Useintersectionobserver";

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

const expandedProjects = reactive({});
const shouldShowButton = reactive({});
const descriptionRefs = {};

const setDescriptionRef = (el, index) => {
	if (el) descriptionRefs[index] = el;
};

const checkIfTruncated = (element) => {
	if (!element) return false;
	return element.scrollHeight > element.clientHeight;
};

const checkAllDescriptions = async () => {
	await nextTick();
	setTimeout(() => {
		props.projects.forEach((project, index) => {
			const element = descriptionRefs[index];
			if (element) shouldShowButton[index] = checkIfTruncated(element);
		});
	}, 100);
};

const toggleDescription = (index) => {
	expandedProjects[index] = !expandedProjects[index];
};

const getProjectIcon = (category) => {
	const icons = {
		Web: "🌐",
		"Web/Mobile": "🌐",
		Mobile: "📱",
		Desktop: "💻",
		Backend: "⚙️",
		Frontend: "🎨",
		Fullstack: "🚀",
		API: "🔌",
		Database: "🗄️",
		DevOps: "🛠️",
		AI: "🤖",
		Data: "📊",
	};
	return icons[category] || "🚀";
};

// Gradient unik per kategori — supaya tiap card punya warna berbeda
const getBannerStyle = (category) => {
	const gradients = {
		Web: "background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);",
		"Web/Mobile": "background: linear-gradient(135deg, #141e30, #243b55);",
		Mobile: "background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);",
		Data: "background: linear-gradient(135deg, #0d0d0d, #1a1a2e, #16213e);",
		AI: "background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);",
		Backend: "background: linear-gradient(135deg, #134e5e, #71b280);",
		DevOps: "background: linear-gradient(135deg, #232526, #414345);",
		Frontend: "background: linear-gradient(135deg, #1f4037, #99f2c8);",
	};
	return gradients[category] || "background: linear-gradient(135deg, #1a1a2e, #16213e);";
};

// Warna blob glow di belakang emoji
const getBlobStyle = (category) => {
	const colors = {
		Web: "background: #38bdf8;",
		"Web/Mobile": "background: #818cf8;",
		Mobile: "background: #60a5fa;",
		Data: "background: #34d399;",
		AI: "background: #a78bfa;",
		Backend: "background: #4ade80;",
		DevOps: "background: #94a3b8;",
		Frontend: "background: #f472b6;",
	};
	return colors[category] || "background: #38bdf8;";
};

const hasProjects = computed(() => props.projects && props.projects.length > 0);

let resizeTimeout;
const handleResize = () => {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(checkAllDescriptions, 200);
};

onMounted(() => {
	checkAllDescriptions();
	window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
	window.removeEventListener("resize", handleResize);
	if (resizeTimeout) clearTimeout(resizeTimeout);
});

watch(isVisible, (newValue) => {
	if (newValue) checkAllDescriptions();
});
watch(
	() => props.projects,
	() => checkAllDescriptions(),
	{ deep: true },
);
</script>

<style scoped>
.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

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

img {
	will-change: transform;
}

.rotate-180 {
	transform: rotate(180deg);
}

@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
	img {
		transform: none !important;
	}
	.rotate-180 {
		transform: none !important;
	}
}
</style>
