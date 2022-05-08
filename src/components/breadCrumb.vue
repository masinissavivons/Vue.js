<template>
  <div id="app-bar">
    <div id="steps-div">


      <div class="one-step">
        <button v-if="page === 1" class="actual-step-button" @click="goToFirstStep">1</button>
        <button v-else class="step-button" @click="goToFirstStep">1</button>
        <p v-if="page === 1" class="step">Etape 1</p>
        <p v-else class="one-step">Etape 1</p>
      </div>
      <hr />
      <div class="one-step">
        <button v-if="page === 2" class="actual-step-button" @click="goToSecondStep">2</button>
        <button v-else class="step-button" @click="goToSecondStep">2</button>
        <p v-if="page === 2" class="step">Etape 2</p>
        <p v-else class="one-step">Etape 2</p>

      </div>
      <hr />
      <div class="one-step">
        <button v-if="page === 3" class="actual-step-button" @click="goToThirdStep">3</button>
        <button v-else class="step-button" @click="goToThirdStep">3</button>
        <p v-if="page === 3" class="step">Etape 3</p>
        <p v-else class="one-step">Etape 3</p>

      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "breadCrumb",
  data() {
    return {
    page : this.$store.state.step,
    }
  },
  methods: {
    goToFirstStep() {
      this.$router.push({ name: "addCard" });
      this.page = 1;
    },
    goToSecondStep() {
      this.$router.push({ name: "cardInformation" });
      this.page = 2;
    },
    goToThirdStep() {
      this.$router.push({ name: "selectTrigger" });
      this.page = 3;
    },
  },
  mounted () {
    this.page = this.$store.state.step;
    console.log('page on breadcrumb: ', this.page);
  }
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

#app-bar {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

#steps-div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.one-step {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.actual-step-button {
  height: 30px;
  width: 30px;
  border: 1px solid #3185f7;
  border-radius: 100px;
  color: #3185f7;
  background-color: #ffffff;
}

.step {
  color: #3185f7;
}

.step-button {
  height: 30px;
  width: 30px;
  border: 1px solid;
  border-radius: 100px;
  background-color: #ffffff;
}

hr {
  width: 100px;
}
</style>