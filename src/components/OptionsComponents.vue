<script>
export default {
  data() {
    return {
      name: 'Mustofa Adny',
    }
  },

  methods: {
    changeName() {
      this.name = 'Mustofa Adny Ganteng'
    },
  },

  // mounted() {
  //   this.name = ''
  // },
}
</script>

<template>
  <button @click="changeName">Change Name</button>
  <p>Hello, {{ name }}</p>
</template>
