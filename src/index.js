import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import Form from './components/Form'

const LoginForm = (<Form/>)

ReactDOM.render(<App>{LoginForm}</App>, document.getElementById('app'))
