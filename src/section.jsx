var React = require('react');
var GameItem = require('./game-item');
var GameSelected = require('./game-selected');
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var Table = require('react-bootstrap').Table;


module.exports = React.createClass({
  render: function() {
  	if(this.props.allGames){  
  		var games = this.props.gameList.map(function(game, i){
      		return (<GameItem
                id={i}
              	name = {game.name}
                short = {game.short}
                handleClickSelect = {this.props.whenClickSelectedGame}
                selected={game.selected}
              	/>)
    		}, this);

		return <Table responsive>
                <thead>
                <tr>
                    <th>All Games King</th>
                    <th>Select your fav</th>
                </tr>
                </thead>
                <tbody>
      		    {games}
                </tbody>
                </Table>
    }else{
        var games = this.props.gameList.map(function(game, i){
            if(game.selected)   { 
                return (<GameSelected
                        id={i}
                        name = {game.name}
                        short = {game.short}
                        handleClickSelect = {this.props.whenClickSelectedGame}
                        selected={game.selected}
                        />)
                    }
    		}, this);
            
  		return <Table responsive>
                <thead>
                <tr>
                    <th>Your favorited games</th>
                    <th>Play now</th>
                </tr>
                </thead>
               <tbody>
    		   {games}
               </tbody>
               </Table>

  	}
    
  }
});



        
