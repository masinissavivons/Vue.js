<template>
  <div id="main-div">
    <div id="center-div">
      <div id="card">
        <div id="card-name">
          <!-- NOTE useless use of this -->
          <h1>{{ this.card.name }}</h1>
        </div>

        <div id="card-information">
          <div class="section">
            <h2>Format:</h2>
            <p>{{ this.card.format }}</p>
          </div>

          <div class="section">
            <h2>Card information</h2>
            <div>
              <h3>file:</h3>
              <div></div>

              <h3>Tags:</h3>
              <!-- WHY - Can you explain the concept of key ? -->
              <div v-for="tag in card.tags" v-bind:key="tag">
                <p>{{ tag }}</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Card triggers</h2>
            <h3>trigger:</h3>
            <p>{{ this.card.trigger }}</p>
            <h3>date:</h3>
            <p>{{ this.card.date }}</p>
          </div>
        </div>
      </div>

      <div id="footer">
        <button id="previous-button" @click="goBack">
          <i class="fa-solid fa-angle-left"></i>Précédent
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardDetail",
  data() {
    return {
      // WHY Useless data
      cardId: null,
      // BUG Error in console because no data when the page start to mount.
      // TypeError: Cannot read properties of null (
      card: null,
    };
  },
  mounted() {
    // NOTE Better use of computed.
    this.card = this.$store.state.card[this.$route.params.id];
  },
  methods: {
    goBack() {
      // NOTE Bad use of go back
      // BUG Create bug with navigation
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* NOTE Pref CSS Heritage */
/* NOTE Code repeat */
h1 {
  font-weight: 900;
  margin: 0 0 2em;
}

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
  background-color: #eeeeee;
}

#card {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 50px 0;
}

#card-name {
  width: 100%;
  margin: 50px 0 0 0;
  text-align: center;
}

#card-information {
  width: 100%;
}

.section {
  background-color: #ffffff;
}

/*    MEDIA QUERIES   */
</style>
