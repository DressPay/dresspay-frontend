<template>
  <div>
    <web-cam ref="cam" :selectFirstDevice="true" v-if="!photo" />
    <v-btn x-large block @click="takePhoto" v-if="!photo"
      ><v-icon>mdi-camera</v-icon>Take Photo!</v-btn
    >
    <v-img :src="photo" v-if="photo"></v-img>
    <v-btn x-large block @click="photo = null" v-if="photo"
      ><v-icon>mdi-delete</v-icon>Retake!</v-btn
    >
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";
export default {
  data: () => ({
    photo: null,
  }),
  components: {
    WebCam,
  },
  methods: {
    takePhoto() {
      this.photo = this.$refs.cam.capture();
      this.$store.commit("updatePhotoUpload", this.$refs.cam.capture());
    },
  },
};
</script>

<style></style>
