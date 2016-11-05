import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header/Header'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header messages={mail} />
        <h1>Home</h1>
        <p>This is the homepage, if you'd like to see our form click <Link to="signup">here</Link></p>
      </div>
    )
  }
}
