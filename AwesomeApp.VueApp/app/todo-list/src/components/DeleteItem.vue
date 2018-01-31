<template>
  <div>
    <v-btn @click="deleteItem" color="error" fab small dark>
      <v-icon>clear</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'deleteItem',
  props: ['id'],
  methods: {
    deleteItem() {
      this.$store.dispatch('DeleteTodo', this.id)
    }
  }
}
</script>
