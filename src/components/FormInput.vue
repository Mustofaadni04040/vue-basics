<script setup>
import { ref } from 'vue'

const name = ref('')
const desc = ref('')
const isChecked = ref(false)
const arrayCheckbox = ref([])
console.log(name)

const handleInput = (e) => {
  name.value = e.target.value
  console.log(name.value)
}
</script>

<template>
  <p>{{ name }}</p>
  <input type="text" @input="handleInput" />
  <input type="text" v-model.lazy.number="name" />

  <p style="white-space: pre-line">{{ desc }}</p>
  <textarea v-model="desc" />

  <br />
  <br />
  <p>{{ isChecked }}</p>
  <input type="checkbox" v-model="isChecked" />

  <br />
  <br />
  <p v-for="(item, index) in arrayCheckbox" :key="index">{{ item }}</p>
  <input type="checkbox" v-model="arrayCheckbox" value="Ucok" id="Ucok" />
  <label for="Ucok">Ucok</label>
  <input type="checkbox" v-model="arrayCheckbox" value="Udin" id="Udin" />
  <label for="Udin">Udin</label>
</template>
