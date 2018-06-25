import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <App/>,
  document.getElementById('react-app-root')
);

// 'use strict';
//
// ReactDOM.render(React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'h1',
//     null,
//     'Help Queue'
//   ),
//   React.createElement(
//     'h3',
//     null,
//     '3a'
//   ),
//   React.createElement(
//     'h3',
//     null,
//     'Thato and Haley'
//   ),
//   React.createElement(
//     'p',
//     null,
//     React.createElement(
//       'em',
//       null,
//       'Firebase will not save record!'
//     )
//   )
// ), document.getElementById('react-app-root'));
//

// input in Babel
// ReactDOM.render(
//   <div>
//     <h1>Help Queue</h1>
//     <h3>3a</h3>
//     <h3>Thato and Haley</h3>
//     <p><em>Firebase will not save record!</em></p>
//   </div>,
//   document.getElementById('react-app-root')
// );




// function liveTime() {
//   var greeting = React.createElement('h1', {}, 'Hello, World!');
//   var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
//   var app = React.createElement('div', {}, greeting, clock);
//
//   ReactDOM.render(
//     app,
//     document.getElementById('react-app-root')
//   );
// }
//
// setInterval(liveTime, 1000);

//js file
// var heading = React.createElement('h1', {}, 'Help Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
// var app = React.createElement('div', {}, heading), ticketLocation, ticketNames, ticketIssue);
//
// ReactDOM.render(
//   app,
//   document.getElementById('react-app-root')
// );
