<template>
  <v-main>
    <v-container
      class="text-center fill-height"
      style="height: calc(100vh - 58px)"
    >
      <v-row align="center">
        <v-col>
          <v-icon x-large color="success">mdi-check-circle</v-icon>
          <h1 class="display-2 primary--text">Payment submitted.</h1>

          <p>We'll check your photo and notify you soon&trade;.</p>

          <p class="grey--text">Transaction Code: {{}}</p>

          <v-btn
            :href="'next' in $route.query ? $route.query.next : '/'"
            color="primary"
            outlined
          >
            Back to the Merchant
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style></style>
