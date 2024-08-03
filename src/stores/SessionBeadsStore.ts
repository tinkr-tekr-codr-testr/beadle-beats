import { defineStore } from 'pinia';

export const useSessionBeadsStore = defineStore('beads', {
  state: () => ({
    cords: [] as Array<Array<string>>,
  }),

  getters: {
    bracelets(state) {
      state.cords;
    },

    cordFromCurrent: (state) => {
      return (i: number) => {
        const cords = state.cords;
        const index = cords.length - 1 + i;
        return cords[index];
      };
    },
  },

  actions: {
    newBracelet() {
      this.cords.push([] as Array<string>);
    },
  },
});
