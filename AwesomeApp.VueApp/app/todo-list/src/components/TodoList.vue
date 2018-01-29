<template>
  <ul>
    <li v-for="item in todoItems" :key="item.id"> {{item.title}} - {{item.description}} </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'todoList',
  computed: {
    todoItems () {
      return this.$store.state.todoItems;
    }
  }
}
</script>
