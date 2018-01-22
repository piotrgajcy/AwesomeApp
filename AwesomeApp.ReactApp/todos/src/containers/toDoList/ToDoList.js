import React, { Component } from 'react';
import axios from 'axios';

import AdTask from '../../components/AdTask/AdTask';

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
        <AdTask />
        <p>to do list</p>
      </div>
    );
  }
}

export default ToDoList;