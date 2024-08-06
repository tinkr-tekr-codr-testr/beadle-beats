<template>
  <q-page class="row items-center justify-evenly">
    <RouterLink to="/config">Configuration</RouterLink>
    <RouterLink to="/session">Session</RouterLink>
  </q-page>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineOptions({
  name: 'IndexPage',
});
</script>
