<script setup>
import { ref } from 'vue'
import MainButton from './MainButton.vue'
const isDisabled = ref(true)
</script>

<template>
  <MainButton :title="`test button`" :disabled="isDisabled" :class="{ disabled: isDisabled }" />
</template>

<style scoped></style>
