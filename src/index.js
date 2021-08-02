import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//import tick from "./SimpleClock/tick"
//setInterval(tick, 1000);

//import Clock from './Clock/Clock'

import * as serviceWorker from './serviceWorker';

//function tick() {
// ReactDOM.render(
//  <Clock date={new Date()} />,
//   document.getElementById('root')
// );
//}

//setInterval(tick, 1000);
// ReactDOM.render(
//   <Clock date={new Date()} />,
//  document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
