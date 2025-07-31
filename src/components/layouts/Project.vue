<template>
    <div class="container max-w-screen-xl flex flex-col items-center py-10 gap-8" :id="id">
        <div class="relative"  data-aos="fade-up" data-aos-duration="600">
            <p class="font-bold text-secondary dark:text-brand text-8xl max-xl:text-7xl max-lg:text-5xl">Projects
            </p>
            <p class="font-bold text-secondary text-8xl max-xl:text-7xl max-lg:text-5xl text-stroke absolute top-1">
                Projects
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "  data-aos="fade-up" data-aos-duration="700">
            <div v-for="(project, index) in projects" :key="index" class="relative group rounded-xl bg-light dark:bg-[#202127]
             overflow-hidden shadow-md hover:shadow-[7px_-7px_0px_0px_var(--secondary)] 
             dark:hover:shadow-[7px_-7px_0px_0px_var(--brand)] transition-all duration-300">
                <img :src="project.img" class="w-full" alt="">
                <div class="p-3 flex flex-col items-between text-brand">
                    <p class="font-semibold text-lg">{{ project.name }}</p>
                    <p>{{ project.desc }}</p>
                    <p class="font-semibold text-lg">Tech Stacks:</p>
                    <div class="flex items-center gap-3 mt-3">
                        <template v-for="techName in project.tech" :key="techName">
                            <img alt="" class="w-7 h-w-7" v-for="(item, index) in techStack.filter(t => t.name === techName)" :key="index" :src="item.path" >
                        </template>
                    </div>
                </div>
                <div class="absolute bottom-[3%] right-[3%] group-hover:flex gap-4 hidden max-lg:flex transition-all duration-300">
                    <a v-if="project.isDemo" :href="project.demo" target="_blank" class="bg-secondary text-light p-2 rounded-md hover:bg-brand hover:shadow-md hover:shadow-white ">Demo</a>
                    <!-- <a v-if="project.isDemo" href="" class="bg-secondary text-light p-2 rounded-md hover:bg-brand hover:shadow-md hover:shadow-white ">Code</a> -->
                </div>
            </div>
        </div>


    </div>

</template>
<script setup>
import html5 from '@/assets/img/skills/html5.svg'
import css3 from '@/assets/img/skills/css3.svg'
import js from '@/assets/img/skills/js.svg'
import php from '@/assets/img/skills/php.svg'
import vuejs from '@/assets/img/skills/vuejs.svg';
import laravel from '@/assets/img/skills/laravel.svg';
import bootstrap5 from '@/assets/img/skills/bootstrap5.svg';
import tailwindcss from '@/assets/img/skills/tailwindcss.svg';
import mysql from '@/assets/img/skills/mysql.svg';
import climix from '@/assets/img/projects/climix.png';
import fruitable from '@/assets/img/projects/fruitable.png';
import greenchainkh from '@/assets/img/projects/greenchainkh.png';
import kassar from '@/assets/img/projects/kassar.png';
import portfolio from '@/assets/img/projects/portfolio-v1.png';
import pruttika from '@/assets/img/projects/pruttika.png';
defineProps(['id']);

const projects = [
    {
        name: "GreenChainKH - Agricultural Website",
        img: greenchainkh,
        desc: 'Static website focus on promoting and selling agricultural products',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        isDemo: true,
        demo: 'http://antstudents.com/WebScholarship/Group-6/ProjectHTML/Homepage.html',
    },
    {
        name: "Climix - Environmental Website",
        img: climix,
        desc: 'Static website which promote environmental activities, charities and sell Eco-friendly products',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        isDemo: true,
        demo: 'http://antstudents.com/WebScholarshipS2/Group-12/ProjectCSS_ClimiX/homepage.html'
    },
    {
        name: "Pruttika - Events Management Website",
        img: pruttika,
        desc: 'An events management platform that allow user to create events, sell and manage online tickets',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Laravel', 'MySQL'],
        isDemo: true,
        demo: 'https://www.youtube.com/watch?v=Q4IHUy4426U&t=8s&ab_channel=ANTTechnologyTrainingCenter'
    },
    {
        name: "Kassar - Agriculture Ecommerce Website",
        img: kassar,
        desc: 'An ecommerce platform that focuses on agricultural products, connecting farmers and consumers through an online market',
        tech: ['Vue.js', 'Laravel', 'MySQL'],
        isDemo: true,
        demo: 'https://www.youtube.com/watch?v=bPf7o54t6rs'
    },
    {
        name: "Fruitable - Agricultural Ecommerce Website",
        img: fruitable,
        desc: 'Static website focus on promoting and selling agricultural products',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        isDemo: false,
        demo: ''
    },
    {
        name: "Portfolio v1.0.0",
        img: portfolio,
        desc: 'Static website focus on promoting and selling agricultural products',
        tech: ['Vue.js', 'Tailwind CSS'],
        isDemo: false,
        demo: ''
    },
]


const techStack = [
    {
        name: "HTML5",
        path: html5
    },
    {
        name: "CSS3",
        path: css3
    },
    {
        name: "Javascript",
        path: js
    },
    {
        name: "PHP",
        path: php
    },
    {
        name: "Vue.js",
        path: vuejs
    },
    {
        name: "Laravel",
        path: laravel
    },
    {
        name: "Bootstrap",
        path: bootstrap5
    },
    {
        name: "Tailwind CSS",
        path: tailwindcss
    },
    {
        name: "MySQL",
        path: mysql
    }
]
</script>