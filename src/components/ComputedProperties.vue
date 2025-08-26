<script setup>
import { computed, reactive } from 'vue'

const author = reactive({
  name: 'JK Rowling',
  books: [
    "Harry Potter and the Sorcerer's Stone",
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Deathly Hallows',
  ],
})

// re render if computed changed
const withComputed = computed(() => {
  console.log('withComputed')
  return author.books.length > 0 ? 'Published yes' : 'Published no'
})

// re render if the script changed
const withoutComputed = () => {
  console.log('withoutComputed')
  return author.books.length > 0 ? 'Published yes' : 'Published no'
}
</script>

<template>
  <div>
    <h2>Author: {{ author.name }}</h2>

    <button @click="author.books.push('Harry Potter and the Half-Blood Prince')">
      {{ withComputed }}
    </button>
    <button>{{ withoutComputed() }}</button>
  </div>
</template>
