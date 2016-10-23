import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import Header from './components/Header/Header'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]

ReactDOM.render(<App><Header messages={mail}/></App>, document.getElementById('app'))
