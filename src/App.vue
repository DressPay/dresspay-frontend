<template>
  <v-app>
    <nav-bar v-if="$route.name != 'Home'" />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";

export default {
  components: { NavBar },
  name: "App",
};
</script>
