<template>
  <q-page padding> </q-page>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useSessionBeadsStore } from 'src/stores/SessionBeadsStore';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const sessionBeads = useSessionBeadsStore();
    sessionBeads.makeSessionCords(13);
    const { matchesCounts, playableCords } = storeToRefs(sessionBeads);

    console.log(playableCords.value);

    return { matchesCounts };
  },
});
</script>
