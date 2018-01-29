<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar dark>          
          <v-toolbar-title>Todo List</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in todoItems">
            <v-list-tile
              
              @click="toggle(index)"
              :key="item.id"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.description }}</v-list-tile-sub-title>                
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>



  <!-- <ul>
    <li v-for="item in todoItems" :key="item.id"> {{item.title}} - {{item.description}} </li>
  </ul> -->
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'todoList',
  computed: {
    todoItems () {
      return this.$store.state.todoItems;
    }
  },
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>
