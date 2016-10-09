var React = require('react')
var ReactDOM = require('react-dom')
var Title = require('./title')

var HelloWorld = (<div><Title title="Hello JSX!" /></div>)

ReactDOM.render(HelloWorld, document.getElementById('app'))
