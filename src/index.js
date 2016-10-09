var div = React.DOM.div
var h1 = React.DOM.h1

//  composite component
var Title = React.createClass({
  render() {
    return (
      <div><h1>{this.props.title}</h1></div>
     )
  }
})

var HelloWorld = (<div><Title title="Hello JSX!" /></div>)

ReactDOM.render(HelloWorld, document.getElementById('app'))
