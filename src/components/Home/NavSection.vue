<template>
  <div>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-app-bar-title> &#x1F457; DressPay &trade; </v-app-bar-title>
      <v-spacer />
      <div>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">Features</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">Source</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contatos", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
