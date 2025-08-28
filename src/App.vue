<script setup>
import { reactive, ref } from 'vue'
import MainButton from './components/MainButton.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import ClassAndStyle from './components/ClassAndStyle.vue'

const name = 'Ucok Udin'
const blogPost = "<p style='color: red'>Ini adalah blog post</p>"
const idBlog = 1
const blogClass = 'text-2xl flex flex-col'
const submitButton = {
  title: 'Submit',
}
const count = ref(1)

const updateCount = () => {
  count.value++
}

const user = reactive({ name: 'Adudu', age: 20 })
const disabled = ref(false)
const makeDisabled = () => {
  disabled.value = !disabled.value
}
const disabledColor = '#ff0000'
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
  <button @click="updateCount">{{ count }}</button>
  <div>
    <h1>{{ user.name }}</h1>
    <button @click="user.age++">{{ user.age }}</button>
  </div>

  <ComputedProperties />

  <ConditionalRendering />
  <ListRendering />
  <ClassAndStyle />

  <MainButton
    @click="makeDisabled"
    :disabled="disabled"
    :class="{ disabled }"
    class="ucok"
    :title="`Test Button Disabled`"
    :style="{ color: disabled ? disabledColor : '' }"
  />
</template>

<style scoped></style>
