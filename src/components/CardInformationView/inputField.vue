<template>
  <div id="card-name">
    <!-- WHY Same text twice ? -->
    <label v-if="!written" id="label">Donnez un nom à votre carte</label>
    <label v-else id="labelWritten">Donnez un nom à votre carte</label>
    <label :id="written ? 'labelWritten' : 'label'"
      >Donnez un nom à votre carte</label
    >
    <!-- NOTE Placeholder never used -->
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
      written: false,
      payload: [],
    };
  },
  mounted() {
    if (
      this.$store.state.card[this.$store.state.card.length - 1].name !== null
    ) {
      this.written = true;
    }
  },
  computed: {
    inputField: {
      set(value) {
        this.$store.state.currentCardEdit.name = value;
      },
      get() {
        return this.$store.state.currentCardEdit.name;
      },
    },
  },
  methods: {
    saveInputValue(text) {
      if (text.length !== 0) {
        this.written = true;
        this.payload = [this.$store.state.card.length - 1, text];
        this.$store.commit("changeName", this.payload);
        // NOTE If you are updating the store, why emit the payload ?
        this.$emit("inputChange", true);
      } else if (text.length === 0) {
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
  color: #757575;
}
</style>
