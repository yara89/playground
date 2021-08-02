import React, { Component } from 'react';
import classes from './Calculator.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';

class Calculator extends Component {
  state = {
    input1: null,
    input2: null,
    operator: null,
    result: null,
  };

  setInput = value => {
    if (this.state.operator) {
      if (!this.state.input2) {
        if (value === ".") {
          this.setState({ input2: 0 + value });
        } else {
          this.setState({ input2: value });
        }
      } else if (value !== "." || (this.state.input2.indexOf(".") === -1)) {
        this.setState(prev => ({ input2: prev.input2.concat(value) }));
      }
    } else {
      if (!this.state.input1) {
        /*
        if (this.state.result !== null) {
          this.setState({ result: null });
        }
        */
        if (value === ".") {
          this.setState({ input1: 0 + value });
        } else {
          this.setState({ input1: value });
        }
      } else if (value !== "." || (this.state.input1.indexOf(".") === -1)) {
        this.setState(prev => ({ input1: prev.input1.concat(value) }));
      }
    }
  };

  setOperator = value => {
    if (!this.state.operator) {
      this.setState({ operator: value });
    }
  };
  reset = () => {
    this.setState({
      input1: null,
      input2: null,
      operator: null,
      result: null,
    });
  };

  // backspace = () => {
  //   if (this.state.input) {
  //     this.setState(prev => ({ input2: prev.input2.slice(0, -1) }));
  //   } else if (this.state.operator) {
  //     this.setState({ operator: null });
  //   } else if (this.state.input1) {
  //     this.setState(prev => ({ input1: prev.input1.slice(0, -1) }));
  //   }
  // };

  calculate = () => {
    if (this.state.input1 && this.state.operator && this.state.input2) {
      let result = 0;
      switch (this.state.operator) {
        case "+":
          result = Number(this.state.input1) + Number(this.state.input2);
          break;
        case "-":
          result = Number(this.state.input1) - Number(this.state.input2);
          break;
        case "*":
          result = Number(this.state.input1) * Number(this.state.input2);
          break;
        case "/":
          if (this.state.input2 !== 0) {
            result = Number(this.state.input1) / Number(this.state.input2);
          }
          break;
        default:
          this.setState({ result });
          break;
      }
      this.setState({ result: result });
    }
  };

  render() {
    let output = 0;
    if (this.state.result) {
      output = this.state.result;
    } else if (this.state.input2) {
      output = this.state.input2;
    } else if (this.state.operator) {
      output = this.state.operator;
    } else if (this.state.input1) {
      output = this.state.input1;
    }
    return (
      
      <div className={classes.CalculatorBody}>
      <br />

        <Display>{output}</Display>

        <div className={classes.Keypad}>
          <div className={classes.KeypadRow}>
            <Button
              name="1"
              onClick={this.setInput}>1</Button>
            <Button
              name="2"
              onClick={this.setInput}>2</Button>
            <Button
              name="3"
              onClick={this.setInput}>3</Button>
            <Button
              name="+"
              onClick={this.setOperator}>+</Button></div>
          <div className={classes.KeypadRow}>
            <Button
              name="4"
              onClick={this.setInput}>4</Button>
            <Button
              name="5"
              onClick={this.setInput}>5</Button>
            <Button
              name="6"
              onClick={this.setInput}>6</Button>
            <Button
              name="-"
              onClick={this.setOperator}>-</Button></div>
          <div className={classes.KeypadRow}>
            <Button
              name="7"
              onClick={this.setInput}>7</Button>
            <Button
              name="8"
              onClick={this.setInput}>8</Button>
            <Button
              name="9"
              onClick={this.setInput}>9</Button>
            <Button
              name="*"
              onClick={this.setOperator}>*</Button>
          </div>
          <div className={classes.KeypadRow}>
            <Button
              name="reset"
              onClick={this.reset}>C</Button>

            <Button
              name="0"
              onClick={this.setInput}>0</Button>
            <Button
              name="."
              onClick={this.setInput}>.</Button>

            <Button
              name="/"
              onClick={this.setOperator}>/</Button>
          </div>

          <div className={classes.KeypadRow}>

            <Button
              name="calculate"
              onClick={this.calculate}>=</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;