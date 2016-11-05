// pattern for defining string consts for the action types used to organize actions in larger apps
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

// action creator
export function logIn(loggedIn) {
  // action
  return {
    type: LOG_IN,
    loggedIn
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

const initialState = {
  loggedIn: false
}

// reducer
export default function app(state=initialState, action) {
  switch(action.type) {
    case LOG_IN:
      return {...state, loggedIn: action.loggedIn}
    case LOG_OUT:
      return {...state, loggedIn: false}
    default:
      return state
  }
}
