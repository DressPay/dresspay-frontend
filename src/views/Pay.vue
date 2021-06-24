<template>
  <v-main>
    <v-container class="mt-8">
      <v-row lign="center" justify="center">
        <v-col cols="12" md="8" lg="6" xl="4">
          <v-card class="mb-4" dark color="primary">
            <h2 class="text-center white--text pa-8">
              It's time to upload your &#x1F457; dress photo!
            </h2>
          </v-card>
          <v-card>
            <v-card-title class="primary white--text font-weight-black title">
              PAY DETAILS
            </v-card-title>
            <v-card-text class="pa-4">
              <notice />
              <p class="text-center">
                You'll pay <b>Strategic Explorations Ltd</b>:
              </p>
              <h1 class="text-h2 text-center">{{ pay_price }}</h1>
              <p class="text-center grey--text mt-2">
                For transaction ID {{ pay_txid }}: {{ pay_comment }}
              </p>
            </v-card-text>
            <v-divider />
            <v-card-text class="text-center"
              >Please select one method to post your dress photo:</v-card-text
            >
            <v-tabs grow v-model="upload_method">
              <v-tabs-slider></v-tabs-slider>
              <v-tab :key="0">
                <v-icon left>mdi-upload</v-icon>Upload file
              </v-tab>
              <v-tab :key="1"
                ><v-icon left>mdi-camera</v-icon>Take a photo
              </v-tab>
            </v-tabs>
            <v-tabs-items class="pa-4" v-model="upload_method">
              <v-tab-item :key="0">
                <file-upload />
              </v-tab-item>
              <v-tab-item :key="1">
                <camera />
              </v-tab-item>
            </v-tabs-items>
            <v-divider />
            <v-expand-transition>
              <div v-show="$store.getters.anyPhoto">
                <v-card-text>
                  If possible, you can provide your information for us to be
                  better previewed in the gallery:

                  <v-text-field
                    v-model="comment"
                    label="Your name or signature (Optional)"
                  ></v-text-field>
                  <v-checkbox
                    v-model="accept_term"
                    label="I accept the Term of Service of Dress Pay."
                  ></v-checkbox>
                </v-card-text>
                <v-divider />
                
              </div>
            </v-expand-transition>
            <pay-footer />
          </v-card>
          <v-card-actions>
                  <v-btn
                    block
                    x-large
                    @click="pay"
                    :disabled="!($store.getters.anyPhoto && accept_term)"
                    color="primary"
                    ><v-icon large left>mdi-cash-check</v-icon>PAY!</v-btn
                  >
                </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Camera from "../components/Pay/Camera.vue";
import FileUpload from "../components/Pay/FileUpload.vue";
import Notice from "../components/Pay/Notice.vue";
import PayFooter from "../components/Pay/PayFooter.vue";
export default {
  components: { FileUpload, Camera, Notice, PayFooter },
  name: "Pay",
  data: () => ({
    upload_method: 0,
    comment: null,
    accept_term: false,
  }),
  computed: {
    pay_comment() {
      return this.$route.query.subject;
    },
    pay_txid() {
      return this.$route.query.out_trade_no;
    },
    pay_price() {
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(this.$route.query.price);
    },
  },
  methods: {
    pay() {
      var form = new FormData();
      Object.keys(this.$route.query).forEach((k) => {
        form.append(k, this.$route.query[k]);
      });
      form.append(
        "photo",
        this.upload_method
          ? this.$store.state.photo_camera
          : this.$store.state.photo_upload
      );
      form.append("comment", this.comment);
      this.axios.post("/pay", form).then((res) => {
        if (!res.data.error) {
          var next = this.$route.query.return_url;
          this.$router.push("/success?next=" + encodeURIComponent(next));
        } else {
          this.$router.push("/error?type=" + res.data.reason);
        }
      });
    },
  },
};
</script>
<style scoped>
main:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-image: url("../assets/bg_tile.png");
  background-repeat: repeat;
}
</style>
