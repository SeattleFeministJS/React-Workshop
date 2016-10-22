import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	name: ''
    };
    this.updateName = this.updateName.bind(this);
  }
  updateName(e) {
  	this.setState({ name: e.target.value });
  }
  render() {
    return <form>
      <div>Please sign up!</div>
      <input 
      	type="text" 
      	placeholder="Your name here"
      	onChange={this.updateName}
      	value={this.state.name}
    	/>
      <label htmlFor="feelings">How are you feeling today?
	      <select id="feelings">
	    		<option value="Contemplative">Contemplative</option>
	    		<option value="Sleepy">Sleepy</option>
	    		<option value="Excited">Excited</option>
	  		</select>
  		</label>
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
