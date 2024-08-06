import { defineStore } from 'pinia';

export const useConfigurationStore = defineStore('configuration', {
  state: () => ({
    beadCount: 3,
    tempo: 90,
    nBack: 1,
    time: 180,
    interval: 8,
  }),

  getters: {
    getBeads(state) {
      return state.beadCount;
    },

    getTempo(state) {
      return state.tempo;
    },

    getNBack(state) {
      return state.nBack;
    },

    getTime(state) {
      return state.time;
    },

    getInterval(state) {
      return state.interval;
    },
  },

  actions: {
    crementBeads(delta: number) {
      this.beadCount += delta;
    },

    crementnBack(delta: number) {
      this.nBack += delta;
    },

    shiftTempo(delta: number) {
      this.tempo += delta;
    },

    crementTime(delta: number) {
      this.time += delta;
    },

    shiftInterval(sign: number) {
      this.interval += sign * 4;
    },
  },
});
