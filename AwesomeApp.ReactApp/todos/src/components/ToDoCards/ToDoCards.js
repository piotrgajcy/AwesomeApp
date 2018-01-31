import React, { Component } from 'react';
import axios from 'axios';

import ToDoCard from '../../components/ToDoCards/ToDoCard/ToDoCard';


class ToDoCards extends Component {
  state = {
    tasks: [],
    selectTaskId: null,
    error: false
  }
  
  componentDidMount() {
    axios.get('http://localhost:59967/api/todos')
    .then(response => {
      const tasks = response.data;
      const updateTasks = tasks.reverse();
      this.setState({tasks: updateTasks});
    })
    .catch(error => {
      this.setState({error: true});
      console.log(error);
    })
  }
  
  deleteTaskHandler = (key) => {
    axios.delete('http://localhost:59967/api/todos/' + key)
      .then(response => {
        console.log(response);
      });
  }

  render () {
    let tasks = this.state.tasks.map(task => {
      return <ToDoCard 
              title={task.title}
              description={task.description}
              status={task.isCompleted}
              key={task.id} 
              clicked={(key) => this.deleteTaskHandler(task.id)} />
    });

    return (
      <div>
        {tasks}
      </div>
    );
  }
}

export default ToDoCards;