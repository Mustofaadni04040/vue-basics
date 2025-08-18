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
  <button>{{ title }} {{ numberButton }}</button>
</template>

<style scoped></style>
