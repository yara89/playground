import React from "react";

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
      <section style={{align: "center"}}>      <br />
      <br />


        <span>Counter:   {this.state.count} </span>
        <button style={{color: "white", backgroundColor: "black"}} onClick={this.reset}> Reset </button>
        <button style={{color: "white", backgroundColor: "black"}} onClick={this.increment}> + </button>
        <button style={{color: "white", backgroundColor: "black"}} onClick={this.decrement}> - </button>
      </section>
    );
  }
}

export default Counter;
