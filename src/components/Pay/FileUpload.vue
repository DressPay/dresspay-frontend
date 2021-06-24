<template>
  <div>
    <v-img
      :src="this.$store.state.photo_upload"
      v-if="this.$store.state.photo_upload"
    ></v-img>
    <v-file-input
      show-size
      :error="err"
      :error-messages="err ? 'Please select a valid photo.' : ''"
      v-model="photo"
      @change="updatePhoto"
      @click:clear="$store.commit('updatePhotoUpload', null)"
      truncate-length="15"
    ></v-file-input>
  </div>
</template>

<script>
export default {
  data: () => ({
    photo: null,
    err: false,
  }),
  methods: {
    updatePhoto() {
      if (this.photo != null) {
        if (this.photo.type.match("image.*")) {
          var reader = new FileReader();
          reader.readAsDataURL(this.photo);
          reader.onload = () => {
            this.$store.commit("updatePhotoUpload", reader.result);
          };
          this.err = false;
        } else {
          this.err = true;
        }
      }
    },
  },
};
</script>

<style></style>
