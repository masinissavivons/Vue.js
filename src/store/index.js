import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  card: [
    {
      id: 0,
      format: "file",
      file: null,
      name: "Carte de production du lot de poire",
      tags: ["production"],
      trigger: "Manuel",
      date: "2022-05-13",
    },
  ],
  step: null,
};

const mutations = {
  ////*   create    *////

  /* card */
  createNewCard(state) {
    state.card.push({
      id: this.state.card.length,
      format: null,
      file: null,
      name: null,
      tags: [],
      trigger: null,
      date: null,
    });
  },

  ////*   modify    *////

  /* steps */
  initiateStep(state) {
    state.step = 0;
  },

  /* SCREEN 1 file format */
  changeFormat(state, payload) {
    state.card[payload[0]].format = payload[1];
  },

  /* SCREEN 2 name */
  changeName(state, payload) {
    state.card[payload[0]].name = payload[1];
  },

  /* tag */
  changeTags(state, payload) {
    state.card[payload[0]].tags = payload[1];
  },

  /* SCREEN 3 step */
  changeStep(state, payload) {
    state.step = payload;
  },

  /* file uploaded */
  changeUploadedFile(state, payload) {
    state.card[payload[0]].file = payload[1];
  },

  /* SCREEN 4 trigger */
  changeTrigger(state, payload) {
    state.card[payload[0]].trigger = payload[1];
  },

  /* date */
  changeDate(state, payload) {
    state.card[payload[0]].date = payload[1];
  },
};

const getters = {
  readPageNumner(state) {
    return state.step;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});
