import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoItems: []
  },
  actions: {
    LoadTodoList: function({commit}) {
      axios.get('http://localhost:59967/api/todos').then((response) => {        
        commit('SetTodoList', { todoList: response.data})
      }, (err) => {
        console.log(err);
      });
    },
    AddNewTodo: function({commit}, todoData) {
      axios.post('http://localhost:59967/api/todos', todoData).then((response) => {        
        commit('AddTodo', { todo: response.data})
      }, (err) => {
        console.log(err);
      });
    }     
  },
  mutations: {
    SetTodoList: (state, {todoList}) => {
      state.todoItems = todoList;
    },
    AddTodo: (state, {todo}) => {
      state.todoItems.push(todo)
    }
  }
});

export default store;