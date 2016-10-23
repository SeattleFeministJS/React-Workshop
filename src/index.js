import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]

const content = (
    <div>
      <Header messages={mail}/>
      <main>
        <Form />
      </main>
    </div>
)

ReactDOM.render(<App>{content}</App>, document.getElementById('app'))
