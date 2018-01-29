<template>
  <div id="app">
    <v-app>
    <v-content>
      <v-container fluid>
            <TodoList/>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>    

  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },
  mounted: function () {
    this.$store.dispatch('LoadTodoList')
  }
}
</script>
