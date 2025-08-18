<script setup>
import MainButton from './components/MainButton.vue'

const name = 'Ucok Udin'
</script>

<template>
  <MainButton />
  <p>Hello, {{ name }}</p>
  <OptionsComponents />
  <CompositionComponents />
</template>

<style scoped></style>
