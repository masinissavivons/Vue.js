<template>
  <div id="main-div">
    <BreadCrumb />

    <div id="center-div">
      <h1>Sélectionnez le déclencheur</h1>

      <Trigger @triggerSentToParent="triggerValidated" />

      <DatePicker @dateSentToParent="dateValidated" />
    </div>

    <div id="footer">
      <button id="previous-button" @click="goBack">
        <i class="fa-solid fa-angle-left"></i>Précédent
      </button>
      <button v-if="triggerSelected === false || dateSelected === false" id="next-button-disabled" disabled>Terminer</button>
      <button v-else-if="triggerSelected === true && dateSelected === true" id="next-button-enabled" @click="goFinish">Terminer</button>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCrumb";
import Trigger from "../components/SelectTriggerView/trigger";
import DatePicker from "../components/SelectTriggerView/datePicker";

export default {
  name: "selecTrigger",
  components: {
    BreadCrumb,
    Trigger,
    DatePicker,
  },
  data() {
    return {
      triggerSelected: false,
      dateSelected: false,
      validatedFields: 0,
    };
  },
  mounted() {
    console.log('step select Trigger: ', this.$store.state.step);

    if (this.$store.state.card[this.$store.state.card.length-1].trigger !== null &&
    this.$store.state.card[this.$store.state.card.length-1].date !== null) {
      this.triggerSelected = true;
      this.dateSelected = true;
    }
  },
  methods: {
    triggerValidated() {
      this.triggerSelected = true;
    },
    dateValidated() {
      this.dateSelected = true;
    },
    goBack() {
      this.$router.go(-1);
    },
    goFinish() {
      if (this.triggerSelected === true && this.dateSelected === true) {
        this.$router.push({ name: "home" });
      } else {
        alert("Please select a trigger and a date");
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
  justify-content: center;
  background-color: #ffffff;
}

#center-div {
  height: 100%;
  display: flex;
  flex-direction: column;
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