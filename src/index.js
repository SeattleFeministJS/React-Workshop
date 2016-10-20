import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

const HelloWorld = (<div><h1>Hello CSS <i className="em em-heart_eyes"></i></h1></div>)

ReactDOM.render(<App>{HelloWorld}</App>, document.getElementById('app'))
