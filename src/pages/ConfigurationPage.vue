<template>
  <q-page padding>
    <val-crement
      @crement="(delta:number)=>shiftTempo(delta)"
      :val="tempo"
      :delta="5"
    />
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
    const { beads, tempo } = storeToRefs(configuration);
    const { crementBeads, shiftTempo } = configuration;

    return { beads, tempo, crementBeads, shiftTempo };
  },
});
</script>
