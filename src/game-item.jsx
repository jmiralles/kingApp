var React = require('react');
var Button = require('react-bootstrap').Button;

module.exports = React.createClass({
  render: function() {
    return  <Button>
       {this.props.name} 
    </Button>
  }
});

  