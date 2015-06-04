var React = require('react');
var Input = require('react-bootstrap').Input;

module.exports = React.createClass({
  render: function() {
    return <tr>
       <td><span className="game-title">{this.props.name}</span></td>
       <td><Input type='checkbox' label='Selected' id={this.props.id} checked={this.props.selected} readOnly onClick={this.props.handleClickSelect} /></td>
    </tr>
  } 
});

  