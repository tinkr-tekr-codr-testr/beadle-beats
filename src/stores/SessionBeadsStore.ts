import { defineStore, storeToRefs } from 'pinia';
import { useConfigurationStore } from './ConfigurationStore';
import { useParameterBeadStore } from './ParameterBeadStore';
import { randomFrom } from 'src/utils';

export const useSessionBeadsStore = defineStore('beads', {
  state: () => ({
    cords: [] as Array<Array<string>>,
    matchesCounts: [] as number[],
  }),

  getters: {
    allCords(state) {
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
    initialCords() {
      const { nBack, beadCount } = storeToRefs(useConfigurationStore());
      const beadPool = ['a', 'b', 'c'];

      for (let i = 0; i < nBack.value; i++) {
        const cord = new Array<string>();
        for (let j = 0; j < beadCount.value; j++)
          cord.push(randomFrom(beadPool) as string);
      }
    },

    subsequentCord() {
      const { nBack, beadCount } = storeToRefs(useConfigurationStore());
      //const {allBeads} = storeToRefs(useParameterBeadStore());
      const beadPool = ['a', 'b', 'c'];

      const matchesIndices = [] as number[];

      const matchesCount = randomUpTo(2);
      const pendingCord = new Array(5).fill('');
      const prevCord = this.cordFromCurrent(nBack.value);

      for (let i = 0; i < matchesCount; i++) {
        const indexPending = randomUpTo(beadCount.value);
        if (matchesIndices.includes(indexPending)) i--;
        else matchesIndices.push(indexPending);
      }

      for (const i in matchesIndices) pendingCord[i] = prevCord[i];

      const currentCord = pendingCord.map((el) =>
        el ? el : (randomFrom(beadPool) as string)
      );
      this.cords.push(currentCord);
    },
  },
});
