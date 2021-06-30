<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/ill2.svg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">
                {{ $t("title") }}
              </h1>
              <h1 class="font-weight-light">
                {{ $t("desc") }}
              </h1>
              <v-btn
                rounded
                outlined
                href="https://github.com/DressPay"
                target="_blank"
                large
                color="white"
                class="mt-4 mr-4"
              >
                <v-icon class="mr-2"> mdi-github </v-icon>
                {{ $t("btn.github") }}
              </v-btn>

              <v-btn
                rounded
                outlined
                href="https://docs.dresspay.org"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-file-document </v-icon>
                {{ $t("btn.docs") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Want to assist in development?", 
    "desc": "This project is completely free and open source, you can find it on GitHub, or you can build an instance of DressPay yourself.", 
    "btn": {
      "github": "GitHub", 
      "docs": "Documentation"
    }
  },
 "zh": {
    "title": "希望协助开发运行?", 
    "desc": "本项目是完全自由且开源的，您可以在 GitHub 上找到它的所有相关代码，也可以自己搭建 DressPay 的实例。", 
    "btn": {
      "github": "GitHub", 
      "docs": "文档"
    }
  }
}
</i18n>
