<template>
  <div id="app">
    <v-app>
    <v-content>
      <v-container fluid>
          <AddItem/>
          <TodoList/>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>    

  </div>
</template>

<script>
import TodoList from './components/TodoList'
import AddItem from './components/AddItem'

export default {
  name: 'App',
  components: {
    TodoList,
    AddItem
  },
  mounted: function () {
    this.$store.dispatch('LoadTodoList')
  }
}
</script>
