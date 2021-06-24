<template>
  <div>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <home />
      <about />
      <download />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </div>
</template>
<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "../components/Home/NavSection";
import foote from "../components/Home/FooterSection";
import home from "../components/Home/HomeSection";
import about from "../components/Home/AboutSection";
import download from "../components/Home/DownloadSection";

export default {
  name: "Home",
  components: {
    navigation,
    foote,
    home,
    about,
    download,
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 30) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 30;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
