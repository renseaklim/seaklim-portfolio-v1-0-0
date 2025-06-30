<template>
    <div id="cursor-glow" class="pointer-events-none -z-10">
    </div>
    <header class="fixed top-0 h-14 w-full z-50" id="header">
        <nav class="max-w-[95%] mx-auto lg:px-5 flex items-center justify-between h-full">
            <a href="/" class="font-semibold text-brand text-xl">SEAKLIM</a>
            <button class="md:hidden" @click="toggleHiddleMenu">
                <i class="fa-solid fa-bars text-brand text-xl" id="menu-icon"></i>
            </button>
            <ul id="nav-item" class="nav-item flex items-center gap-6 transition-all duration-700
            max-md:absolute max-md:flex-col max-md:h-fit -top-[1000%] left-0 max-md:w-full 
            max-md:item-center max-md:py-6 max-md:mt-14 max-md:bg-secondary max-md:gap-4 " data-visible="false">
                <li class="nav-link" v-for="link in linkArray" :key="link.name">
                    <a :href="link.path"
                        class="group pb-1 dark:text-brand max-md:text-third text-secondary font-medium hover:text-hover dark:hover:text-white relative">
                        {{ link.name }}
                        <span :class="[
                            'absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full group-hover:bg-brand dark:group-hover:bg-white ',
                            { 'w-full bg-brand': urlHash === link.path}
                        ]"></span>
                    </a>
                </li>
                <div class="flex max-md:p-2 max-md:gap-2 items-center max-md:border max-md:border-light rounded-md">
                    <h1 class="dark:text-brand text-secondary max-md:text-third font-medium hover:text-hover md:hidden">
                        Change Theme</h1>
                    <div class="bg-brand w-10 h-5 cursor-pointer rounded-3xl toggler outline outline-1 outline-brand"
                        @click="changeTheme">
                        <div
                            class="text-brand dark:text-yellow-400 bg-white w-5 h-5  rounded-3xl transition-transform text-sm flex items-center justify-center">
                            <i :class="selectedTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"></i>
                        </div>
                    </div>
                </div>
            </ul>
        </nav>
        <!-- progress-bar -->
        <div class="progress-bar-container">
            <div class="progress-bar"></div>
        </div>
    </header>
    <!-- progress circle -->
    <div class="progress-circle-container hidden max-md:hidden">
        <svg class="progress-circle" viewBox="0 0 100 100">
            <circle class="progress-background" cx="50" cy="50" r="45"></circle>
            <circle class="progress-circle-bar" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="scroll-to-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
let selectedTheme = ref();
const urlHash = ref('');

const linkArray = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skill' },
    { name: 'Education', path: '#education' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
];

onMounted(() => {
    const currentPath = window.location.hash;
    if (currentPath) {
        const element = document.querySelector(currentPath);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    darkModeOperation();
    progressBar();
    progressCircle();
    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("header");

        if (window.scrollY > 0) {
            navbar.classList.add("navbar-style");
        } else {
            navbar.classList.remove("navbar-style");
        }
    });
    cursorPointerStyle();
    //check url for navlink
    const checkHash = () => {
        urlHash.value = window.location.hash;
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
});

const cursorPointerStyle = () => {
    const glow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", (e) => {
        glow.style.left = `${e.clientX - glow.offsetWidth / 2}px`;
        glow.style.top = `${e.clientY - glow.offsetHeight / 2}px`;
        glow.classList.remove("hidden");
    });

    document.addEventListener("mouseleave", () => {
        glow.classList.add("hidden");
    });

}

const darkModeOperation = () => {
    selectedTheme.value = localStorage.getItem('theme');
    if (selectedTheme.value) {
        document.body.classList.add(selectedTheme.value);
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.add('light');
    }
}
const changeTheme = () => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    selectedTheme.value = newTheme;
    themeSwichterToogle();
}

const themeSwichterToogle = () => {
    const toggler = document.querySelector('.toggler');
    toggler.children[0].classList.toggle('translate-x-[100%]');
}

const toggleHiddleMenu = () => {
    const navItem = document.getElementById('nav-item');
    const icon = document.getElementById("menu-icon");

    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
    if (navItem.classList.contains("-top-[1000%]")) {
        navItem.classList.replace("-top-[1000%]", "top-0");
    } else {
        navItem.classList.replace("top-0", "-top-[1000%]");
    }
}

const progressBar = () => {
    // Progress bar
    function updateProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    }

    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
}

// Progress circle
function updateProgressCircle() {
    const progressContainer = document.querySelector('.progress-circle-container');
    const progressElement = document.querySelector('.progress-circle-bar');
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);
    progressElement.style.strokeDashoffset = 283 - progress;

    scrollToTopElement.style.opacity = '1';

    if (window.scrollY > 0) {
        progressContainer.classList.remove("hidden");
        progressContainer.classList.add("flex");
    } else {
        progressContainer.classList.remove("flex");
        progressContainer.classList.add("hidden");
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const progressCircle = () => {
    const scrollToTopElement = document.querySelector('.scroll-to-top');
    scrollToTopElement.addEventListener('click', scrollToTop);
    updateProgressCircle();
    window.addEventListener('scroll', updateProgressCircle);
    window.addEventListener('resize', updateProgressCircle);
}
</script>