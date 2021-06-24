<template>
  <v-main>
    <v-container
      class="text-center fill-height"
      style="height: calc(100vh - 58px)"
    >
      <v-row align="center">
        <v-col>
          <h1 class="display-2 primary--text">Whoops, 500</h1>

          <p>There is an error in processing your request.</p>

          <p class="grey--text">{{ msg }}</p>

          <v-btn to="/" color="primary" outlined> Back to Homepage </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    msg() {
      switch (this.$route.query.type) {
        case "param":
          return "Invalid parameter in the request.";
        case "duplicate":
          return "You have already paid this invoice.";
        default:
          return "There is a unknown error.";
      }
    },
  },
};
</script>

<style></style>
