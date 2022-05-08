<template>
  <div id="deadline">
    <label
      >Choisissez la date de mise à jour attendue pour envoyer une alerte en
      cas de non réalisation</label
    >
    <v-date-picker
      v-model="picker"
      id="date-picker"
      elevation="15"
      @change="selectDate(picker)"
    ></v-date-picker>
  </div>
</template>

<script>
export default {
  name: "datePicker",
  data() {
    return {
      payload: [],
      alreadySelectedFromStore: null,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
  mounted() {
    if (this.$store.state.card[this.$store.state.card.length-1].date !== null ) {
      this.picker = this.$store.state.card[this.$store.state.card.length-1].date;
    }
  },
  methods: {
    selectDate(chosenDate) {
      this.payload = [this.$store.state.card.length - 1, chosenDate];
      this.$store.commit("changeDate", this.payload);
      if (this.$store.state.date !== null) {
        this.$emit("dateSentToParent");
      }
    },
  },
};
</script>

<style scoped>
#deadline {
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#date-picker {
  width: 300px;
  height: 100px;
  border: none;
  border-radius: 20px;
}
</style>
