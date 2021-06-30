import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "https://api.dresspay.org";
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: "en",
});

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
