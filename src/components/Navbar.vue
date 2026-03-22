<template>
	<nav
		class="fixed top-0 w-full z-50 transition-all duration-300"
		:class="scrolled ? 'glass' : 'bg-transparent'"
	>
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="flex justify-between items-center h-16 sm:h-18">

				<!-- Logo: initials + dot accent -->
				<a
					href="#"
					@click.prevent="scrollToTop"
					class="flex items-center gap-1.5 group"
					aria-label="Back to top"
				>
					<span
						class="font-display font-bold text-base sm:text-lg tracking-tight text-text"
						style="font-family: var(--font-display);"
					>
						{{ initials }}
					</span>
					<span
						class="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform"
						style="background-color: var(--color-accent);"
					></span>
				</a>

				<!-- Desktop Nav -->
				<div class="hidden md:flex items-center gap-8">
					<a
						v-for="link in links"
						:key="link.name"
						:href="link.href"
						@click.prevent="scrollToSection(link.href)"
						class="nav-link text-sm font-medium"
						style="color: var(--color-text-muted); font-family: var(--font-mono);"
					>
						{{ link.name }}
					</a>
					<a
						href="#contact"
						@click.prevent="scrollToSection('#contact')"
						class="btn-accent px-5 py-2 text-sm rounded"
					>
						Contact
					</a>
				</div>

				<!-- Mobile Toggle -->
				<button
					@click="toggleMobileMenu"
					class="md:hidden p-2 rounded transition-colors"
					:style="{ color: mobileMenuOpen ? 'var(--color-accent)' : 'var(--color-text-muted)' }"
					:aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
					:aria-expanded="mobileMenuOpen"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		<Transition name="slide">
			<div
				v-if="mobileMenuOpen"
				class="md:hidden border-t"
				style="background-color: var(--color-bg); border-color: var(--color-border);"
			>
				<div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
					<a
						v-for="link in links"
						:key="link.name"
						:href="link.href"
						@click.prevent="handleMobileClick(link.href)"
						class="px-3 py-2.5 text-sm font-medium rounded transition-colors"
						style="color: var(--color-text-muted); font-family: var(--font-mono);"
					>
						{{ link.name }}
					</a>
					<div class="pt-2">
						<a
							href="#contact"
							@click.prevent="handleMobileClick('#contact')"
							class="btn-accent block px-4 py-2.5 text-sm text-center rounded font-semibold"
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
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
	name: { type: String, required: true, default: 'Portfolio' },
});

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const initials = computed(() => {
	return props.name
		.split(' ')
		.slice(0, 2)
		.map((w) => w[0])
		.join('')
		.toUpperCase();
});

const links = [
	{ name: 'about', href: '#about' },
	{ name: 'skills', href: '#skills' },
	{ name: 'experience', href: '#experience' },
	{ name: 'projects', href: '#projects' },
];

const scrollToSection = (href) => {
	const el = document.querySelector(href);
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

let scrollTimeout;
const handleScroll = () => {
	if (scrollTimeout) return;
	scrollTimeout = setTimeout(() => {
		scrolled.value = window.scrollY > 40;
		scrollTimeout = null;
	}, 80);
};

const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value; };
const handleMobileClick = (href) => {
	mobileMenuOpen.value = false;
	setTimeout(() => scrollToSection(href), 280);
};

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
	if (scrollTimeout) clearTimeout(scrollTimeout);
});
</script>

<style scoped>
.nav-link {
	position: relative;
	transition: color 0.2s;
}
.nav-link:hover {
	color: var(--color-text) !important;
}
.nav-link::after {
	content: '';
	position: absolute;
	bottom: -3px;
	left: 0;
	width: 0;
	height: 1px;
	background: var(--color-accent);
	transition: width 0.25s ease;
}
.nav-link:hover::after { width: 100%; }

.slide-enter-active,
.slide-leave-active { transition: all 0.22s ease; }
.slide-enter-from,
.slide-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
