<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark");

const drawer = ref(null)
</script>

<template>
  <v-app-bar prominent elevate-on-scroll>
    <v-toolbar-title>Rated Review</v-toolbar-title>

    <v-spacer />

    <div class="hidden-xs">
      <v-btn to="/" variant="text" class="me-1">Home</v-btn>
      <v-btn to="/about" variant="text">About</v-btn>
    </div>

    <v-spacer />

    <v-btn :color="$vuetify.theme.name == 'dark' ? 'yellow darken-3' : 'dark'"
      :icon="$vuetify.theme.name == 'dark' ? 'mdi-lightbulb-outline' : 'mdi-lightbulb'" size="small" @click="toggleTheme">
    </v-btn>

    <v-divider vertical inset class="my-auto mx-2" style="height: 25px;" />

    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/55.jpg">
      <v-list-item-title class="py-4">Modi Minus</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard">
        <v-btn to="/" variant="text" class="me-1">Home</v-btn>
      </v-list-item>
      <v-list-item prepend-icon="mdi-forum">
        <v-btn to="/about" variant="text">About</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<style scoped>
.v-toolbar-title {
  flex: none !important;
}
</style>
