<template>
	<section id="experience" class="py-20 sm:py-28 scroll-mt-20" style="border-top: 1px solid var(--color-border);">
		<div class="max-w-4xl mx-auto px-6 lg:px-8">

			<!-- Section header -->
			<div class="flex items-center gap-4 mb-12">
				<span class="section-label">03 / experience</span>
				<div class="flex-1 h-px" style="background-color: var(--color-border);"></div>
			</div>

			<!-- Timeline -->
			<div ref="targetRef" class="relative">

				<!-- Vertical line -->
				<div
					class="absolute left-0 top-2 bottom-0 w-px hidden sm:block"
					style="background-color: var(--color-border);"
				></div>

				<div class="space-y-0">
					<article
						v-for="(exp, index) in experiences"
						:key="exp.id || `exp-${index}`"
						class="exp-item relative sm:pl-10 pb-10 last:pb-0"
						:class="isVisible ? 'is-visible' : ''"
						:style="{ '--delay': `${index * 100}ms` }"
					>
						<!-- Timeline dot — hidden on mobile -->
						<div
							class="absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full border-2 hidden sm:block"
							style="background-color: var(--color-bg); border-color: var(--color-accent);"
							aria-hidden="true"
						></div>

						<!-- Card -->
						<div class="card rounded-lg p-5 sm:p-6 transition-colors card-hover">

							<!-- Header row -->
							<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
								<div class="flex items-start gap-3">
									<!-- Company initial badge -->
									<div
										class="shrink-0 w-9 h-9 rounded flex items-center justify-center text-xs font-bold"
										style="background-color: var(--color-surface-2); color: var(--color-accent); font-family: var(--font-mono);"
									>
										{{ getInitials(exp.company) }}
									</div>
									<div>
										<h3
											class="text-base sm:text-lg font-bold"
											style="font-family: var(--font-display);"
										>
											{{ exp.title }}
										</h3>
										<p class="text-sm" style="color: var(--color-accent); font-family: var(--font-mono);">
											{{ exp.company }}
										</p>
									</div>
								</div>
								<!-- Period badge -->
								<time
									class="self-start shrink-0 text-xs px-2.5 py-1 rounded"
									style="
										background-color: var(--color-surface-2);
										border: 1px solid var(--color-border);
										color: var(--color-text-muted);
										font-family: var(--font-mono);
									"
									:datetime="exp.period"
								>
									{{ exp.period }}
								</time>
							</div>

							<!-- Description -->
							<p v-if="exp.description" class="text-sm mb-4 leading-relaxed" style="color: var(--color-text-muted);">
								{{ exp.description }}
							</p>

							<!-- Achievements -->
							<ul v-if="exp.achievements?.length" class="space-y-2 mb-4">
								<li
									v-for="(ach, i) in exp.achievements"
									:key="i"
									class="flex items-start gap-2.5 text-sm leading-relaxed"
									style="color: var(--color-text-muted);"
								>
									<span class="mt-1.5 shrink-0 w-1 h-1 rounded-full" style="background-color: var(--color-accent);"></span>
									{{ ach }}
								</li>
							</ul>

							<!-- Tech tags -->
							<div v-if="exp.tech?.length" class="flex flex-wrap gap-1.5 pt-2" style="border-top: 1px solid var(--color-border-subtle);">
								<span
									v-for="tech in exp.tech"
									:key="tech"
									class="text-xs px-2 py-0.5 rounded"
									style="
										background-color: var(--color-surface-2);
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

		</div>
	</section>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/Useintersectionobserver';

defineProps({
	experiences: { type: Array, required: true, default: () => [] },
});

const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.05 });

const getInitials = (company) =>
	company
		.split(' ')
		.filter((w) => !['PT', 'CV', 'the', 'and', '&'].includes(w))
		.slice(0, 2)
		.map((w) => w[0])
		.join('')
		.toUpperCase();
</script>

<style scoped>
.exp-item {
	opacity: 0;
	transform: translateY(12px);
	transition: opacity 0.45s ease var(--delay, 0ms), transform 0.45s ease var(--delay, 0ms);
}
.exp-item.is-visible { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
	.exp-item { transition: none; opacity: 1; transform: none; }
}
</style>
