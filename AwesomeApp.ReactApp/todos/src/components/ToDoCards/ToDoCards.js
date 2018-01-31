import React, { Component } from 'react';
import axios from 'axios';

import ToDoCard from '../../components/ToDoCards/ToDoCard/ToDoCard';


class ToDoCards extends Component {
  state = {
    tasks: [],
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
  // shouldComponentUpdate (nextProps, nextState) {
  //   return nextProps.tasks !== this.props.tasks;
  // }

  render () {
    let tasks = this.state.tasks.map(task => {
      return <ToDoCard 
              title={task.title}
              description={task.description}
              status={task.isCompleted}
              key={task.id} />
    });

    return (
      <div>
        {tasks}
      </div>
    );
  }
}

export default ToDoCards;