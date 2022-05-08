<template>
  <div id="drop-file">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      @vdropzone-success="checkFileUploadSuccess"
      @checkFileUploadSuccess="fileSentToStore"
    ></vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "uploadFile",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      fileSentToStore: false,
      fileAlreadyInStore: this.$store.state.card[this.$store.state.card.length-1].file,
      payload: [],
      /*  dropzone options  */
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFiles: 1,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        dictDefaultMessage:
          "<div><i class='fa fa-cloud-upload'></i><label>Glisser ou déposer vos fichiers ici</label></div><div><p>Ou chercher un fichier</p></div>",
      },
    };
  },
  mounted() {
    if (this.$store.state.card[this.$store.state.card.length-1].file !== null) {
      let file = {size: null, name: "File already uploaded.", type: "image/png" };
      let  url = "https://httpbin.org/post";
      this.$refs.myVueDropzone.manuallyAddFile(file, url);
    }
  },
  methods: {
    checkFileUploadSuccess(response, file) {
      if (response.status === "success") {
        this.payload = [this.$store.state.card.length-1, file];
        this.$store.commit("changeUploadedFile", this.payload);
        if (this.$store.state.card.file !== null) {
          this.$emit("fileSentToStore");
        }
      }
    },
  },
};
</script>

<style scoped>
#drop-file {
  width: 70%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0 20px 0;
}

#dropzone {
  width: 400px;
  border: 2px dashed #bdbdbd;
  border-radius: 1px;
}
</style>
