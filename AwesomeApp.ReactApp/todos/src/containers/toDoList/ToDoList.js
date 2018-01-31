import React, { Component } from 'react';

import AddTask from '../../components/AddTask/AddTask';
import ToDoCards from '../../components/ToDoCards/ToDoCards';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';


class ToDoList extends Component {

  render () {
    return (
      <Auxiliary>
        <AddTask />
        <ToDoCards />
      </Auxiliary>
    );
  }
}

export default ToDoList;