<script setup>
import { reactive } from 'vue'

const author = reactive({
  name: 'JK Rowling',
  books: [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      year: 1997,
      reviews: ['great', 'awesome', 'best ever'],
      avg: 4.5,
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      year: 1997,
      reviews: ['great', 'awesome', 'best ever'],
      avg: 3.5,
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      year: 1998,
      reviews: ['great', 'awesome', 'best ever'],
      avg: 4.9,
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      year: 1924,
      reviews: ['great', 'awesome', 'best ever'],
      avg: 5,
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      year: 1999,
      reviews: ['great', 'awesome', 'best ever'],
      avg: 3,
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      year: 1919,
      reviews: ['great', 'awesome', 'best ever'],
      avg: 3.8,
    },
  ],
})
</script>

<template>
  <h1>{{ author.name }}</h1>
  <h2>Books:</h2>
  <ul>
    <li v-for="({ title, year, reviews }, index) in author.books" :key="index">
      {{ title }} | {{ year }}
      <span v-for="(review, index) in reviews" :key="index">{{ review }}, </span>
    </li>
  </ul>

  <ul>
    <li v-for="(item, index) in author" :key="index">
      {{ item }}
    </li>
  </ul>

  <ol>
    <li v-for="(_, index) in 10" :key="index">Mustofa Adny</li>
  </ol>

  <ul>
    <template v-for="(item, index) in author.books" :key="index">
      <li v-if="item.avg > 4">{{ item.title }} | The book rating is good</li>
      <li v-else>{{ item.title }} | The book rating is bad</li>
    </template>
  </ul>
</template>
