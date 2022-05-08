<template>
  <div id="card-name">
    <label v-if="!written" id="label">Donnez un nom à votre carte</label>
    <label v-else id="labelWritten">Donnez un nom à votre carte</label>
    <input
      type="text"
      v-model="inputField"
      placeholder="données de production des pommes"
      name="name"
      @input="saveInputValue(inputField)"
    />
  </div>
</template>

<script>
export default {
  name: "inputField",
  data() {
    return {
      inputField: "",
      written: false,
      payload: [],
    };
  },
  mounted() {
    if (this.$store.state.card[this.$store.state.card.length-1].name !== null) {
      this.written = true;
      this.inputField = this.$store.state.card[this.$store.state.card.length-1].name; 
    }
  },
  methods: {
    saveInputValue(text) {
      if(text.length !== 0) {
        this.written = true;
      this.payload = [this.$store.state.card.length-1, text];
      this.$store.commit("changeName", this.payload);
      this.$emit("inputChange", true); 
      } else if(text.length === 0) {
        this.written = false;
      this.$emit("inputChange", false); 
      }
    },
  },
};
</script>

<style scoped>
#card-name {
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
}

#labelWritten {
  color: #757575 ;
}

</style>