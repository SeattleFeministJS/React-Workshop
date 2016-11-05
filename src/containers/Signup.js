import React, { Component } from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]


export default class Signup extends Component {
  render(){
    return (
     <div>
      <Header messages={mail} />
      <Form />
     </div>
    )
  }
}
