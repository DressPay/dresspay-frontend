<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-alert
            class="my-0"
            v-if="'notify' in $route.query"
            border="left"
            icon="mdi-check"
            prominent
            type="success"
            ><b>Congratulations! It works!</b><br />Your test payment finished
            successfully.</v-alert
          >
        </v-col>
        <v-col cols="12" md="6" lg="8">
          <v-card class="mb-4">
            <v-card-text class="px-8 pt-8">
              <h2 class="text-center">This is a demo for DressPay &trade;.</h2>
              <p class="mt-4 text-center">
                You can get a preview of the latest payment workflow here.
              </p>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title class="primary white--text">
              Demo Settings
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-form
                action="https://api.dresspay.org/gateway"
                method="post"
                ref="demoform"
              >
                <v-text-field
                  type="text"
                  name="subject"
                  v-model="formdata.subject"
                  label="Subject Name"
                />
                <v-text-field
                  type="text"
                  name="out_trade_no"
                  label="Invoice ID"
                  v-model="formdata.out_trade_no"
                  append-icon="mdi-dice-multiple"
                  mdi-dice
                  @click:append="reloadUUID"
                />
                <v-text-field
                  readonly
                  name="notify_url"
                  type="url"
                  label="Notify URL"
                  v-model="formdata.notify_url"
                />
                <v-text-field
                  label="Return URL"
                  type="url"
                  name="return_url"
                  v-model="formdata.return_url"
                />
                <v-text-field
                  readonly
                  name="clientid"
                  label="Client ID"
                  v-model="formdata.clientid"
                />
                <v-text-field
                  label="Price"
                  type="number"
                  prefix="$"
                  name="price"
                  v-model="formdata.price"
                />
                <input
                  name="sign"
                  v-model="formdata.sign"
                  style="display: none"
                />
                <button style="display: none" type="submit" ref="submitbtn" />
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-alert border="left" dismissible icon="mdi-information" type="info"
            ><b>This is a demo!</b><br />Your photo uploaded will not be saved
            and all payments would be accepted automatically.</v-alert
          >
          <v-card>
            <v-card-title class="primary white--text">
              Request Arguments
            </v-card-title>
            <v-card-text class="py-4 preview-code">
              subject: <code>{{ formdata.subject }}</code
              ><br />
              notify_url: <code>{{ formdata.notify_url }}</code
              ><br />
              price: <code>{{ formdata.price }}</code
              ><br />
              return_url: <code>{{ formdata.return_url }}</code
              ><br />
              clientid: <code>{{ formdata.clientid }}</code
              ><br />
              out_trade_no: <code>{{ formdata.out_trade_no }}</code
              ><br />
              sign:
              <code>[Generated with token]</code>
            </v-card-text>
            <v-divider />
            <v-card-text>
              endpoint: <code>{{ axios.defaults.baseURL + "/gateway" }}</code>
            </v-card-text>
          </v-card>
          <v-btn
            x-large
            block
            color="primary"
            @click="pay"
            :disabled="loading"
            class="mt-4"
            ><v-icon left>mdi-check</v-icon
            >{{ loading ? "Processing..." : "Submit" }}</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { v4 } from "uuid";

export default {
  data: () => ({
    formdata: {
      subject: "Example Payment",
      notify_url: "https://api.dresspay.org/demo/notify",
      price: 114514,
      return_url: "https://dresspay.org/demo?notify=yes",
      clientid: "0",
      out_trade_no: v4(),
      sign: null,
    },
    loading: false,
  }),
  methods: {
    reloadUUID() {
      this.formdata.out_trade_no = v4();
    },
    pay: function () {
      this.loading = true;
      var form = new FormData();
      form.append("subject", this.formdata.subject);
      form.append("price", this.formdata.price);
      form.append("return_url", this.formdata.return_url);
      form.append("out_trade_no", this.formdata.out_trade_no);
      setTimeout(() => {
        this.axios.post("/demo/sign", form).then((res) => {
          if (!res.data.error) {
            this.formdata.sign = res.data.data.sign;
            setTimeout(() => {
              this.$refs.submitbtn.click();
            }, 1000);
          } else {
            this.$router.push("/error?type=" + res.data.reason);
          }
        });
      }, 2000);
    },
  },
};
</script>
<style scoped>
.preview-code {
  white-space: nowrap;
  overflow-x: auto;
}
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
