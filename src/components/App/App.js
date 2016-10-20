import React, { Component } from 'react'
import s from './app.css'

export default class App extends Component {
  render() {
    return (
      <div className={s.app}>{this.props.children}</div>
     )
  }
}
