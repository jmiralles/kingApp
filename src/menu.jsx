var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

// TODO: check issues with IE8
module.exports = React.createClass({
  render: function(){
    return <Navbar brand='King Games' inverse toggleNavKey={0}>
      <Nav eventKey={0} onSelect={this.props.whenItemSelected}> 
        <NavItem eventKey={1} href='#'>{this.props.titles[0]}</NavItem>
        <NavItem eventKey={2} href='#'>{this.props.titles[1]}</NavItem>
      </Nav>
    </Navbar>

}
});


