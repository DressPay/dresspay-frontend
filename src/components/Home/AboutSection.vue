<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2" v-html="$t('title')"></h1>
              <h1 class="font-weight-light display-1 mb-3">
                {{ $t("desc") }}
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    {{ $t("para.0") }}
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    {{ $t("para.1") }}
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    {{ $t("para.2") }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
<i18n>
{
  "en": {
    "title": "About DressPay&trade;", 
    "desc": "Don't let your cute dress photos lie in the hard drives for nothing!", 
    "para": {
      "0": "We use advanced server-side technology and innovative settlement solutions to enable your dress photos to be converted into bills you pay in a true sense.", 
      "1": " Cute photos should be taken out for everyone to enjoy! DressPay&trade; plans to add social functions in the future to make transactions more open and transparent and make your dress photos visible to more visitors.",
      "2": "Connect to the platform and take off immediately! Many people are unwilling to use some payment platforms because of the need for real-name authentication or privacy issues, and we do not have such a problem! All bills paid with dress photos do not require these boring processes."
    }
  },
  "zh": {
    "title": "关于 DressPay&trade;", 
    "desc": "不要让您可爱的的女装照躺在硬盘里吃灰！", 
    "para": {
      "0": "我们使用先进的服务端技术和创新的结算方案，将您的女装照转变为真正意义上的可支付账单的凭据。", 
      "1": "可爱的照片应该拿出来给大家分享！ DressPay&trade; 计划在未来引入社交功能，在使交易信息更加公开透明的同时，让您的女装照被更多的人看到。",
      "2": "接入平台，然后立即起飞！很多人因为需要实名认证或者隐私问题而不愿意使用一些支付平台，我们没有这样的问题！所有通过女装照支付的账单都不需要无聊冗长的手续。"
    }
  }
}
</i18n>
