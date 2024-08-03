import { defineStore } from 'pinia';

export const useCounterStore = defineStore('parameterBeads', {
  state: () => ({
    beads: new Map<string, Array<string>>(),
  }),

  getters: {
    beadsOf: (state) => {
      return (key: string) => {
        return state.beads.get(key);
      };
    },

    allBeads(state) {
      return state.beads;
    },
  },

  actions: {
    setBeads(key: string, pending: string[]) {
      this.beads.set(key, pending);
    },

    removeBeads(key: string) {
      this.beads.delete(key);
    },
  },
});
