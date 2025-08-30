<script setup>
import { inject } from 'vue'

const { provideName, updateName } = inject('provideName')
const appName = inject('appName')
</script>

<template>
  <br />
  <br />
  <h1>Provide and Inject</h1>
  <p>{{ provideName }}</p>
  <p>{{ appName }}</p>
  <button @click="updateName">Show Name</button>
</template>
