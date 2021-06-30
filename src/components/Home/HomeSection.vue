<template>
  <section id="hero">
    <v-parallax dark src="@/assets/img/bgHero.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">
                {{ $t("title.title") }}
              </h1>
              <h1 class="font-weight-light" v-html="$t('title.desc')"></h1>

              <v-btn rounded text large dark to="/demo" class="mt-5">
                <v-icon left>mdi-presentation</v-icon>{{ $t("btn.demo") }}
              </v-btn>
              <v-btn
                rounded
                text
                large
                dark
                href="https://docs.dresspay.org"
                class="mt-5"
              >
                <v-icon left>mdi-file-document</v-icon>{{ $t("btn.docs") }}
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
                {{ $t("btn.more") }}
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
            <v-col cols="12" md="4" class="text-center">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="features_img[0]"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">
                    {{ $t("features.0.title") }}
                  </h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ $t("features.0.desc") }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="features_img[1]"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">
                    {{ $t("features.1.title") }}
                  </h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ $t("features.1.desc") }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="features_img[2]"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">
                    {{ $t("features.2.title") }}
                  </h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ $t("features.2.desc") }}
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
import feature1 from "@/assets/img/feature1.svg";
import feature2 from "@/assets/img/feature2.svg";
import feature3 from "@/assets/img/feature3.svg";

export default {
  data() {
    return {
      features_img: [feature1, feature2, feature3],
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

<i18n>
{
  "en": {
    "title": {
      "title": "Pay with your dress photo!",
      "desc": "Industry-leading innovative payment and settlement methods.<br />You can now use &#x1F457; dress photos to pay bills!"
    },
    "btn" : {
      "demo": "Demo",
      "docs": "Documentation",
      "more": "Learn More"
    },
    "features": {
      "0": {
        "title": "Authentic and effective",
        "desc": "All uploaded dress photos will be manually reviewed and published in the system. They will be stored safely."
      },
       "1": {
        "title": "Fast payment",
        "desc": "You only need to upload your own photos or take a selfie on site to complete the payment."
      },
       "2": {
        "title": "Universal usage",
        "desc": "We will launch APIs for online and offline transactions and linkage with other business platforms, so that dress photo payments can cover every corner of your life."
      }
    }
  },
  "zh": {
    "title": {
      "title": "使用女装照支付您的账单!",
      "desc": "业界领先的创新支付与结算方案<br />现在您可以使用 &#x1F457; 女装照来支付账单了!"
    },
    "btn" : {
      "demo": "体验示例",
      "docs": "阅读文档",
      "more": "查看更多"
    },
    "features": {
      "0": {
        "title": "真实有效",
        "desc": "所有上传的女装照都将被人工审核并在平台上发布。它们将会被妥善保存。"
      },
       "1": {
        "title": "快速支付",
        "desc": "为完成支付，您需要做的只是对着自己的小裙子来一张自拍，或是选择一张自己的历史照片。"
      },
       "2": {
        "title": "广泛使用",
        "desc": "我们将会发布适用于线上和线下交易的 API，以及与其他商业平台互联互通，使女装支付能适用于您生活的方方面面。"
      }
    }
  }
}
</i18n>
