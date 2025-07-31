<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, nextTick, watchEffect } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
onMounted(async () => {
  await nextTick()
  AOS.init()
})


watchEffect(() => {
  nextTick(() => {
    AOS.refresh()
  })
})
</script>
