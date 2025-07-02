<template>
  <main>
    <Navbar :url-hash="activeSection"/>
    <Hero id="home"/>
    <About id="about"/>
    <Experience id="experience"/>
    <Skill id="skills"/>
    <Education id="education"/>
    <Project id="projects"/>
    <Contact id="contact"/>
    <Foot />
  </main>
</template>

<script setup>
import About from '@/components/layouts/About.vue';
import Contact from '@/components/layouts/Contact.vue';
import Education from '@/components/layouts/Education.vue';
import Experience from '@/components/layouts/Experience.vue';
import Hero from '@/components/layouts/Hero.vue';
import Project from '@/components/layouts/Project.vue';
import Skill from '@/components/layouts/Skill.vue';
import Navbar from '@/components/layouts/Navbar.vue';
import Foot from '@/components/layouts/Foot.vue';
import { useSectionObserver } from '@/composables/useSectionObserver';

const sectionIds = ['home', 'about', 'experience', 'skills', 'education', 'projects', 'contact'];
const { activeSection } = useSectionObserver(sectionIds);
</script>
