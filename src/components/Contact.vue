<template>
	<section id="contact" class="py-20 sm:py-28 scroll-mt-20" style="border-top: 1px solid var(--color-border);">
		<div class="max-w-5xl mx-auto px-6 lg:px-8">

			<!-- Section header -->
			<div class="flex items-center gap-4 mb-12">
				<span class="section-label">05 / contact</span>
				<div class="flex-1 h-px" style="background-color: var(--color-border);"></div>
			</div>

			<div
				ref="targetRef"
				class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
				:class="isVisible ? 'is-visible' : ''"
			>
				<!-- Left: Heading + blurb -->
				<div class="space-y-5">
					<h2
						class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
						style="font-family: var(--font-display);"
					>
						Let's build<br/>
						<span style="color: var(--color-accent);">something real.</span>
					</h2>
					<p class="text-base leading-relaxed" style="color: var(--color-text-muted);">
						Open to full-time roles, freelance contracts, and technical collaborations.
						If you have a project or a hard problem — I'm interested.
					</p>
					<div class="pt-2 flex flex-col xs:flex-row gap-3">
						<a
							:href="`mailto:${email}`"
							class="btn-accent px-6 py-3 text-sm rounded inline-flex items-center justify-center gap-2"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							Send an Email
						</a>
						<a
							:href="whatsappLink"
							target="_blank"
							rel="noopener noreferrer"
							class="btn-ghost px-6 py-3 text-sm rounded inline-flex items-center justify-center gap-2"
						>
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
							</svg>
							WhatsApp
						</a>
					</div>
				</div>

				<!-- Right: Contact details -->
				<div class="space-y-3">
					<a
						:href="`mailto:${email}`"
						class="contact-row card rounded-lg p-4 flex items-center gap-4 transition-colors card-hover"
					>
						<div
							class="shrink-0 w-10 h-10 rounded flex items-center justify-center"
							style="background-color: var(--color-surface-2);"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								style="color: var(--color-accent);">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
							</svg>
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--color-text-subtle); font-family: var(--font-mono);">email</p>
							<p class="text-sm font-medium" style="color: var(--color-text);">{{ email }}</p>
						</div>
					</a>

					<a
						:href="whatsappLink"
						target="_blank"
						rel="noopener noreferrer"
						class="contact-row card rounded-lg p-4 flex items-center gap-4 transition-colors card-hover"
					>
						<div
							class="shrink-0 w-10 h-10 rounded flex items-center justify-center"
							style="background-color: var(--color-surface-2);"
						>
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style="color: #4ade80;">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
							</svg>
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--color-text-subtle); font-family: var(--font-mono);">whatsapp</p>
							<p class="text-sm font-medium" style="color: var(--color-text);">{{ phone }}</p>
						</div>
					</a>

					<div class="card rounded-lg p-4 flex items-center gap-4">
						<div
							class="shrink-0 w-10 h-10 rounded flex items-center justify-center"
							style="background-color: var(--color-surface-2);"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								style="color: var(--color-text-subtle);">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
							</svg>
						</div>
						<div>
							<p class="text-xs mb-0.5" style="color: var(--color-text-subtle); font-family: var(--font-mono);">location</p>
							<p class="text-sm font-medium" style="color: var(--color-text);">{{ location }}</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';
import { useIntersectionObserver } from '../composables/Useintersectionobserver';

const props = defineProps({
	email:    { type: String, required: true },
	phone:    { type: String, required: true },
	location: { type: String, required: true },
});

const { isVisible, targetRef } = useIntersectionObserver({ threshold: 0.1 });

const whatsappLink = computed(() => {
	let n = props.phone.replace(/\D/g, '');
	if (!n.startsWith('62') && n.startsWith('0')) n = '62' + n.slice(1);
	return `https://wa.me/${n}?text=${encodeURIComponent("Hi Romzi, I'd like to discuss a project with you.")}`;
});
</script>

<style scoped>
.contact-section {
	opacity: 0;
	transform: translateY(12px);
	transition: opacity 0.5s ease, transform 0.5s ease;
}
.contact-section.is-visible { opacity: 1; transform: translateY(0); }

.contact-row { text-decoration: none; display: flex; }
</style>
