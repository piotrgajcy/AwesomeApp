import React from 'react';

const toDoCard = (props) => (
  <div>
    <span>{props.id}</span>
    <h2>{props.title}</h2>
    <div>{props.description}</div>
    <div>{props.status}</div>
    <button onClick={props.clicked}>removed</button>
  </div>  
);

export default toDoCard;