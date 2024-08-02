import { defineStore } from 'pinia';

export const useSessionBeadsStore = defineStore('beads', {
  state: () => ({
    bracelets: [] as Array<Array<string>>,
  }),

  getters: {
    bracelets(state) {
      state.bracelets;
    },

    braceletFromCurrent: (state) => {
      return (i: number) => {
        const bracelets = state.bracelets;
        const index = bracelets.length - 1 + i;
        return bracelets[index];
      };
    },
  },

  actions: {
    newBracelet() {
      this.bracelets.push([] as Array<string>);
    },
  },
});
