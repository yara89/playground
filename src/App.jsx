import React from "react";
import classes from './App.module.css';
import Clock from "./Clock/Clock";
import Counter from "./Counter/Counter";
import ClassTopics from "./ClassTopics/ClassTopics";
import Calculator from "./Calculator/Calculator/Calculator";
import Game from "./TicTacToe/TicTacToe";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClassTopicsVisible: false,
      isClockVisible: false,
      isCounterVisible: false,
      isCalculatorVisible: false,
      isTicTacToeVisible: false,

    };
  }

  render() {
    return (
      <div className={classes.App}>
        <button
          type="button"
          className={classes.menubutton}
          onClick={() => {
            this.setState({
              isClassTopicsVisible: true,
              isClockVisible: false,
              isCounterVisible: false,
              isCalculatorVisible: false,
              isTicTacToeVisible: false,

            });
          }}
        >
          Show Class Topics
        </button>
        <button
          type="button"
          className={classes.menubutton}
          onClick={() => {
            this.setState({
              isClassTopicsVisible: false,
              isClockVisible: true,
              isCounterVisible: false,
              isCalculatorVisible: false,
              isTicTacToeVisible: false,

            });
          }}
        >
          Show Clock
        </button>
        <button
                  type="button"
                  className={classes.menubutton}
          onClick={() => {
            this.setState({
              isClassTopicsVisible: false,
              isClockVisible: false,
              isCounterVisible: true,
              isCalculatorVisible: false,
              isTicTacToeVisible: false,

            });
          }}
        >
          Show Counter
        </button>

        {/* <button>TODO: Show Comment</button>           */}

        <button
                  type="button"
                  className={classes.menubutton}
          onClick={() => {
            this.setState({
              isClassTopicsVisible: false,
              isClockVisible: false,
              isCounterVisible: false,
              isCalculatorVisible: true,
              isTicTacToeVisible: false,

            });
          }}
        >
          Show Calculator
         </button>

         <button
                  type="button"
                  className={classes.menubutton}
          onClick={() => {
            this.setState({
              isClassTopicsVisible: false,
              isClockVisible: false,
              isCounterVisible: false,
              isCalculatorVisible: false,
              isTicTacToeVisible: true,

            });
          }}
        >
          Show TicTacToe
         </button>

        {/* Conditional rendering: https://reactjs.org/docs/conditional-rendering.html */}
        {this.state.isClassTopicsVisible && <ClassTopics />}
        {this.state.isClockVisible && <Clock />}
        {this.state.isCounterVisible && <Counter />}
        {this.state.isCalculatorVisible && <Calculator />}
        {this.state.isTicTacToeVisible  &&  <Game />},

      </div>
    );
  }
}

export default App;
