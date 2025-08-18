<script setup>
import MainButton from './components/MainButton.vue'

const name = 'Ucok Udin'
const blogPost = "<p style='color: red'>Ini adalah blog post</p>"
const idBlog = 1
const blogClass = 'text-2xl flex flex-col'
</script>

<template>
  <MainButton />
  <p>Hello, {{ name }}</p>
  <OptionsComponents />
  <CompositionComponents />

  <div v-bind:id="idBlog" :class="blogClass">{{ blogPost }}</div>
  <!--shorthand: :id="idBlog"-->
  <div v-html="blogPost"></div>
</template>

<style scoped></style>
