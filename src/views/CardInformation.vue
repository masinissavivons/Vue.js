<template>
  <div id="main-div">
    <BreadCrumb />

    <div id="center-div">
      <h1>Renseignez la carte</h1>

      <UploadFile @fileSentToStore="fileReceived" />

      <InputField @inputChange="handleInput" />

      <TeamTags @tagsSentToParent="tagsReceived" />
    </div>

    <div id="footer">
      <button id="previous-button" @click="goBack">
        <i class="fa-solid fa-angle-left"></i>Précédent
      </button>

      <button v-if="fileUploadedSuccessFromChild === true
      && inputFieldFromChild === true
      && tagsSentFromChild === true" id="next-button-enabled" @click="goToSelectTrigger()" ref="next">
        Suivant
      </button>
      <button v-else id="next-button-disabled" disabled>Suivant</button>

    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCrumb";
import UploadFile from "../components/CardInformationView/uploadFile";
import InputField from "../components/CardInformationView/inputField";
import TeamTags from "../components/CardInformationView/teamTags";

export default {
  name: "cardInformation",
  components: {
    BreadCrumb,
    UploadFile,
    InputField,
    TeamTags,
  },
  data() {
    return {
      /*  mandatory fields to be true go to next screen + send to Store */
      fileUploadedSuccessFromChild: false,
      inputFieldFromChild: false,
      tagsSentFromChild: false,
      /*            */
    };
  },
  mounted() {
    console.log('step card Informaton: ', this.$store.state.step);
    this.$store.commit("changeStep", 2);
    if (this.$store.state.card[this.$store.state.card.length-1].file !== null &&
    this.$store.state.card[this.$store.state.card.length-1].name !== null &&
    this.$store.state.card[this.$store.state.card.length-1].tags !== null) {
      this.fileUploadedSuccessFromChild = true;
      this.inputFieldFromChild = true;
      this.tagsSentFromChild = true;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fileReceived() {
      this.fileUploadedSuccessFromChild = true;
    },
    handleInput(data) {
      if (data === true) {
      this.inputFieldFromChild = true;
      } else if ( data === false) {
      this.inputFieldFromChild = false;
      }
    },
    tagsReceived(data) {
      if (data === true) {
      this.tagsSentFromChild = true;
      } else if ( data === false) {
      this.tagsSentFromChild = false;
      }
    },
    goToSelectTrigger() {
      if (
        this.fileUploadedSuccessFromChild === true &&
        this.inputFieldFromChild === true &&
        this.tagsSentFromChild === true
      ) {
        this.$store.commit("changeStep", 3);
        this.$router.push({ name: "selectTrigger" });
      } else {
        alert("Please complete all the fields");
      }
    },
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

#card-name {
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
}

#name {
  width: 50%;
  height: 50px;
  padding: 20px;
  margin-top: 10px;
  background-color: #eeeeee;
}
</style>