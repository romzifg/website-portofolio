<template>
	<section id="about" class="py-5 sm:py-8 scroll-mt-20">
		<div class="max-w-5xl mx-auto px-6 lg:px-8">

			<!-- Section header -->
			<div class="flex items-center gap-4 mb-12">
				<span class="section-label">01 / about</span>
				<div class="flex-1 h-px" style="background-color: var(--color-border);"></div>
			</div>

			<!-- Two-column layout -->
			<div class="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

				<!-- Bio text -->
				<div class="lg:col-span-3 space-y-5">
					<h2
						class="text-3xl sm:text-4xl font-display font-bold"
						style="font-family: var(--font-display);"
					>
						A bit about me
					</h2>
					<p
						class="text-base sm:text-lg leading-relaxed"
						style="color: var(--color-text-muted);"
					>
						{{ bio }}
					</p>
				</div>

				<!-- Personal cards — vertical stack, right column -->
				<div class="lg:col-span-2 flex flex-col gap-3">
					<div
						v-for="card in personalCards"
						:key="card.label"
						class="card rounded-lg p-4 flex items-start gap-3 transition-colors card-hover"
					>
						<span class="text-lg mt-0.5 shrink-0" aria-hidden="true">{{ card.icon }}</span>
						<div>
							<p
								class="text-xs mb-0.5"
								style="color: var(--color-accent); font-family: var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase;"
							>
								{{ card.label }}
							</p>
							<p class="text-sm font-medium" style="color: var(--color-text);">
								{{ card.value }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps({
	bio:          { type: String, required: true },
	personalCards: { type: Array, required: true },
});
</script>
