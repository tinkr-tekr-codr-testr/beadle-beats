import { defineStore } from 'pinia';

export const useParameterBeadStore = defineStore('parameterBeads', {
  state: () => ({
    beadPools: new Map<string, Array<string>>(),
  }),

  getters: {
    beadsOf: (state) => {
      return (key: string) => {
        return state.beadPools.get(key);
      };
    },

    allBeads(state) {
      return state.beadPools;
    },
  },

  actions: {
    setBeads(key: string, pending: string[]) {
      this.beadPools.set(key, pending);
    },

    removeBeads(key: string) {
      this.beadPools.delete(key);
    },
  },
});
