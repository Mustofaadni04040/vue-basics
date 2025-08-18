<script setup>
import MainButton from './components/MainButton.vue'

const name = 'Ucok Udin'
const blogPost = "<p style='color: red'>Ini adalah blog post</p>"
const idBlog = 1
const blogClass = 'text-2xl flex flex-col'
const submitButton = {
  title: 'Submit',
}
</script>

<template>
  <MainButton :title="`test button`" :number-button="1" />
  <MainButton :title="`test button`" :number-button="2" />
  <MainButton :title="submitButton.title" :number-button="3" />
  <!--shorthand: v-bind="submitButton"-->
  <p>Hello, {{ name }}</p>
  <OptionsComponents />
  <CompositionComponents />

  <div v-bind:id="idBlog" :class="blogClass">{{ blogPost }}</div>
  <!--shorthand: :id="idBlog"-->
  <div v-html="blogPost"></div>
</template>

<style scoped></style>
