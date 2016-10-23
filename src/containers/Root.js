import React, { Component } from 'react'
import App from '../components/App/App'
import Header from '../components/Header/Header'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]


export default class Root extends Component {
  render() {
    return (
      <App>
        <Header messages={mail} />
        <main>
          {this.props.children}
        </main>
      </App>
    )
  }
}
