<template>
    <div class="container max-w-screen-xl flex flex-col items-center py-10 gap-8" id="projects">
        <div class="relative">
            <p class="font-bold text-secondary dark:text-brand text-8xl max-xl:text-7xl max-lg:text-5xl">Projects
            </p>
            <p class="font-bold text-secondary text-8xl max-xl:text-7xl max-lg:text-5xl text-stroke absolute top-1">
                Projects
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div v-for="(project, index) in projects" :key="index" class="relative group rounded-xl bg-light 
             overflow-hidden shadow-md hover:shadow-[7px_-7px_0px_0px_var(--secondary)] transition-all duration-300">
                <img :src="project.img" class="w-full" alt="">
                <div class="p-3 flex flex-col items-between">
                    <p class="text-brand font-semibold text-lg">{{ project.name }}</p>
                    <p class="text-brand">{{ project.desc }}</p>
                    <p class="text-brand font-semibold text-lg">Tech Stacks:</p>
                    <div class="flex items-center gap-3 mt-3">
                        <template v-for="techName in project.tech" :key="techName">
                            <img alt="" class="w-7 h-w-7" v-for="(item, index) in techStack.filter(t => t.name === techName)" :key="index" :src="item.path" >
                        </template>
                    </div>
                </div>
                <div class="absolute bottom-[3%] right-[3%] group-hover:flex gap-4 hidden transition-all duration-300">
                    <a v-if="project.isDemo" :href="project.demo" target="_blank" class="bg-secondary text-light p-2 rounded-md hover:bg-brand hover:shadow-md hover:shadow-white ">Demo</a>
                    <!-- <a v-if="project.isDemo" href="" class="bg-secondary text-light p-2 rounded-md hover:bg-brand hover:shadow-md hover:shadow-white ">Code</a> -->
                </div>
            </div>
        </div>


    </div>

</template>
<script setup>
const projects = [
    {
        name: "GreenChainKH - Agricultural Website",
        img: '@/assets/img/projects/greenchainkh.png',
        desc: 'Static website focus on promoting and selling agricultural products',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        isDemo: true,
        demo: 'http://antstudents.com/WebScholarship/Group-6/ProjectHTML/Homepage.html',
    },
    {
        name: "Climix - Environmental Website",
        img: '@/assets/img/projects/climix.png',
        desc: 'Static website which promote environmental activities, charities and sell Eco-friendly products',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        isDemo: true,
        demo: 'http://antstudents.com/WebScholarshipS2/Group-12/ProjectCSS_ClimiX/homepage.html'
    },
    {
        name: "Pruttika - Events Management Website",
        img: '@/assets/img/projects/pruttika.png',
        desc: 'An events management platform that allow user to create events, sell and manage online tickets',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Laravel', 'MySQL'],
        isDemo: true,
        demo: 'https://www.youtube.com/watch?v=Q4IHUy4426U&t=8s&ab_channel=ANTTechnologyTrainingCenter'
    },
    {
        name: "Kassar - Agriculture Ecommerce Website",
        img: '@/assets/img/projects/kassar.png',
        desc: 'An ecommerce platform that focuses on agricultural products, connecting farmers and consumers through an online market',
        tech: ['Vue.js', 'Laravel', 'MySQL'],
        isDemo: true,
        demo: 'https://www.youtube.com/watch?v=bPf7o54t6rs'
    },
    {
        name: "Fruitable - Agricultural Ecommerce Website",
        img: '@/assets/img/projects/fruitable.png',
        desc: 'Static website focus on promoting and selling agricultural products',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        isDemo: false,
        demo: ''
    },
    {
        name: "Portfolio v1.0.0",
        img: '@/assets/img/projects/portfolio-v1.png',
        desc: 'Static website focus on promoting and selling agricultural products',
        tech: ['Vue.js', 'Tailwind CSS'],
        isDemo: false,
        demo: ''
    },
]


const techStack = [
    {
        name: "HTML5",
        path: "src/assets/img/skills/html5.svg"
    },
    {
        name: "CSS3",
        path: "src/assets/img/skills/css3.svg"
    },
    {
        name: "Javascript",
        path: "src/assets/img/skills/js.svg"
    },
    {
        name: "PHP",
        path: "src/assets/img/skills/php.svg"
    },
    {
        name: "Vue.js",
        path: "src/assets/img/skills/vuejs.svg"
    },
    {
        name: "Laravel",
        path: "src/assets/img/skills/laravel.svg"
    },
    {
        name: "Bootstrap",
        path: "src/assets/img/skills/bootstrap5.svg"
    },
    {
        name: "Tailwind CSS",
        path: "src/assets/img/skills/tailwindcss.svg"
    },
    {
        name: "MySQL",
        path: "src/assets/img/skills/mysql.svg"
    }
]
</script>