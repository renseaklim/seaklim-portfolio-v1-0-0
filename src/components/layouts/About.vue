<template>
    <section class="h-[60vh] md:h-[95vh] min-h-screen bg-yellow-700/20 dark:bg-slate-950/50 z-10 relative" 
     :id="id">
        <div class="container max-w-screen-xl h-full flex max-md:flex-col items-center justify-center gap-11 z-10">
            <div class="relative"  data-aos="fade-up" data-aos-duration="700">
                <div class="absolute w-full h-full peer z-10 cursor-pointer"></div>
                <img src="@/assets/img/presentation-img2.jpg" alt="" class="max-w-[30rem] max-lg:max-w-[25rem] max-md:w-[17rem] rounded-2xl shadow-md peer-hover:rotate-12
                transition-transform duration-500">
                <img src="@/assets/img/presentation-img1.jpg" alt=""
                    class="max-w-[30rem] max-lg:max-w-[25rem] max-md:w-[17rem] rounded-2xl shadow-md -z-10
                 absolute top-0 right-0 rotate-12 peer-hover:rotate-0 transition-transform duration-500 peer-hover:z-0">
            </div>
            <div class="flex flex-col gap-6 max-md:items-center justify-center"  data-aos="fade-up" data-aos-duration="1000">
                <div class="relative">
                    <p class="font-bold text-brand text-9xl max-xl:text-7xl max-lg:text-5xl">About me</p>
                    <p class="font-bold text-brand text-9xl max-xl:text-7xl max-lg:text-5xl text-stroke absolute top-1">About me</p>
                </div>
                <p class="text-brand hover:text-black dark:hover:text-brand text-xl p-1 text-balance max-lg:text-base max-md:text-sm max-md:text-center">
                    <i class="fa-solid fa-quote-left"></i> I am an enthusiastic and detail-oriented Web Developer.
                     I am proficient in building responsive and interactive web
                    applications, with experience in developing both front-end and back-end features through academic
                    and personal projects. I am passionate about continuous learning and committed to writing clean,
                    efficient, and scalable code. <i class="fa-solid fa-quote-right"></i>
                </p>
            </div>
        </div>
    </section>
</template>
<script setup>
defineProps(['id']);

</script>