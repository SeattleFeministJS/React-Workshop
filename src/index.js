import React from 'react'
import ReactDOM from 'react-dom'
import Title from './title'

var HelloWorld = (<div><Title title="Hello JSX!" /></div>)

ReactDOM.render(HelloWorld, document.getElementById('app'))
