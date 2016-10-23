import React, { Component } from 'react'
import s from './header.css'


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login <span><i className="em em-lock"></i></span>
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout <span><i className="em em-unlock"></i></span>
    </button>
  );
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }



  render() {
  const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <header>
        <div className={s.user}>
          {button}
        </div>
      </header>
    )
  }
}
