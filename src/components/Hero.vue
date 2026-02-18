<template>
	<section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 -left-20 sm:-left-40 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
			<div
				class="absolute bottom-1/4 -right-20 sm:-right-40 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-float animation-delay-2"
			></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 sm:py-0">
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				<div class="space-y-5 sm:space-y-6 animate-slide-up text-center lg:text-left">
					<h1 class="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight">
						Hi, I'm <span class="text-gradient">{{ name }}</span>
					</h1>
					<p class="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-display italic">
						{{ title }}
					</p>
					<p class="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
						{{ bio }}
					</p>

					<div class="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
						<a
							href="#projects"
							class="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-primary-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all inline-flex items-center justify-center gap-2 group text-sm sm:text-base"
						>
							My Projects
							<svg
								class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
						<a
							href="#contact"
							class="px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
						>
							Contact Me
						</a>
					</div>

					<!-- Social Links -->
					<div class="flex gap-3 sm:gap-4 pt-2 justify-center lg:justify-start" role="list">
						<a
							v-for="social in socials"
							:key="social.name"
							:href="social.url"
							target="_blank"
							rel="noopener noreferrer"
							:aria-label="`Visit my ${social.name} profile`"
							class="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-primary-500/20 hover:scale-110 transition-all group"
						>
							<!-- GitHub Icon -->
							<svg
								v-if="social.icon === 'github'"
								class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							</svg>
							<!-- LinkedIn Icon -->
							<svg
								v-else-if="social.icon === 'linkedin'"
								class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
							<!-- Instagram Icon -->
							<svg
								v-else-if="social.icon === 'instagram'"
								class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
							<!-- Threads Icon -->
							<svg
								v-else-if="social.icon === 'threads'"
								class="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.021 0-1.923-.28-2.68-.833a4.165 4.165 0 01-1.572-2.166 7.21 7.21 0 01-.41-2.402c0-1.405.346-2.508 1.03-3.28.687-.774 1.612-1.166 2.75-1.166 1.108 0 2.003.382 2.66 1.135.377.431.656.953.83 1.552.173-.577.462-1.073.862-1.476a3.37 3.37 0 011.558-.868c-1.064-2.076-2.848-3.149-5.3-3.149-1.852 0-3.295.593-4.29 1.762-.997 1.168-1.496 2.847-1.496 5.004 0 2.157.5 3.835 1.496 5.004.996 1.169 2.438 1.762 4.29 1.762 1.818 0 3.352-.555 4.561-1.649 1.212-1.094 1.818-2.533 1.818-4.283v-.063c0-.085 0-.17.004-.254.87.454 1.513 1.074 1.913 1.847.687 1.329.732 3.096-.366 5.26-1.302 2.572-4.261 3.864-9.076 3.892zm1.065-10.867c-.13-.693-.428-1.245-.889-1.655-.461-.41-1.033-.615-1.714-.615-.71 0-1.29.246-1.734.738-.444.492-.666 1.19-.666 2.095 0 .904.222 1.603.666 2.095.444.492 1.024.738 1.734.738.681 0 1.253-.205 1.714-.615.461-.41.759-.962.889-1.655z"
								/>
							</svg>
						</a>
					</div>
				</div>

				<div class="hidden lg:flex justify-center items-center animate-fade-in animation-delay-3" aria-hidden="false">
					<div class="relative">
						<!-- Frame foto profil -->
						<div class="photo-frame w-80 xl:w-96 h-80 xl:h-96 rounded-3xl overflow-hidden glow animate-float relative">
							<img
								src="/src/assets/romzi-farhan.jpeg"
								alt="Romzi Farhan Ghozi - Full Stack Developer"
								class="w-full h-full object-cover object-center"
							/>

							<!-- Placeholder sementara sebelum foto ditambahkan -->
							<div class="photo-placeholder w-full h-full flex flex-col items-center justify-center glass text-center gap-3">
								<div class="w-24 h-24 rounded-full bg-primary-500/20 border-2 border-primary-400/40 flex items-center justify-center">
									<svg class="w-12 h-12 text-primary-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<p class="text-xs text-gray-500 px-4">← Ganti dengan foto kamu</p>
							</div>

							<!-- Gradient overlay bawah foto (tetap meski sudah pakai foto) -->
							<div
								class="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-dark-900/80 to-transparent pointer-events-none"
							></div>
						</div>

						<!-- Badge status availability -->
						<div
							class="absolute -top-3 -right-3 xl:-top-4 xl:-right-4 px-3 py-1.5 glass rounded-full flex items-center gap-1.5 animate-float animation-delay-1 text-xs font-medium"
						>
							<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
							Let’s Build Something
						</div>

						<!-- Badge tech stack -->
						<div
							class="absolute -bottom-4 xl:-bottom-5 -left-4 xl:-left-5 px-3 py-1.5 glass rounded-xl flex items-center gap-2 animate-float animation-delay-2 text-xs"
						>
							<span>⚡</span>
							<span class="text-gray-300">React · Express · Flutter · Postgres </span>
						</div>
					</div>
				</div>
			</div>

			<!-- Scroll Indicator -->
			<div class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
				<svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	name: { type: String, required: true },
	title: { type: String, required: true },
	bio: { type: String, required: true },
	socials: {
		type: Array,
		default: () => [],
		validator: (value) => value.every((item) => item.name && item.url && item.icon),
	},
});
</script>

<!--
=======================================================
CONTOH PENGGUNAAN KOMPONEN INI:
=======================================================

<HeroSection
  name="Romzi Farhan Ghozi"
  title="Full Stack Developer · Backend Enthusiast"
  bio="Saya engineer di PT Sentral Mitra Informatika, fokus di backend — bikin sistem yang cepat, nggak rewel, dan bisa di-maintain tim lain. Senang tackle problem di level database dan arsitektur API."
  :socials="[
    { name: 'GitHub', icon: 'github', url: 'https://github.com/username' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/username' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/username' },
  ]"
/>

=======================================================
TIPS BIO YANG LEBIH NATURAL:
=======================================================
Hindari frasa seperti:
  ❌ "Crafting elegant solutions through code"
  ❌ "Specialized in building scalable web and mobile applications"

Ganti dengan sesuatu yang lebih spesifik & personal, contoh:
  ✅ "Saya engineer di [perusahaan], fokus di backend dan database optimization.
      Senang kerja di masalah yang butuh nalar lebih — dari query lambat
      sampai arsitektur yang perlu dipikirkan ulang."

  ✅ "Backend developer dengan latar belakang matematika.
      Suka sekali ngulik data pipeline dan bikin API yang nggak bikin
      frontend developer ngeluh."
-->

<style scoped>
.animation-delay-1 {
	animation-delay: 0.8s;
}
.animation-delay-2 {
	animation-delay: 1.8s;
}
.animation-delay-3 {
	animation-delay: 0.3s;
}

/* Frame foto dengan border gradient */
.photo-frame {
	border: 1px solid rgba(99, 179, 237, 0.2);
	box-shadow:
		0 0 40px rgba(99, 179, 237, 0.1),
		0 0 80px rgba(236, 72, 153, 0.05),
		inset 0 0 40px rgba(0, 0, 0, 0.2);
}

@keyframes float {
	0%,
	100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-16px);
	}
}

@keyframes slide-up {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.animate-float {
	animation: float 6s ease-in-out infinite;
}
.animate-slide-up {
	animation: slide-up 0.8s ease-out;
}
.animate-fade-in {
	animation: fade-in 1s ease-out;
}
</style>
