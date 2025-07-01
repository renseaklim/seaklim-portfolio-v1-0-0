<template>
    <section class=" bg-yellow-800/30 dark:bg-slate-950/30 py-10" id="education"  data-aos="fade-up" data-aos-delay="400">
        <div class="container max-w-screen-xl flex flex-col items-center justify-center gap-9">
            <div class="relative">
                <p class="font-bold text-light dark:text-brand text-8xl max-xl:text-7xl max-lg:text-5xl">
                    Education
                </p>
                <p class="font-bold text-light text-8xl max-xl:text-7xl max-lg:text-5xl text-stroke absolute top-1">
                    Education
                </p>
            </div>

            <div class="mx-auto">
                <ul class="">
                    <li class="group relative py-6" v-for="(edu, index) in education" :key="index">
                        <div
                            class="absolute inset-0 w-1 bg-light group-first:top-1/2 group-last:bottom-1/2 block">
                        </div>
                        <div class="items-center gap-6 flex">
                            <div class="relative mb-0 pl-16 max-sm:pl-5">
                                <div class="absolute left-0 top-1/2 h-1 w-full bg-light block"></div>
                                <div
                                    class="relative flex items-center justify-center h-16 w-16 rounded-full bg-brand">
                                    <i :class="edu.icon + ' text-light text-xl'"></i>
                                </div>
                            </div>

                            <div>
                                <p class="max-sm:text-base dark:text-white">
                                    {{ edu.date }}
                                </p>
                                <h2 class="space-y-1">
                                    <span
                                        class="block text-xl font-semibold max-sm:text-sm text-white dark:text-brand">{{
                                            edu.academy }}</span>
                                </h2>
                                <p class="max-sm:text-xs dark:text-[#DFDFD6]">
                                    {{ edu.location }}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>
<script setup>
let education = [
    {
        date: "2022 - 2025",
        academy: "Bachelor of Computer Science",
        icon: "fa-solid fa-graduation-cap",
        location: "Royal University of Phnom Penh"
    },
    {
        date: "2024 - 2025",
        academy: "Web Development Scholarship from CBRD, Ministry of Post and Telecommunications of Cambodia",
        icon: "fa-solid fa-code",
        location: "Phnom Penh, Cambodia"
    },
    {
        date: "2023 - 2024",
        academy: "Python - Big Data provided by Scholarship of Samsung Innovation Campus",
        icon: "fa-solid fa-code",
        location: "Royal University of Phnom Penh"
    },
    {
        date: "2011 - 2021",
        academy: "High School",
        icon: "fa-solid fa-graduation-cap",
        location: "SIS International School | Phnom Penh, Cambodia"
    },
    {
        date: "2011 - 2019",
        academy: "Completed General English Program",
        icon: "fa-solid fa-graduation-cap",
        location: "SIS International School | Phnom Penh, Cambodia"
    }
]
</script>