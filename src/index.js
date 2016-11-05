import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import Home from './containers/Home'
import Signup from './containers/Signup'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import app from './redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(app)

console.log('STORE', store.getState())

ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Home} />
          <Route path="signup" component={Signup} />
        </Route>
      </Router>
    </Provider>
), document.getElementById('app'))


