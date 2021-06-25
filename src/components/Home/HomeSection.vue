<template>
  <section id="hero">
    <v-parallax dark src="@/assets/img/bgHero.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">
                Pay with your dress photo!
              </h1>
              <h1 class="font-weight-light">
                Industry-leading innovative payment and settlement methods.
                <br />You can now use &#x1F457; dress photos to pay bills!
              </h1>

              <v-btn rounded text large dark to="/demo" class="mt-5">
                <v-icon left>mdi-presentation</v-icon>Demo
              </v-btn>
              <v-btn
                rounded
                text
                large
                dark
                href="https://docs.dresspay.org"
                class="mt-5"
              >
                <v-icon left>mdi-file-document</v-icon>Documentation
              </v-btn>
              <br />
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-5"
              >
                Learn more
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: require("@/assets/img/feature1.svg"),
          title: "Authentic and effective",
          text: "All uploaded dress photos will be manually reviewed and published in the system. They will be stored safely.",
        },
        {
          img: require("@/assets/img/feature2.svg"),
          title: "Fast payment",
          text: "You only need to upload your own photos or take a selfie on site to complete the payment.",
        },
        {
          img: require("@/assets/img/feature3.svg"),
          title: "Universal usage",
          text: "We will launch APIs for online and offline transactions and linkage with other business platforms, so that dress photo payments can cover every corner of your life.",
        },
      ],
    };
  },
};
</script>

<style>
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
