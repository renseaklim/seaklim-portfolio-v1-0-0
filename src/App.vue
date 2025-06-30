
<template>
  <Navbar />
  <RouterView />
  <Foot />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar.vue'
import Foot from './components/layouts/Foot.vue';
</script>