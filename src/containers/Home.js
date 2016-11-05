import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header/Header'
import { connect } from 'react-redux'
import { logIn } from '../redux'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]

class Home extends Component {
  render() {

    console.log('HOME props.loggedIn', this.props.loggedIn)

    return (
      <div>
        <Header messages={mail} />
        <h1>Home</h1>
        <p>This is the homepage, if you'd like to see our form click <Link to="signup">here</Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
