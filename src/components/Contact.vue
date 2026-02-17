<template>
	<section id="contact" class="py-16 sm:py-24 relative scroll-mt-20">
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/10 rounded-full blur-3xl"
			></div>
		</div>

		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<!-- Header -->
			<header
				ref="targetRef"
				class="text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
			>
				<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
					Let's <span class="text-gradient">Connect</span>
				</h2>
				<p class="text-gray-400 text-sm sm:text-base md:text-lg">Have a project in mind? Let's work together</p>
			</header>

			<!-- Contact Info Cards -->
			<div
				class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
				:style="{ transitionDelay: isVisible ? '200ms' : '0ms' }"
			>
				<!-- Email Card -->
				<a
					:href="`mailto:${email}`"
					class="glass p-5 sm:p-6 md:p-8 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 group text-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900"
					aria-label="Send email"
				>
					<div
						class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-primary-500/30 transition-all"
					>
						<svg
							class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<p class="text-xs text-gray-400 mb-1.5 sm:mb-2 font-medium uppercase tracking-wider">Email</p>
					<p class="font-semibold text-gray-200 text-xs sm:text-sm break-all group-hover:text-primary-300 transition-colors">
						{{ email }}
					</p>
				</a>

				<!-- WhatsApp Card -->
				<a
					:href="whatsappLink"
					target="_blank"
					rel="noopener noreferrer"
					class="glass p-5 sm:p-6 md:p-8 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 group text-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900"
					aria-label="Chat on WhatsApp"
				>
					<div
						class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-green-500/30 transition-all"
					>
						<svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
							/>
						</svg>
					</div>
					<p class="text-xs text-gray-400 mb-1.5 sm:mb-2 font-medium uppercase tracking-wider">WhatsApp</p>
					<p class="font-semibold text-gray-200 text-xs sm:text-sm group-hover:text-green-300 transition-colors">
						{{ phone }}
					</p>
				</a>

				<!-- Location Card -->
				<div class="glass p-5 sm:p-6 md:p-8 rounded-xl text-center">
					<div
						class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
					>
						<svg
							class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<p class="text-xs text-gray-400 mb-1.5 sm:mb-2 font-medium uppercase tracking-wider">Location</p>
					<p class="font-semibold text-gray-200 text-xs sm:text-sm">{{ location }}</p>
				</div>
			</div>

			<!-- CTA Section -->
			<div
				class="mt-8 sm:mt-12 md:mt-16 text-center glass p-6 sm:p-8 md:p-10 rounded-2xl transition-all duration-700"
				:class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
				:style="{ transitionDelay: isVisible ? '400ms' : '0ms' }"
			>
				<h3 class="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4">Ready to start a project?</h3>
				<p class="text-gray-400 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto">
					I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
				</p>
				<div class="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
					<a
						:href="`mailto:${email}`"
						class="px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-primary-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all inline-flex items-center justify-center gap-2 group text-sm sm:text-base"
					>
						<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Send Email
					</a>
					<a
						:href="whatsappLink"
						target="_blank"
						rel="noopener noreferrer"
						class="px-5 sm:px-6 md:px-8 py-3 md:py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
					>
						<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
							/>
						</svg>
						Chat on WhatsApp
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from "vue";
import { useIntersectionObserver } from "../composables/Useintersectionobserver";

const props = defineProps({
	email: { type: String, required: true },
	phone: { type: String, required: true },
	location: { type: String, required: true },
});

const { isVisible, targetRef } = useIntersectionObserver({
	threshold: 0.1,
	rootMargin: "0px 0px -100px 0px",
});

const whatsappLink = computed(() => {
	let cleanPhone = props.phone.replace(/\D/g, "");
	if (!cleanPhone.startsWith("62") && cleanPhone.startsWith("0")) {
		cleanPhone = "62" + cleanPhone.substring(1);
	}
	const message = encodeURIComponent("Hi! I'm interested in discussing a project with you.");
	return `https://wa.me/${cleanPhone}?text=${message}`;
});
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

.focus\:ring-offset-dark-900:focus {
	--tw-ring-offset-color: #0f172a;
}

@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
</style>
