<script setup>
import { RouterView } from 'vue-router'
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="bg-black">
    <header>
      <NavComponent class=""/>
    </header>
    <main>
      <RouterView class="h-svh"/>
    </main>
    <footer>
      <FooterComponent class="text-white"/>
    </footer>
  </div>
</template>

<style scoped>
</style>
