<template>
  <q-page padding> </q-page>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useSessionBeadsStore } from 'src/stores/SessionBeadsStore';
import { defineComponent } from 'vue';
import { VolumeButtons } from '../../src-capacitor/node_modules/@capacitor-community/volume-buttons';

export default defineComponent({
  setup() {
    const sessionBeads = useSessionBeadsStore();
    sessionBeads.makeSessionCords(13);
    const { matchesCounts, playableCords } = storeToRefs(sessionBeads);
    VolumeButtons.watchVolume({}, (direction: unknown) => {
      console.log(direction);
    });
    console.log(playableCords.value);

    return { matchesCounts };
  },
});
</script>
