import React, { Component } from 'react';
import axios from 'axios';

import AddTask from '../../components/AddTask/AddTask';

axios.get('http://localhost:59967/api/todos')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

class ToDoList extends Component {
  render () {
    return (
      <div>
        <AddTask />
      </div>
    );
  }
}

export default ToDoList;