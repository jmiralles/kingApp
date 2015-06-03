var React = require('react');
var GamesJson = require('./games.json');  
var GameItem = require('./game-item');
var ButtonGroup = require('react-bootstrap').ButtonGroup;

module.exports = React.createClass({
  render: function() {

  	if(this.props.allGames){  
  		var games = this.props.gameList.map(function(game){
      		return (<GameItem
              	name = {game.name}
              	/>)
    		});

		return <ButtonGroup vertical block>
    		 {games}
    		  </ButtonGroup>
  	}else{
  		return <div>
    		'My Games'  
    		</div>
  	}
    
  }
});


      		 