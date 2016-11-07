import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/Header/Header'
import { connect } from 'react-redux'
import { logIn, logOut } from '../redux/loggedIn'

const mail = [
  'Hello from your mom',
  'Postcards from the edge',
  'What happens in Vegas ...'
]

class Home extends Component {

  render() {
    return (
      <div>
        <Header messages={mail}
          isLoggedIn={this.props.loggedIn}
          handleLoginClick={this.props.onLogIn.bind(this)}
          handleLogoutClick={this.props.onLogOut.bind(this)}/>
        <h1>Home</h1>
        <p>This is the homepage, if you'd like to see our form click <Link to="signup">here</Link></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn.loggedIn
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: () => {
      dispatch(logIn())
    },
    onLogOut: () => {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
