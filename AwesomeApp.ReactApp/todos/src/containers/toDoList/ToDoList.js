import React, { Component } from 'react';
// import axios from 'axios';

import AdTask from '../../components/AdTask/AdTask';

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