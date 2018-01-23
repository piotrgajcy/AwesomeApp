import React, { Component } from 'react';
import axios from 'axios';

import classes from './AddTask.css';

class AddTask extends Component {
  state = {
    dateAdded: '',
    description: '',
    id: 2,
    isCompleted: false,
    title: 'test'
  }

  postDataHandler = () => {
    const data = {
      // title: this.state.title,
      // description: this.state.description,
      title: "dsadadsa",
      dateAdded: "",
      description: "",
      id: 3,
      isCompleted: false,
    
    }
    axios.post('http://localhost:59967/api/todos', data, 
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    //JSON.stringify(data)
  )
      .then(response => {
        console.log(JSON.stringify(data));
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