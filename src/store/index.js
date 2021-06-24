import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photo_upload: null,
    photo_camera: null,
  },
  getters: {
    anyPhoto: (st) => {
      return st.photo_upload != null || st.photo_camera != null;
    },
  },
  mutations: {
    updatePhotoUpload(st, photo) {
      st.photo_upload = photo;
    },
    updatePhotoCamera(st, photo) {
      st.photo_camera = photo;
    },
  },
  actions: {},
  modules: {},
});
