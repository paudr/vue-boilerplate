<script setup lang="ts">
import { ref } from 'vue'

const title = ref('vue boilerplate')
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
