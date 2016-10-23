import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>This is the homepage, if you'd like to see our form click <Link to="signup">here</Link></p>
      </div>
    )
  }
}
