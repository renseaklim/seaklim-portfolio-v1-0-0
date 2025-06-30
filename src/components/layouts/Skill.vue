<template>
    <section class="bg-yellow-700/10 dark:bg-slate-950/30 py-20" id="skill">
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
                        <img   :src="'@/assets/img/skills/'+skill.path" :alt="skill.name"
                            class="w-14 h-w-14 max-md:w-8 max-md:h-8 object-contain hover:scale-110 transition-transform duration-300">
                            <p class="text-slate-800 dark:text-light font-semibold max-md:text-xs">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
            <div class="tech-container flex items-center justify-center gap-6 flex-wrap">
                <p class="w-full font-bold text-brand text-3xl max-md:text-xl text-center">Technologies & Tools</p>
                <div class="flex items-center justify-center gap-6 w-full flex-wrap">
                    <div class="flex flex-col items-center gap-2" v-for="(tech, index) in techStack" :key="index">
                        <img   :src="'@/assets/img/skills/'+tech.path" :alt="tech.name"
                            class="w-14 h-w-14 max-md:w-8 max-md:h-8 object-contain hover:scale-110 transition-transform duration-300">
                            <p class="text-slate-800 dark:text-light font-semibold max-md:text-xs">{{ tech.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
let langs = [
    {
        name: "HTML5",
        path: "html5.svg"
    },
    {
        name: "CSS3",
        path: "css3.svg"
    },
    {
        name: "JavaScript",
        path: "js.svg"
    },
    {
        name: "PHP",
        path: "php.svg"
    },
    {
        name: "Python",
        path: "python.png"
    },
    {
        name: "Java",
        path: "java.png"
    },
]

let techStack = [
    {
        name: "Vue.js",
        path: "vuejs.svg"
    },
    {
        name: "Laravel",
        path: "laravel.svg"
    },
    {
        name: "Bootstrap",
        path: "bootstrap5.svg"
    },
    {
        name: "Tailwind CSS",
        path: "tailwindcss.svg"
    },
    {
        name: "Figma",
        path: "figma.png"
    },
    {
        name: "Postman",
        path: "postman.svg"
    },
    {
        name: "MySQL",
        path: "mysql.svg"
    },
    {
        name: "GitHub",
        path: "github.svg"
    }
]
</script>