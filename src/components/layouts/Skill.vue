<template>
    <section class="bg-yellow-700/10 dark:bg-slate-950/30 py-20" id="skill"  data-aos="fade-up" data-aos-delay="400">
        <div class="container max-w-screen-xl flex flex-col items-center justify-center mx-auto gap-9">
            <div class="relative">
                <p class="font-bold text-light dark:text-brand text-8xl max-xl:text-7xl max-lg:text-5xl">Skills</p>
                <p class="font-bold text-light text-8xl max-xl:text-7xl max-lg:text-5xl text-stroke absolute top-1">
                    Skills
                </p>
            </div>
            <div class="languages-container flex items-center justify-center gap-6 flex-wrap">
                <p class="w-full font-bold text-brand text-3xl max-md:text-xl text-center">Languages</p>
                <div class="flex items-center justify-center gap-6 w-full flex-wrap">
                    <div class="flex flex-col items-center gap-2" v-for="(skill, index) in langs" :key="index">
                        <img   :src="skill.path" :alt="skill.name"
                            class="w-14 h-w-14 max-md:w-8 max-md:h-8 object-contain hover:scale-110 transition-transform duration-300">
                            <p class="text-slate-800 dark:text-light font-semibold max-md:text-xs">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
            <div class="tech-container flex items-center justify-center gap-6 flex-wrap">
                <p class="w-full font-bold text-brand text-3xl max-md:text-xl text-center">Technologies & Tools</p>
                <div class="flex items-center justify-center gap-6 w-full flex-wrap">
                    <div class="flex flex-col items-center gap-2" v-for="(tech, index) in techStack" :key="index">
                        <img   :src="tech.path" :alt="tech.name"
                            class="w-14 h-w-14 max-md:w-8 max-md:h-8 object-contain hover:scale-110 transition-transform duration-300">
                            <p class="text-slate-800 dark:text-light font-semibold max-md:text-xs">{{ tech.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import html5 from '@/assets/img/skills/html5.svg'
import css3 from '@/assets/img/skills/css3.svg'
import js from '@/assets/img/skills/js.svg'
import php from '@/assets/img/skills/php.svg'
import python from '@/assets/img/skills/python.png'
import java from '@/assets/img/skills/java.png'
import vuejs from '@/assets/img/skills/vuejs.svg';
import laravel from '@/assets/img/skills/laravel.svg';
import bootstrap5 from '@/assets/img/skills/bootstrap5.svg';
import tailwindcss from '@/assets/img/skills/tailwindcss.svg';
import figma from '@/assets/img/skills/figma.png';
import postman from '@/assets/img/skills/postman.svg';
import mysql from '@/assets/img/skills/mysql.svg';
import github from '@/assets/img/skills/github.svg';

let langs = [
    {
        name: "HTML5",
        path: html5
    },
    {
        name: "CSS3",
        path: css3
    },
    {
        name: "JavaScript",
        path: js
    },
    {
        name: "PHP",
        path: php
    },
    {
        name: "Python",
        path: python
    },
    {
        name: "Java",
        path: java
    },
]


const techStack = [
  { name: 'Vue.js', path: vuejs },
  { name: 'Laravel', path: laravel },
  { name: 'Bootstrap', path: bootstrap5 },
  { name: 'Tailwind CSS', path: tailwindcss },
  { name: 'Figma', path: figma },
  { name: 'Postman', path: postman },
  { name: 'MySQL', path: mysql },
  { name: 'GitHub', path: github }
];
</script>