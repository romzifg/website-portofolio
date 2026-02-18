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

				<!-- Legend -->
				<div class="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-5">
					<div class="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
						<span class="w-3 h-3 rounded-full bg-primary-500 inline-block"></span>
						Primary
					</div>
					<div class="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
						<span class="w-3 h-3 rounded-full bg-dark-700 border border-gray-600 inline-block"></span>
						Familiar
					</div>
				</div>
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
					<!-- Category header dengan ikon -->
					<div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
						<span class="text-lg sm:text-xl" aria-hidden="true">{{ getCategoryIcon(skill.category) }}</span>
						<h3
							class="text-base sm:text-lg md:text-xl font-display font-bold text-primary-400 group-hover:text-primary-300 transition-colors"
						>
							{{ skill.category }}
						</h3>
					</div>

					<!-- Items dengan pembeda primary vs familiar -->
					<ul class="flex flex-wrap gap-2" role="list">
						<li v-for="item in skill.items" :key="item.name || item">
							<!-- Primary skill — lebih menonjol -->
							<span
								v-if="isPrimary(item.name || item)"
								class="inline-flex items-center gap-1 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-default primary-badge"
							>
								<span class="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0"></span>
								{{ item.name || item }}
							</span>

							<!-- Familiar skill — lebih subtle -->
							<span
								v-else
								class="inline-block px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-dark-800/80 rounded-lg text-xs sm:text-sm font-medium text-gray-400 hover:text-gray-300 hover:bg-dark-700/80 transition-all cursor-default"
							>
								{{ item.name || item }}
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

// =============================================
// PRIMARY SKILLS — yang di-highlight
// Sesuaikan list ini jika ada perubahan
// =============================================
const primarySkills = ["React", "Express.js", "PostgreSQL"];

const isPrimary = (name) => primarySkills.includes(name);

const getCategoryIcon = (category) => {
	const icons = {
		Languages: "📝",
		Frontend: "🎨",
		Backend: "⚙️",
		Database: "🗄️",
		DevOps: "🛠️",
		Mobile: "📱",
		Data: "📊",
		Tools: "🔧",
	};
	return icons[category] || "💡";
};

const skillsCount = computed(() => props.skills.length);
</script>

<!--
=======================================================
CONTOH DATA YANG DIREKOMENDASIKAN:
=======================================================
Gunakan format string biasa untuk items.
Primary skills akan otomatis di-highlight berdasarkan
list `primarySkills` di dalam script.

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Golang', 'Dart']
  },
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'Flutter', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    items: ['Express.js', 'NestJS', 'Laravel', 'FastAPI', 'Gin']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Redis']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Git', 'CI/CD', 'Linux']
  },
]

Untuk menambah/mengubah primary skill,
edit array `primarySkills` di dalam <script setup>.
=======================================================
-->

<style scoped>
/* Primary skill badge */
.primary-badge {
	background: rgba(99, 179, 237, 0.15);
	border: 1px solid rgba(99, 179, 237, 0.3);
	color: #90cdf4;
}

.primary-badge:hover {
	background: rgba(99, 179, 237, 0.25);
	border-color: rgba(99, 179, 237, 0.5);
	transform: scale(1.05);
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

@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
</style>
