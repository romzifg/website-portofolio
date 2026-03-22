<template>
	<section id="projects" class="py-20 sm:py-28 scroll-mt-20" style="border-top: 1px solid var(--color-border);">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">

			<!-- Section header -->
			<div class="flex items-center gap-4 mb-12">
				<span class="section-label">04 / projects</span>
				<div class="flex-1 h-px" style="background-color: var(--color-border);"></div>
			</div>

			<!-- Grid -->
			<div ref="targetRef" class="grid grid-cols-1 sm:grid-cols-2 gap-1">
				<article
					v-for="(project, index) in projects"
					:key="project.id || project.title"
					class="proj-card flex flex-col"
					:class="isVisible ? 'is-visible' : ''"
					:style="{ '--delay': `${index * 80}ms`, 'background-color': 'var(--color-bg)', 'border': '0.5px solid var(--color-border)' }"
				>
					<!-- Project image / fallback -->
					<div class="relative h-44 sm:h-52 overflow-hidden" style="border-bottom: 1px solid var(--color-border);">
						<img
							v-if="project.image"
							:src="project.image"
							:alt="`${project.title} preview`"
							class="w-full h-full object-cover proj-img"
							loading="lazy"
						/>
						<!-- Fallback: minimal pattern + label -->
						<div
							v-else
							class="absolute inset-0 flex flex-col items-end justify-end p-4"
							:style="getFallbackStyle(project.category)"
						>
							<div class="fallback-pattern absolute inset-0" aria-hidden="true"></div>
							<span
								class="relative text-xs px-2 py-1 rounded"
								style="
									background-color: var(--color-bg);
									color: var(--color-text-muted);
									font-family: var(--font-mono);
								"
							>
								{{ project.category || 'project' }}
							</span>
						</div>

						<!-- Hover overlay with links -->
						<div
							v-if="project.link || project.github"
							class="proj-overlay absolute inset-0 flex items-center justify-center gap-3"
							style="background-color: rgba(17,16,16,0.88);"
						>
							<a
								v-if="project.link"
								:href="project.link"
								target="_blank"
								rel="noopener noreferrer"
								class="btn-accent px-4 py-2 text-xs rounded inline-flex items-center gap-1.5"
								@click.stop
							>
								<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
								</svg>
								Live
							</a>
							<a
								v-if="project.github"
								:href="project.github"
								target="_blank"
								rel="noopener noreferrer"
								class="btn-ghost px-4 py-2 text-xs rounded inline-flex items-center gap-1.5"
								@click.stop
							>
								<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
								Code
							</a>
						</div>
					</div>

					<!-- Project info -->
					<div class="flex flex-col flex-1 p-5 sm:p-6 hover-surface transition-colors">
						<div class="flex items-start justify-between gap-3 mb-2">
							<h3
								class="text-base sm:text-lg font-bold"
								style="font-family: var(--font-display);"
							>
								{{ project.title }}
							</h3>
						</div>

						<p
							class="text-sm leading-relaxed flex-1 mb-4"
							:class="expandedProjects[index] ? '' : 'line-clamp-3'"
							:ref="(el) => setRef(el, index)"
							style="color: var(--color-text-muted);"
						>
							{{ project.description }}
						</p>

						<button
							v-if="shouldShowButton[index]"
							@click="toggleDesc(index)"
							class="text-xs mb-4 text-left transition-colors"
							style="color: var(--color-accent); font-family: var(--font-mono);"
						>
							{{ expandedProjects[index] ? '↑ less' : '↓ more' }}
						</button>

						<!-- Tech tags -->
						<div v-if="project.tech?.length" class="flex flex-wrap gap-1.5 mt-auto">
							<span
								v-for="tech in project.tech"
								:key="tech"
								class="text-xs px-2 py-0.5 rounded"
								style="
									background-color: var(--color-surface);
									border: 1px solid var(--color-border);
									color: var(--color-text-subtle);
									font-family: var(--font-mono);
								"
							>
								{{ tech }}
							</span>
						</div>
					</div>
				</article>
			</div>

		</div>
	</section>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { useIntersectionObserver } from '../composables/Useintersectionobserver';

defineProps({
	projects: { type: Array, required: true, default: () => [] },
});

const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.05 });

const expandedProjects = reactive({});
const shouldShowButton  = reactive({});
const refs = {};

const setRef = (el, i) => { if (el) refs[i] = el; };
const checkIfTruncated = (el) => el && el.scrollHeight > el.clientHeight;

const checkAll = async () => {
	await nextTick();
	setTimeout(() => {
		Object.keys(refs).forEach((i) => { shouldShowButton[i] = checkIfTruncated(refs[i]); });
	}, 100);
};

const toggleDesc = (i) => { expandedProjects[i] = !expandedProjects[i]; };

const getFallbackStyle = (category) => {
	const palettes = {
		Web:       '#1A1410',
		Mobile:    '#10141A',
		Backend:   '#101A12',
		Data:      '#0F1018',
		AI:        '#140F1A',
		DevOps:    '#14130F',
		Frontend:  '#0F1814',
		Fullstack: '#1A0F0F',
	};
	return { backgroundColor: palettes[category] || '#141414' };
};

let resizeTimeout;
onMounted(() => {
	checkAll();
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(checkAll, 200);
	});
});
onBeforeUnmount(() => { window.removeEventListener('resize', checkAll); });
watch(isVisible, (v) => { if (v) checkAll(); });
</script>

<style scoped>
.proj-card {
	opacity: 0;
	transform: translateY(12px);
	transition: opacity 0.4s ease var(--delay, 0ms), transform 0.4s ease var(--delay, 0ms);
}
.proj-card.is-visible { opacity: 1; transform: translateY(0); }
.proj-card:hover .proj-img { transform: scale(1.04); }

.proj-img { transition: transform 0.4s ease; }

.proj-overlay {
	opacity: 0;
	transition: opacity 0.25s ease;
}
.proj-card:hover .proj-overlay { opacity: 1; }

.hover-surface:hover { background-color: var(--color-surface); }

.fallback-pattern {
	background-image: repeating-linear-gradient(
		45deg,
		transparent,
		transparent 18px,
		rgba(255,255,255,0.025) 18px,
		rgba(255,255,255,0.025) 19px
	);
}

.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
	.proj-card { transition: none; opacity: 1; transform: none; }
	.proj-img  { transition: none; }
}
</style>
