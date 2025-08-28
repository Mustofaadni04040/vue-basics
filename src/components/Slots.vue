<script setup>
import MainButton from './MainButton.vue'
</script>

<template>
  <br />
  <br />
  <br />
  <MainButton
    ><template #h1><h1>Slot Button</h1></template>
    <h2>Test 2 Slot</h2></MainButton
  >
</template>
