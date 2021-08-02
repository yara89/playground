import React from 'react';
import classes from './Display.module.css';

const Display = props => (

  <div className={classes.Display}>
    <p className={classes.Output}>{props.children}</p>
  </div>
);

export default Display;

 // if (this.state.input1) {
 //   if (!this.state.operator) {
  //    let twoDigitInput = this.state.input1.toString().concat(value);
 //     this.setState({ input1: Number(twoDigitInput) });
 //   }
 //   this.setState({ input2: Number(value) });
 // } else {
//    this.setState({ input1: Number(value) });
//  }

 // this.displayInput(value);

//};