<template>
  <div>
    <q-btn label="-" color="primary" size="xs" @click="() => crement(-1)" />
    <q-chip>{{ val }}</q-chip>
    <q-btn label="+" color="primary" size="xs" @click="() => crement(1)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  emits: ['crement'],
  props: {
    val: { type: Number, required: true },
    delta: { type: Number, required: true },
  },

  setup(props, ctx) {
    const crement = (sign: number) => {
      ctx.emit('crement', sign * props.delta);
    };

    return { crement };
  },
});
</script>
