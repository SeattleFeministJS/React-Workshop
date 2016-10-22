import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	feeling: 'Contemplative',
    	learningReact: true
    };
    this.updateName = this.updateName.bind(this);
    this.updateFeeling = this.updateFeeling.bind(this);
    this.updateLearningReact = this.updateLearningReact.bind(this);
  }
  updateName(e) {
  	this.setState({ name: e.target.value });
  }
  updateFeeling(e) {
  	this.setState({ feeling: e.target.value })
  }
  updateLearningReact(e) {
  	this.setState({ learningReact: e.target.checked })
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
	      <select 
	      	id="feelings"
	      	onChange={this.updateFeeling}
	      	selected={this.state.feeling}
      	>
	    		<option value="Contemplative">Contemplative</option>
	    		<option value="Sleepy">Sleepy</option>
	    		<option value="Excited">Excited</option>
	  		</select>
  		</label>
      <label>Check this box if you're learning React.js
        <input 
          type="checkbox" 
          onChange={this.updateLearningReact}
          checked={this.state.learningReact}
      	/>
      </label>
      <button>
        Sign Me Up
      </button>
    </form>;
  }
}
