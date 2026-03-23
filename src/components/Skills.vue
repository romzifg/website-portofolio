<template>
	<section id="skills" class="py-20 sm:py-28 scroll-mt-20" style="border-top: 1px solid var(--color-border);">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">

			<!-- Section header -->
			<div class="flex items-center gap-4 mb-12">
				<span class="section-label">02 / skills</span>
				<div class="flex-1 h-px" style="background-color: var(--color-border);"></div>
			</div>

			<!-- Grid: border per-card agar sel kosong tidak kelihatan -->
			<div
				ref="targetRef"
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				style="border-top: 1px solid var(--color-border); border-left: 1px solid var(--color-border);"
			>
				<article
					v-for="(skill, index) in skills"
					:key="skill.category"
					class="skill-card p-5 sm:p-6"
					:class="isVisible ? 'is-visible' : ''"
					:style="{ '--delay': `${index * 60}ms` }"
				>
					<!-- Category header -->
					<div class="flex items-center gap-2 mb-4">
						<span
							class="text-sm shrink-0"
							aria-hidden="true"
							style="color: var(--color-text-subtle);"
						>{{ getCategoryIcon(skill.category) }}</span>
						<h3
							class="text-xs font-medium uppercase tracking-widest"
							style="font-family: var(--font-mono); color: var(--color-text-subtle);"
						>
							{{ skill.category }}
						</h3>
					</div>

					<!-- Skill tags -->
					<ul class="flex flex-wrap gap-1.5" role="list">
						<li v-for="item in skill.items" :key="item.name || item">
							<!-- Primary skill -->
							<span
								v-if="isPrimary(item.name || item)"
								class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium"
								style="
									background-color: var(--color-accent-light);
									border: 1px solid var(--color-accent-border);
									color: var(--color-accent);
									font-family: var(--font-mono);
								"
							>
								{{ item.name || item }}
							</span>
							<!-- Familiar skill — transparent, border only -->
							<span
								v-else
								class="inline-block px-2.5 py-1 rounded text-xs"
								style="
									background-color: transparent;
									border: 1px solid var(--color-border);
									color: var(--color-text-muted);
									font-family: var(--font-mono);
								"
							>
								{{ item.name || item }}
							</span>
						</li>
					</ul>
				</article>
			</div>

			<!-- Legend -->
			<div class="flex items-center gap-6 mt-5">
				<div class="flex items-center gap-2 text-xs" style="color: var(--color-text-muted); font-family: var(--font-mono);">
					<span
						class="w-3 h-3 rounded-sm inline-block"
						style="background-color: var(--color-accent-light); border: 1px solid var(--color-accent-border);"
					></span>
					primary
				</div>
				<div class="flex items-center gap-2 text-xs" style="color: var(--color-text-muted); font-family: var(--font-mono);">
					<span
						class="w-3 h-3 rounded-sm inline-block"
						style="border: 1px solid var(--color-border);"
					></span>
					familiar
				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/Useintersectionobserver';

defineProps({
	skills: { type: Array, required: true },
});

const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.05 });

const primarySkills = [
	'JavaScript', 'TypeScript', 'PHP', 'Python',
	'React', 'Express.js', 'Laravel', 'Flutter',
	'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Redis',
	'Git', 'Docker', 'Numpy', 'Pandas',
];

const isPrimary = (name) => primarySkills.includes(name);

const getCategoryIcon = (category) => {
	const icons = {
		Languages:        '{ }',
		Frontend:         '◧',
		Backend:          '⚙',
		Database:         '▤',
		DevOps:           '⬡',
		Mobile:           '▭',
		Data:             '◈',
		Tools:            '⌘',
		'Also worked with': '·',
	};
	return icons[category] || '·';
};
</script>

<style scoped>
.skill-card {
	background-color: var(--color-bg);
	/* Border kanan + bawah per card → membentuk grid line tanpa background trick */
	border-right:  1px solid var(--color-border);
	border-bottom: 1px solid var(--color-border);
	opacity: 0;
	transform: translateY(10px);
	transition:
		opacity  0.4s ease var(--delay, 0ms),
		transform 0.4s ease var(--delay, 0ms),
		background-color 0.15s ease;
}
.skill-card.is-visible {
	opacity: 1;
	transform: translateY(0);
}
.skill-card:hover {
	background-color: var(--color-surface);
}

@media (prefers-reduced-motion: reduce) {
	.skill-card { transition: none; opacity: 1; transform: none; }
}
</style>
