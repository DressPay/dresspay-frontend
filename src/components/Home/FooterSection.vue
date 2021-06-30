<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0" v-html="$t('desc')"> </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>DressPay &trade;</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
.v-card.secondary {
  background-color: #171b34 !important;
  border-color: #171b34 !important;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-web",
        link: "https://dresspay.org",
      },
      {
        text: "mdi-github",
        link: "https://github.com/DressPay",
      },
    ],
  }),
};
</script>

<i18n>
{
  "en": {
    "desc": "This project is sponsored and technically supported by <b>Strategic Explorations</b>."
  },
  "zh": {
    "desc": "本项目由 <b>Strategic Explorations</b> 提供技术支持"
  }
}
</i18n>
