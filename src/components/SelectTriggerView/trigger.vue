<template>
  <div id="trigger-type">
    <div>
      <label
        >Choisissez le tye de déclencheur pour mettre à jour les données</label
      >
    </div>
    <v-autocomplete
      class="trigger"
      filled
      label="Type de déclencheur"
      v-model="alreadySelectedFromStore"
      :items="triggers"
      @input="select"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "triggerSelected",
  data() {
    return {
      selectedTrigger: null,
      payload: [],
      alreadySelectedFromStore: null,
      triggers: [
        { icon: "", text: "Manuel" },
        { icon: "", text: "Action prédéfinie" },
        { icon: "", text: "Calendaire" },
      ],
    };
  },
  mounted() {
    if (this.$store.state.card[this.$store.state.card.length-1].trigger !== null ) {
      this.alreadySelectedFromStore = this.$store.state.card[this.$store.state.card.length-1].trigger;
    }
  },
  methods: {
    select(item) {
      if (item !== null) {
        this.payload = [this.$store.state.card.length-1, item];
        this.$store.commit("changeTrigger", this.payload);
        this.$emit("triggerSentToParent");
      }
    },
  },
};
</script>

<style scoped>
#trigger-type {
  width: 70%;
  height: 150px;
  margin-top: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.trigger {
  width: 400px;
}
</style>
