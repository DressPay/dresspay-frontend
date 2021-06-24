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
                Want to assist in development?
              </h1>
              <h1 class="font-weight-light">
                This project is completely free and open source, you can find it
                on GitHub, or you can build an instance of DressPay yourself.
              </h1>
              <v-btn
                rounded
                outlined
                href="https://github.com/DressPay"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-github </v-icon>
                GitHub
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
