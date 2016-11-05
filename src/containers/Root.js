import React, { Component } from 'react'
import App from '../components/App/App'


export default class Root extends Component {
  render() {
    return (
      <App>
        <main>
          {this.props.children}
        </main>
      </App>
    )
  }
}
