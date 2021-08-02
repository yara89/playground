import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  return (
    <button
      type="button"
      className={classes.Button}
      name={props.name}
      onClick={(e) => props.onClick(e.target.name)}>{props.children}</button>
  )
}

export default Button;