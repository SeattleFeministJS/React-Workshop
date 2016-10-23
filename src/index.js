import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import Home from './containers/Home'
import Signup from './containers/Signup'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'



ReactDOM.render((
   <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'))


