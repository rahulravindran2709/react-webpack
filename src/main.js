var React = require('react');
var ReactDOM = require('react-dom');
var Heading = require('./heading');
var heading = (<Heading value="My heading" />);
ReactDOM.render(<div>{heading}</div>,document.getElementById('somethingdiv'));
