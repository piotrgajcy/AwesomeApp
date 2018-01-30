<template>
  <button type="button" class="button" @click="addItem()">Add New Todo</button>
</template>
<script>
export default {
  name: 'AddItem',
  methods: {
    addItem () {
      this.$store.dispatch('AddNewTodo', { title: "dziala2222", description: "tjasdj", dateAdded: "2018-01-23T21:44:25.743"})
    }
  }
}
</script>
