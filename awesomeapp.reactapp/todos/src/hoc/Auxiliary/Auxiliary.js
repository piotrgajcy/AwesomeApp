import React from 'react';

import classes from './Auxiliary.css';

const aux = (props) => (
  <div className={classes.Aux}>
    {props.children}
  </div>
)

export default aux;