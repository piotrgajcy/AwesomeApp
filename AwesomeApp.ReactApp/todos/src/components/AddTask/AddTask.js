import React, { Component } from 'react';
import axios from 'axios';

import classes from './AddTask.css';

class AddTask extends Component {
  state = {
    dateAdded: '',
    description: '',
    id: '',
    isCompleted: false,
    title: ''
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      dateAdded: this.state.dateAdded,
      description: this.state.description,
      isCompleted: this.state.isCompleted,
    }

    axios.post('http://localhost:59967/api/todos', data, 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(JSON.stringify(data));
      this.setState({
        dateAdded: '',
        description: '',
        id: '',
        isCompleted: false,
        title: ''
      })
    })
    .catch(error => {
      console.log(error, JSON.stringify(data));
    });
  }

  render () {
    return (
      <div>
        <input
          className={classes.AddTask} 
          type="text" value={this.state.title}
          onChange={(event) => this.setState({title: event.target.value})}
          onClick={(event) => this.setState({title: ''})} />
        <input 
          className={classes.AddTask} 
          type="text" value={this.state.description} 
          onChange={(event) => this.setState({description: event.target.value})}
          onClick={(event) => this.setState({description: ''})} />
        <button onClick={this.postDataHandler}>Add task</button>
      </div>
    )
  } 
}

export default AddTask;