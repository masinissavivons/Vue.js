<template>
  <div id="main-div">
    <div id="welcome">
      <h1>Bienvenue</h1>
    </div>

    <div id="actions">
      <div id="dropdown">
        <v-select
          label="Filtres"
          chips
          filled
          persistent-hint
          :items="filterChoices"
          @input="selectFilter"
        ></v-select>
      </div>

      <button id="add-card-button" @click="goToAddCard">
        <i class="fa fa-plus"></i>Ajouter une carte
      </button>
    </div>

    <div id="cards" v-for="card in cardsInStore" v-bind:key="card.name">
      <h2>{{ card.name }}</h2>
      <button id="toCard" @click="goToCardDetail(card.id)">See card</button>

      <div id="chips">
        <v-chip
          text-color="white"
          :color="
            tag === 'logistique'
              ? '#50B7DA'
              : tag === 'production'
              ? '#F08D8D'
              : tag === 'qualité'
              ? '#82E07E'
              : tag === 'maintenance'
              ? '#F3AB6E'
              : ''
          "
          v-for="tag in card.tags"
          v-bind:key="tag"
          class="cards-chip"
          >{{ tag }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      cardsInStore: null,
      selectedFilter: null,
      filter: null,
      newArray: null,
      filterChoices: [
        { text: "all" },
        { text: "logistique" },
        { text: "production" },
        { text: "qualité" },
        { text: "maintenance" },
      ],
    };
  },
  mounted() {
    console.log("step home: ", this.$store.state.step);
    this.$store.commit("initiateStep");
    this.cardsInStore = this.$store.state.card;
  },
  methods: {
    // NOTE Can you make the same with a computed ?
    selectFilter(item) {
      if (item === "all") {
        this.cardsInStore = this.$store.state.card;
      } else {
        this.cardsInStore = this.$store.state.card.filter((card) =>
          card.tags.includes(item)
        );
      }
    },
    goToCardDetail(id) {
      this.$router.push({
        name: "cardDetail",
        params: {
          id: id,
        },
      });
    },
    goToAddCard() {
      this.$store.commit("changeStep", 1);
      // BUG You are creating the card too soon, then empty card.
      this.$store.commit("createNewCard");
      this.$router.push({ name: "addCard" });
    },
  },
};
</script>

<style scoped>
#main-div {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 10%;
  background-color: #fafafa;
}

#welcome {
  width: 100%;
  text-align: left;
}

h1 {
  font-weight: 900;
  margin: 0 0 2em;
}

#actions {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#add-card-button {
  height: 70px;
  border-radius: 100px;
  border: none;
  padding: 20px;
  color: #ffffff;
  font-weight: bold;
  background-color: #3a91f6;
}

#add-card-button SVG {
  margin: 0 1em 0 0;
}

#cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 4em;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 1px lightgrey;
  background-color: #ffffff;
}

#cards h2 {
  margin: 0 1em 0 0;
}

#toCard {
  width: 100px;
  height: 40px;
  color: #ffffff;
  border-radius: 5px;
  background-color: #000000;
}

#chips {
  display: flex;
  padding: 0 10px 0 10px;
  gap: 20px;
}

.cards-chip {
  text-align: center;
  border-radius: 100px;
  padding: 20px;
}
a {
  color: #42b983;
}

/*    MEDIA QUERIES   */

@media screen and (max-width: 768px) {
  h1 {
    text-align: center;
  }
  #actions {
    flex-direction: column;
    margin: 0 1em 0 0;
  }
  #dropdown {
    width: 100%;
    margin: 0 0 2em;
  }

  #add-card-button {
    width: 100%;
  }

  #cards {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 2em;
    gap: 1em;
  }
  #cards h2 {
    margin: 0;
  }
  .cards-label {
    margin: 2em 0 0;
  }
}
</style>
