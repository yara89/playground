import React from 'react';

//function Clock () {
 //   const  date: new Date(),
//}

//class component

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
        console.log ('constructor')
    }

    componentDidMount() { 
        console.log ('component did mount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );      
    }
  
    componentWillUnmount() {
        console.log ('component will unmount')
        clearInterval(this.timerID);
    }

    tick() {
        console.log ('tick')
        this.setState({
            date: new Date ()

        });
    }
    refreshHandler = () => {
        console.log ('refresh handler')

        this.setState({ date:new Date() });
    };

    render() {
             console.log ('render')
 return (
        <div>
                  <br />

                  <br />

          <h1>hey, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          {/* <button onClick={this.refreshHandler}> Refresh</button> */}
        </div>
      );
    }
  }
  
 export default Clock;

  