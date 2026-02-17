<template>
	<div class="min-h-screen overflow-x-hidden">
		<Navbar :name="profile.name" />

		<main>
			<Hero :name="profile.name" :title="profile.title" :bio="profile.bio" :socials="profile.socials" />

			<AboutSection :stats="stats" />
			<Skills :skills="skills" />
			<Experience :experiences="experiences" />
			<Projects :projects="projects" />
			<Contact :email="profile.email" :phone="profile.phone" :location="profile.location" />
		</main>

		<Footer :name="profile.name" :title="profile.title" :socials="profile.socials" />
	</div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import AboutSection from "./components/AboutSection.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

import { profile, stats, skills, experiences, projects } from "./data/portofolio.js";

if (import.meta.env.DEV) {
	console.assert(profile?.name, "Profile name is required");
	console.assert(profile?.email, "Profile email is required");
	console.assert(Array.isArray(skills), "Skills should be an array");
}
</script>