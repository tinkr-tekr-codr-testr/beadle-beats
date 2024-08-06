<template>
  <q-page padding> </q-page>
  <div>{{ direction }}</div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useSessionBeadsStore } from 'src/stores/SessionBeadsStore';
import { defineComponent, ref } from 'vue';
import { VolumeButtons } from '../../src-capacitor/node_modules/@capacitor-community/volume-buttons';

export default defineComponent({
  setup() {
    const sessionBeads = useSessionBeadsStore();
    sessionBeads.makeSessionCords(13);
    const { matchesCounts, playableCords } = storeToRefs(sessionBeads);
    const dirRef = ref('');
    VolumeButtons.watchVolume({}, (direction: unknown) => {
      dirRef.value = direction as string;
    });
    console.log(playableCords.value);

    return { matchesCounts };
  },
});
</script>
