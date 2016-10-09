var React = require('react')

var Title = React.createClass({
  render() {
    return (
      <div><h1>{this.props.title}</h1></div>
     )
  }
})


module.exports = Title
