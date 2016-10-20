import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'

const HelloWorld = (<div><h1>Hello CSS</h1></div>)

ReactDOM.render(<App>{HelloWorld}</App>, document.getElementById('app'))
