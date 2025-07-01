<template>
    <div class="hero h-[90vh] md:h-screen" id="home">
        <div class="container h-full max-w-screen-xl flex items-center justify-between 
        max-md:flex-col max-md:justify-end max-md:relative">
            <div
                class="right flex-1 max-sm:flex-grow-0 max-md:text-center
             max-md:absolute max-sm:top-16 max-md:top-[70%] max-md:left-50 
            max-md:z-20  dark:max-md:bg-slate-500 max-md:bg-slate-200/80 dark:max-sm:bg-transparent max-sm:bg-transparent max-sm:static">
                <p class="text-brand text-xl max-sm:text-sm font-bold"><span class="text-purple-400">Hey</span>, I'm
                    Seaklim👋🏻</p>
                <p class="gradient-text text-9xl font-extrabold 
                max-sm:font-semibold max-sm:py-2 max-sm:text-6xl max-lg:text-7xl max-xl:text-8xl">Jr Web Developer
                </p>
                <div class="flex justify-end max-md:justify-center items-center gap-2">
                    <p class="text-brand max-sm:text-sm text-2xl font-bold text-end">Based in Phnom Penh, CAMBODIA</p>
                    <img src="@/assets/icons/cambodia.png" class="w-7 h-7" alt="">
                </div>
                <div class="w-100 flex justify-center  md:justify-end py-2">
                    <div @click="openResume"
                    class="bg-secondary text-light cursor-pointer w-32 text-center p-2 rounded-md hover:bg-brand hover:shadow-md hover:shadow-white ">
                    Download CV</div>
                </div>

            </div>
            <div class="left flex-1 max-sm:flex-grow-0 flex justify-center items-end relative h-full">
                <img src="@/assets/img/hero-img1.png" class="w-[90%] object-contain z-10 max-md:w-4/6" alt="">
                <div id='svgContainer' class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <svg class="w-full " viewBox='0 0 100 100'>
                        <circle class='circle' id='circle-1' cx='50' cy='50' r='10' fill='rgba(162, 123, 92, .25)' />
                        <circle class='circle' id='circle-2' cx='50' cy='50' r='10' fill='rgba(162, 123, 92, .25)' />
                        <circle class='circle' id='circle-3' cx='50' cy='50' r='10' fill='rgb(162, 123, 92, .25)' />
                        <circle class='circle' id='circle-4' cx='50' cy='50' r='10' fill='rgb(162, 123, 92, .25)' />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function openResume() {
    window.open('https://drive.google.com/file/d/1zG2qpcBKY84Zw-9VBPpn3I7xvvNcOa1B/view?usp=sharing', '_blank');
}

</script>