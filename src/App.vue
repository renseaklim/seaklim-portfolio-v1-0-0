<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, nextTick } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
onMounted(() => {
  nextTick(() => {
    AOS.init({
      once: true,
      offset: 120,
    });
    AOS.refresh();
    window.scrollTo(0, 0); 
  });
});
</script>
