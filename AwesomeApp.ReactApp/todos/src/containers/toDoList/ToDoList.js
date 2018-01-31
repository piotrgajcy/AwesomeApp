import React, { Component } from 'react';

import AddTask from '../../components/AddTask/AddTask';
import ToDoCards from '../../components/ToDoCards/ToDoCards';


class ToDoList extends Component {

  render () {
    return (
      <div>
        <AddTask />
        <ToDoCards />
      </div>
    );
  }
}

export default ToDoList;