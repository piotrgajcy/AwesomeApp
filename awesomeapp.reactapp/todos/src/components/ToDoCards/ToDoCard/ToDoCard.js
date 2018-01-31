import React from 'react';

const toDoCard = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div>{props.description}</div>
    <div>{props.status}</div>
    <button>removed</button>
  </div>  
);

export default toDoCard;