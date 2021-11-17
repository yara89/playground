import React from "react";
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }
  increment() {
    // this.setState((prevState) => ({
    //   count: prevState.count + 1,
    // }));

    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement = () => {
    // this.setState((prevState) => ({
    //   count: prevState.count - 1,
    // }));

    this.setState({
      count: this.state.count - 1,
    });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="wrap">
      <main className="container">
        <div className="box">

         <br />
      <br />


        <span>Counter:   {this.state.count} </span>
        <button className="resetBtn" onClick={this.reset}> Reset </button>
        <button className="btn" onClick={this.increment}> + </button>
        <button className="btn" onClick={this.decrement}> - </button>
      </div>
        </main>
      </div>

    );
  }
}

export default Counter;
