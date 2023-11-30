<script setup>
 import { defineForMobile } from './helpers/uiScreenshotSize';

  let { width, height } = defineForMobile();

</script>

<template>
  <div class="app-component"> 
    <router-view />
  </div>
</template>

<style scoped>
 
</style>
