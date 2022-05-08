<template>
  <div>
    <h1>Sélectionnez le format d'entrée</h1>

    <div id="choices-div">

      <button v-if="!clicked" id="choice-one" @click="activateButton">
        <input
          id="radio-button"
          type="radio"
          value="label"
          name="name"
        />
        <div class="format">
          <i class="fa-solid fa-laptop-code"></i>
          <p>Fichier</p>
        </div>
      </button>


      <button v-else-if="clicked" id="choice-one-selected" @click="activateButton">
        <input
          id="radio-button"
          type="radio"
          value="label"
          name="name"
        />
        <div class="format">
          <i class="fa-solid fa-laptop-code"></i>
          <p class="text-selected">Fichier</p>
        </div>
      </button>

      <button class="choice" disabled>
        <div class="format">
          <i class="fa-solid fa-laptop-code"></i>
          <p>Application</p>
        </div>
      </button>

      <button class="choice" disabled>
        <div class="format">
          <i class="fa-solid fa-laptop-code"></i>
          <p>API</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardFormat",
  data() {
    return {
    clicked : false,
    }
  },
  methods: {
    activateButton() {
      document.getElementById("radio-button").click();
      this.clicked = true;
      this.$emit("fileFormatChoice");
    },
  }
};
</script>

<style scoped>
#choices-div {
  width: 100%;
  gap: 40px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#choice-one {
  width: 130px;
  height: 130px;
  border: 2px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 1px lightgrey;
  color: #000000;
  background-color: #ffffff;
}

#choice-one-selected {
  width: 130px;
  height: 130px;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 1px lightgrey;
  color: #000000;
  border: solid 1px #3185F7;
  background-color: #ffffff;
}

.text-selected {
  color: #3185F7;
}

.choice {
  width: 130px;
  height: 130px;
  border: 2px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 1px lightgrey;
  color: #757575;
  background-color: #EEEEEE;
}

.format {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.fa {
  font-size: 90px;
}
</style>