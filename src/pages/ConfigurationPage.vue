<template>
  <q-page padding>
    <val-crement
      @crement="(delta:number)=>shiftTempo(delta)"
      :val="tempo"
      :delta="5"
    >
      Tempo:
    </val-crement>

    <val-crement
      @crement="(delta:number)=>crementBeads(delta)"
      :val="beadCount"
      :delta="1"
    >
      Beads:
    </val-crement>

    <val-crement
      @crement="(delta:number)=>crementnBack(delta)"
      :val="nBack"
      :delta="1"
    >
      nBack:
    </val-crement>

    <val-crement
      @crement="(delta:number)=>crementTime(delta)"
      :val="time"
      :delta="10"
    >
      Time:
    </val-crement>
  </q-page>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import ValCrement from 'src/components/ValCrement.vue';
import { useConfigurationStore } from 'src/stores/ConfigurationStore';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { ValCrement },
  setup() {
    const configuration = useConfigurationStore();
    const { beadCount, tempo, nBack, time } = storeToRefs(configuration);
    const { crementBeads, shiftTempo, crementnBack, crementTime } =
      configuration;

    return {
      beadCount,
      tempo,
      nBack,
      time,
      crementBeads,
      shiftTempo,
      crementnBack,
      crementTime,
    };
  },
});
</script>
