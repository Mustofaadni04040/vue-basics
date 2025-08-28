<script setup>
import { reactive, ref } from 'vue'

const showAuthor = ref(false)

const author = reactive({
  name: 'Mustofa Adny',
  books: ['A Man Called Ove', 'The Alchemist', 'The Secret'],
})
</script>

<template>
  <h1>
    {{ author.name }}
    <span v-if="author.books.length > 1">Have books more than 1</span>
    <span v-else-if="author.books.length === 1">Only have 1 book</span>
    <span v-else>Have no books</span>
  </h1>
</template>
