<template>
  <div id="main-div">
    <BreadCrumb />

    <div id="center-div">
      <CardFormat
      @fileFormatChoice="dataValidated"
      ref="format"
      />
    </div>

    <div id="footer">
      <button id="previous-button" @click="goBack">
        <i class="fa-solid fa-angle-left"></i>Précédent
      </button>
      <button v-if="!goToNextPage" id="next-button-disabled" disabled>Suivant</button>
      <button v-else-if="goToNextPage" id="next-button-enabled" @click="goToCardInformation" >Suivant</button>
    </div>
  </div>
</template>

<script>
import CardFormat from "../components/AddCardView/cardFormat";
import BreadCrumb from "../components/breadCrumb";

export default {
  name: "addCard",
  components: {
    CardFormat,
    BreadCrumb,
  },
  data() {
    return {
      fileSelected: false,
      goToNextPage: false,
      payload: [this.$store.state.card.length-1, "file"],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    dataValidated() {
      this.fileSelected = true;
      if (this.fileSelected === true) {
        this.goToNextPage = true;
      }
      this.$store.commit("changeFormat", this.payload);
    },
    goToCardInformation() {
      this.$store.commit("changeStep", 2);
      this.$router.push({ name: "cardInformation" });
    },
  },
    mounted() {
    console.log('step add Card: ', this.$store.state.step);
   if (this.$store.state.card[this.$store.state.card.length-1].format !== null) {
      this.$refs.format.activateButton()
    }
  },
};
</script>

<style scoped>
#main-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
}

#center-div {
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
}

#footer {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
}
</style>