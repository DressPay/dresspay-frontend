<template>
  <v-app-bar app color="primary lighten-1" dark>
    <v-app-bar-title class="text-no-wrap">
      &#x1F457; {{ $route.name }} | DressPay &trade;
    </v-app-bar-title>

    <v-spacer />
    <v-btn disabled icon><v-icon>mdi-translate</v-icon></v-btn>
    <v-btn href="https://github.com/DressPay" icon
      ><v-icon>mdi-github</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.v-app-bar-title__content {
  overflow: initial !important;
}
</style>
