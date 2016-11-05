import React, { Component } from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import { connect } from 'react-redux'
import { logIn } from '../redux'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]


class Signup extends Component {
  render(){
    return (
     <div>
      <Header messages={mail}
          isLoggedIn={this.props.loggedIn}
          handleLoginClick={this.props.onLogIn.bind(this)}/>
      <Form />
     </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: () => {
      dispatch(logIn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
