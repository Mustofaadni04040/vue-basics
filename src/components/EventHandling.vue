<script setup>
import { ref } from 'vue'

const count = ref(0)

const handleCount = (counter) => {
  count.value += counter
}
</script>

<template>
  <h1>Event Handling</h1>

  <button @click="handleCount(10)">{{ count }}</button>

  <input @keyup.enter="() => console.log('test')" />
</template>
