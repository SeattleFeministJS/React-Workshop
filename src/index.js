var div = React.DOM.div
var h1 = React.DOM.h1

//  composite component
var Title = React.createClass({
  render() {
    return (
      div(null,
        h1(null, 'Hello World Class')
      )
    )
  }
})

var HelloWorld = (
  div( null,
    React.createElement(Title, null)
  )
)

ReactDOM.render(HelloWorld, document.getElementById('app'))
