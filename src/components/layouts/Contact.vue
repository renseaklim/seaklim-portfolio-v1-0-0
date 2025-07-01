<template>
    <section class="dark:bg-gray-950/50 py-12 px-4 md:px-8 lg:px-16"  data-aos="fade-up" data-aos-delay="500">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Send me a message</h2>
                <form class="space-y-5">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email"
                            class="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                            placeholder="Your email">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <input type="text"
                            class="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                            placeholder="Subject">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea rows="5"
                            class="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                            placeholder="Your message"></textarea>
                    </div>
                    <button type="button"
                        class="px-6 py-2 bg-brand text-white rounded-md hover:bg-opacity-90 transition">Send</button>
                </form>
            </div>

            <div class="space-y-6">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
                <p class="text-gray-700 dark:text-gray-300"><i class="fa-solid fa-phone mr-2 text-brand"></i> +855
                    85604084</p>
                <p class="text-gray-700 dark:text-gray-300"><i class="fa-solid fa-envelope mr-2 text-brand"></i>
                    renseaklim.dev@gmail.com</p>
                <p class="text-gray-700 dark:text-gray-300"><i class="fa-solid fa-location-dot mr-2 text-brand"></i>
                    Street 2004, Sangkat Teuk Thla, Khan Sen Sok, Phnom Penh</p>

                <div class="flex space-x-5 mt-6 text-xl text-brand">
                    <a href="https://www.facebook.com/seak.lim.10" target="_blank" class="hover:text-blue-600"><i class="fab fa-facebook"></i></a>
                    <a href="https:/t.me/seaklim02" target="_blank" class="hover:text-blue-400"><i class="fab fa-telegram"></i></a>
                    <a href="https://www.linkedin.com/in/ren-seaklim" target="_blank" class="hover:text-blue-700"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/renseaklim" target="_blank" class="hover:text-gray-800 dark:hover:text-white"><i class="fab fa-github"></i></a>
                </div>
            </div>

        </div>
    </section>

</template>
<script setup>
</script>