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
        console.log(response);
        commit('SetTodoList', { todoList: response.data})
      }, (err) => {
        console.log(err);
      });
    }     
  },
  mutations: {
    SetTodoList: (state, {todoList}) => {
      state.todoItems = todoList;
    }
  }
});

export default store;