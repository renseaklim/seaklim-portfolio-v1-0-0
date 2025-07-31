<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, nextTick } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
onMounted(async () => {
  await nextTick()
  AOS.init({
    once: true,
    duration: 600,
  })
})
</script>
