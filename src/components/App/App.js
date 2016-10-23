import React, { Component } from 'react'
import s from './app.css'
import animatedGradient from '../../lib/animated-gradient'

export default class App extends Component {

  componentDidMount(){
    animatedGradient('animate')
  }

  render() {
    return (
      <div className={s.app} >{this.props.children}</div>
     )
  }
}
