var React = require('react');
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

module.exports = React.createClass({

  render: function() {
    return  <tr>
       <td><span className="game-title">{this.props.name}</span><Button className="delete-button" bsStyle='danger' bsSize='xsmall' onClick={this.props.handleClickSelect} id={this.props.id} >Erase from your list?</Button> </td>
      <td><Button bsStyle='primary'>Play</Button></td>
    </tr>
  }
});

  