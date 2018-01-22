import React, { Component } from 'react';
import axios from 'axios';


class AdTask extends Component {
  state = {
    title: '',
    description: ''
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      description: this.state.description
    }
    axios.post('https://jsonplaceholder.typicode.com/posts' ,data)
      .then(response => {
        console.log(response);
      });
  }

  render () {
    return (
      <div>
        <input 
          type="text" value={this.state.title} 
          onChange={(event) => this.setState({title: event.target.value})} />
          <input 
          type="text" value={this.state.description} 
          onChange={(event) => this.setState({description: event.target.value})} />
        <button onClick={this.postDataHandler}>Add task</button>
      </div>
    )
  } 
}

export default AdTask;