var React = require('react');
var ReactDOM = require('react-dom');
var Something = require('./cats');
console.log('Here in main '+Something);
ReactDOM.render(<Something />,document.getElementById('somethingdiv'));
