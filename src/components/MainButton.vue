<script setup>
const objectofAttrs = {
  type: 'button',
  id: 'product-1',
  class: 'button',
}
const isLoading = false
const buttonDisabled = isLoading
const renderIsLoading = () => {
  if (isLoading) {
    return 'loading2'
  } else {
    return 'submit2'
  }
}
const url = {
  attr: 'href',
  link: '/home',
}
const { title, numberButton } = defineProps({
  title: String,
  numberButton: Number,
})
</script>

<template>
  <!-- <button :disabled="buttonDisabled" v-bind="objectofAttrs" :id="`id-${objectofAttrs.id}`">
    {{ isLoading ? 'loading' : 'submit' }}
  </button>
  <a :[url.attr]="url.link">
    <button :disabled="buttonDisabled" v-bind="objectofAttrs" :id="`id-${objectofAttrs.id}`">
      {{ renderIsLoading() }}
    </button>
  </a> -->
  <button class="button"><slot name="h1" v-if="$slots.h1" /><slot>Default</slot></button>
</template>

<style scoped>
.button {
  background-color: salmon;
  border: none;
  padding: 2px 4px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.disabled {
  background-color: black;
}
</style>
