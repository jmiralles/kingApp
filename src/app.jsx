var React = require('react');
var Menu = require('./menu');
var Section = require('./section');


var App = React.createClass({
  handleClick: function(selectedKey) {
    // This should be changed to a ROUTING
    if (selectedKey === 2){
    	this.setState({allGames: false});
    }else{
    	this.setState({allGames: true});   
    }
  },
  getInitialState: function(){
    return { allGames: true,
    		 gameList: []
    	 }
  },

  componentDidMount: function() {
  	console.log('MOUNT');
     $.get('src/games.json', function(result) {  
      if (this.isMounted()) {
        this.setState({
          gameList : result.games
        });
      }
    }.bind(this));
  },

  render: function() {
    return (<div>
    	<Menu
    		whenItemSelected = {this.handleClick}
    		titles = {this.props.titles}
    	/>
    	<Section
    		gameList={this.state.gameList}
    		allGames={this.state.allGames} 
    	/>
    	</div>    	)   
		
  }

});


var menuOptions = {
	titles : [
	'All Games',
	'My Games'
	]
}

menuElement = React.createElement(App, menuOptions);
React.render(menuElement, document.getElementById('app'));

