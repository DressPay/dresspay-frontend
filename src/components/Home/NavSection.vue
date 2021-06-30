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
      <div class="hidden-sm-and-down">
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">{{ $t("nav.home") }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">{{ $t("nav.features") }}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">{{ $t("nav.source") }}</span>
        </v-btn>
        <v-btn icon @click="switchLang">
          <v-icon>mdi-translate</v-icon>
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
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    switchLang() {
      switch (this.$root.$i18n.locale) {
        case "en": {
          this.$root.$i18n.locale = "zh";
          break;
        }
        case "zh": {
          this.$root.$i18n.locale = "en";
          break;
        }
        default:
          this.$root.$i18n.locale = "en";
      }
    },
  },
};
</script>

<i18n>
{
  "en": {
    "nav": {
      "home": "Home",
      "features": "Features",
      "source": "Source"
    }
  },
  "zh": {
    "nav": {
      "home": "主页",
      "features": "特点",
      "source": "源码"
    }
  }
}
</i18n>
