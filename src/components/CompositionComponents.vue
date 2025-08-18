<script setup>
import { ref } from 'vue'
const name = ref('Alibaba')

const changeName = () => {
  name.value = 'Alibaba Babubu'
}
</script>

<template>
  <button @click="changeName">Change Name</button>
  <p>Hello, {{ name }}</p>
</template>
