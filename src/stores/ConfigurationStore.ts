import { defineStore } from 'pinia';

export const useConfigurationStore = defineStore('configuration', {
  state: () => ({
    beadCount: 3,
    cordBeats: 12,
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

    getCordBeats(state) {
      return state.cordBeats;
    },

    derivedCordCount: (state) => {
      const { tempo, time, cordBeats, interval } = state;
      return Math.floor((tempo * (time / 60)) / (cordBeats + interval));
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

    shiftInterval(delta: number) {
      this.interval += delta;
    },

    crementCordBeats(delta: number) {
      this.cordBeats += delta;
    },
  },
});
