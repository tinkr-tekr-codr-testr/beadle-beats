import { defineStore } from 'pinia';

export const useConfigurationStore = defineStore('configuration', {
  state: () => ({
    beads: 3,
    tempo: 90,
    nBack: 1,
  }),

  getters: {
    getBeads(state) {
      return state.beads;
    },

    getTempo(state) {
      return state.tempo;
    },

    getNBack(state) {
      return state.nBack;
    },
  },

  actions: {
    crementBeads(delta: number) {
      this.beads += delta;
    },

    crementnBack(delta: number) {
      this.nBack += delta;
    },

    shiftTempo(delta: number) {
      this.tempo += delta;
    },
  },
});
