<template>
	<nav class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'glass shadow-lg' : ''">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="flex justify-between items-center h-20">
				<!-- Logo -->
				<a href="#" class="text-2xl font-bold text-gradient font-display" @click.prevent="scrollToTop">
					{{ name }}
				</a>

				<!-- Desktop Menu -->
				<div class="hidden md:flex items-center gap-8">
					<a
						v-for="link in links"
						:key="link.name"
						:href="link.href"
						class="nav-link text-gray-300 hover:text-primary-500 transition-colors font-medium"
						@click.prevent="scrollToSection(link.href)"
					>
						{{ link.name }}
					</a>
					<a
						href="#contact"
						class="btn-gradient px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all text-white"
						@click.prevent="scrollToSection('#contact')"
					>
						Contact
					</a>
				</div>

				<!-- Mobile Menu Button -->
				<button
					@click="toggleMobileMenu"
					class="md:hidden text-gray-300 hover:text-primary-500 transition-colors p-2"
					:aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
					aria-expanded="mobileMenuOpen"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Mobile Menu -->
			<Transition name="slide">
				<div v-if="mobileMenuOpen" class="md:hidden pb-6 space-y-2">
					<a
						v-for="link in links"
						:key="link.name"
						:href="link.href"
						@click.prevent="handleMobileClick(link.href)"
						class="mobile-link block px-4 py-3 text-gray-300 rounded-lg transition-colors hover:text-primary-500 hover:bg-white/5"
					>
						{{ link.name }}
					</a>
					<a
						href="#contact"
						@click.prevent="handleMobileClick('#contact')"
						class="btn-gradient block px-4 py-3 rounded-lg font-semibold text-center text-white"
					>
						Contact
					</a>
				</div>
			</Transition>
		</div>
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

// Smooth scroll function
const scrollToSection = (href) => {
	const element = document.querySelector(href);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

// Handle scroll event with throttling
let scrollTimeout;
const handleScroll = () => {
	if (scrollTimeout) return;

	scrollTimeout = setTimeout(() => {
		scrolled.value = window.scrollY > 50;
		scrollTimeout = null;
	}, 100);
};

// Mobile menu handlers
const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleMobileClick = (href) => {
	mobileMenuOpen.value = false;
	// Small delay to allow menu close animation
	setTimeout(() => scrollToSection(href), 300);
};

// Lifecycle hooks
onMounted(() => {
	window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
	if (scrollTimeout) clearTimeout(scrollTimeout);
});
</script>

<style scoped>
/* Font display utility */
.font-display {
	font-family: var(--font-display);
}

/* Gradient button */
.btn-gradient {
	background: linear-gradient(to right, var(--color-primary-500), var(--color-accent-500));
	box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.btn-gradient:hover {
	box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.4);
	transform: translateY(-2px);
}

/* Navigation link active state */
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

/* Transitions */
.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
	opacity: 0;
	transform: translateY(-10px);
}

.slide-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
