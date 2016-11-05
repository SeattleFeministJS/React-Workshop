import React, { Component } from 'react'
import s from './header.css'
import { IndexLink, Link } from 'react-router'


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
  render() {
  const isLoggedIn = this.props.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.props.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.props.handleLoginClick} />
    }

    return (
      <header className="clearfix">
      <nav>
        <ul>
          <li><IndexLink to="/"  activeStyle={{ color: '#F300D5' }} >Home</IndexLink></li>
          <li><Link to="signup" activeClassName={s.active}>Signup</Link></li>
        </ul>
      </nav>
        <div className={s.top}>
          <div className={s.mail}>
          { this.props.messages.length > 0 && this.props.isLoggedIn &&
            <p>
              <span><i className="em em-mailbox_with_mail"></i></span>
              You have {this.props.messages.length} unread
              {this.props.messages.length > 1 ? ' messages' : ' message'}.
            </p>
          }
        </div>
        <div className={s.user}>
          {button}
        </div>
      </div>
      </header>
    )
  }
}
