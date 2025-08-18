<script setup>
import CompositionComponents from './components/CompositionComponents.vue'
import MainButton from './components/MainButton.vue'
import OptionsComponents from './components/OptionsComponents.vue'

const name = 'Ucok Udin'
</script>

<template>
  <MainButton />
  <p>Hello, {{ name }}</p>
  <OptionsComponents />
  <CompositionComponents />
</template>

<style scoped></style>
