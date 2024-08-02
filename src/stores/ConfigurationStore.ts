import { defineStore } from 'pinia';

export const useConfigurationStore = defineStore('configuration', {
  state: () => ({
    beads: 3,
    tempo: 90,
  }),

  getters: {
    getBeads(state) {
      return state.beads;
    },

    getTempo(state) {
      return state.tempo;
    },
  },

  actions: {
    crementBeads(delta: number) {
      this.beads += delta;
    },

    shiftTempo(delta: number) {
      this.tempo += delta;
    },
  },
});
