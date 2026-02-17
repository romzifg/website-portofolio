<template>
	<nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'glass shadow-lg' : ''">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16 sm:h-20">
				<!-- Logo -->
				<a href="#" class="text-xl sm:text-2xl font-bold text-gradient font-display truncate max-w-[60%]" @click.prevent="scrollToTop">
					{{ name }}
				</a>

				<!-- Desktop Menu -->
				<div class="hidden md:flex items-center gap-6 lg:gap-8">
					<a
						v-for="link in links"
						:key="link.name"
						:href="link.href"
						class="nav-link text-gray-300 hover:text-primary-500 transition-colors font-medium text-sm lg:text-base"
						@click.prevent="scrollToSection(link.href)"
					>
						{{ link.name }}
					</a>
					<a
						href="#contact"
						class="btn-gradient px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold hover:shadow-lg transition-all text-white text-sm lg:text-base whitespace-nowrap"
						@click.prevent="scrollToSection('#contact')"
					>
						Contact
					</a>
				</div>

				<!-- Mobile Menu Button -->
				<button
					@click="toggleMobileMenu"
					class="md:hidden text-gray-300 hover:text-primary-500 transition-colors p-2 rounded-lg hover:bg-white/5 shrink-0"
					:aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
					:aria-expanded="mobileMenuOpen"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu — diletakkan di luar container agar full-width -->
		<!-- Background solid agar tidak tembus ke konten di bawah -->
		<Transition name="slide">
			<div v-if="mobileMenuOpen" class="md:hidden mobile-menu-bg border-t border-white/10">
				<div class="max-w-7xl mx-auto px-4 py-3 space-y-1">
					<a
						v-for="link in links"
						:key="link.name"
						:href="link.href"
						@click.prevent="handleMobileClick(link.href)"
						class="flex items-center px-4 py-3 text-gray-300 rounded-xl transition-colors hover:text-primary-500 hover:bg-white/5 font-medium text-sm"
					>
						{{ link.name }}
					</a>
					<div class="pt-2 pb-1">
						<a
							href="#contact"
							@click.prevent="handleMobileClick('#contact')"
							class="btn-gradient block px-4 py-3 rounded-xl font-semibold text-center text-white text-sm"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
	name: {
		type: String,
		required: true,
		default: "Portfolio",
	},
});

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const links = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
];

const scrollToSection = (href) => {
	const element = document.querySelector(href);
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

let scrollTimeout;
const handleScroll = () => {
	if (scrollTimeout) return;
	scrollTimeout = setTimeout(() => {
		scrolled.value = window.scrollY > 50;
		scrollTimeout = null;
	}, 100);
};

const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleMobileClick = (href) => {
	mobileMenuOpen.value = false;
	setTimeout(() => scrollToSection(href), 300);
};

onMounted(() => window.addEventListener("scroll", handleScroll, { passive: true }));
onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
	if (scrollTimeout) clearTimeout(scrollTimeout);
});
</script>

<style scoped>
.font-display {
	font-family: var(--font-display);
}

/*
 * Background solid untuk mobile menu.
 * Tidak pakai glass/transparan agar tidak tembus ke konten Hero di belakangnya.
 */
.mobile-menu-bg {
	background-color: #0a0e1a;
	background-color: var(--color-dark-900, #0a0e1a);
}

.btn-gradient {
	background: linear-gradient(to right, var(--color-primary-500), var(--color-accent-500));
	box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.btn-gradient:hover {
	box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.4);
	transform: translateY(-2px);
}

.nav-link {
	position: relative;
}

.nav-link::after {
	content: "";
	position: absolute;
	bottom: -4px;
	left: 0;
	width: 0;
	height: 2px;
	background: var(--color-primary-500);
	transition: width 0.3s ease;
}

.nav-link:hover::after {
	width: 100%;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-8px);
}
</style>
