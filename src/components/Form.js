import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return <form>
      <div>Please sign up!</div>
      <label>Check this box if you're learning React.js
        <input 
          type="checkbox" 
      	/>
      </label>
      <button>
        Sign Me Up
      </button>
    </form>;
  }
}
