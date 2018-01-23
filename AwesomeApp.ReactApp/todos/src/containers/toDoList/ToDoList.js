import React, { Component } from 'react';
// import axios from 'axios';

import AddTask from '../../components/AddTask/AddTask';

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