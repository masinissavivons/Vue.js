<template>
  <div id="team-tag">
    <div>
      <label>Ajouter des étiquettes d'équipe</label>
    </div>
    <v-select
      class="tag"
      multiple
      chips
      persistent-hint
      v-model="alreadySelectedFromStore"
      item-value="text"
      :items="choices"
      @input="select"
    >
      <template #selection="{ item }">
        <v-chip
        text-color = "white"
        :color="item.text==='logistique'?'#50B7DA'
        :item.text==='production'?'#F08D8D'
        :item.text==='qualité'?'#82E07E'
        :item.text==='maintenance'?'#F3AB6E':''"
        >{{ item.text }}</v-chip>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: "teamTags",
  data() {
    return {
      icon: <font-awesome-icon icon="fa-light fa-user" />,
      payload: [],
      alreadySelectedFromStore: [],
      choices: [
        {
          text: "logistique",
          color: "primary",
        },
        {
          text: "production",
          color: "red",
        },
        {
          text: "qualité",
          color: "green",
        },
        {
          text: "maintenance",
          color: "secondary",
        },
      ],
      model: 1,
    };
  },
  mounted() {
    if (this.$store.state.card[this.$store.state.card.length-1].tags.length !== 0 ) {
      this.alreadySelectedFromStore = this.$store.state.card[this.$store.state.card.length-1].tags;
    }
  },
  methods: {
    select(item) {
      if (item.length !== 0) {
        this.payload = [this.$store.state.card.length - 1, item];
        this.$store.commit("changeTags", this.payload);
        this.$emit("tagsSentToParent", true);
      } else if (item.length === 0) {
        this.$emit("tagsSentToParent", false);
      }
    },
  },
};
</script>

<style scoped>
#team-tag {
  width: 70%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#tags-list {
  width: 400px;
  background-color: #ffffff;
}

.tag {
  width: 400px;
}
</style>