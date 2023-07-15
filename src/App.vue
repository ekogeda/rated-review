<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <v-app>
    <TheHeader />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<style>
a {
  text-decoration: none;
}
</style>