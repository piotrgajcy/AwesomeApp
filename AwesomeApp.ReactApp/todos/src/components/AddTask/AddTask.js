import React, { Component } from 'react';
import axios from 'axios';

import classes from './AddTask.css';

class AddTask extends Component {
  state = {
    title: 'Add task',
    description: 'Add description'
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      description: this.state.description
    }
    axios.post('http://localhost:59967/api/todos' ,data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
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