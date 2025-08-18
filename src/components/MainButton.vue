<script setup>
const objectofAttrs = {
  id: 'product-1',
  class: 'button',
}
const isLoading = true
const buttonDisabled = isLoading
const renderIsLoading = () => {
  if (isLoading) {
    return 'loading2'
  } else {
    return 'submit2'
  }
}
</script>

<template>
  <button :disabled="buttonDisabled" v-bind="objectofAttrs" :id="`id-${objectofAttrs.id}`">
    {{ isLoading ? 'loading' : 'submit' }}
  </button>
  <button :disabled="buttonDisabled" v-bind="objectofAttrs" :id="`id-${objectofAttrs.id}`">
    {{ renderIsLoading() }}
  </button>
</template>

<style scoped></style>
