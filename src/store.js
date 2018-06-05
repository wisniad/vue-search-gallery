import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    search: '',
    counter: 0
  },
  mutations: { //  synchrnonous
    searchNew(state, payload) {
      state.search = payload;
    }
  },
  actions: { //  asynchrnonous
    increment(state, payload) {
      state.commit('increment', payload);
    }
  },
  getters: {
    search(state) {
      return state.search.toLowerCase();
    },
    counter(state) {
      return state.counter;
    }
  }
});

export default store;
