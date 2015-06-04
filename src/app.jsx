var React = require('react');
var Menu = require('./menu');
var Section = require('./section');


var App = React.createClass({
    handleClick: function(selectedKey) {
        
        // TODO:This should be changed to a ROUTING system
        if (selectedKey === 2){
            this.setState({allGames: false});
        }else{
            this.setState({allGames: true});   
        }
    },
    whenClickSelectedGame : function(item){
        var id = (event.target || event.srcElement).id;
        var games = this.state.gameList;

        if(games[id].selected){
            games[id].selected = false;
        }else{
            games[id].selected = true;
        }

        this.setState({
            gameList : games
        }); 

    },
    getInitialState: function(){
        return { 
            allGames: true,
            gameList: []
        }
    },

    componentDidMount: function() {
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
        whenClickSelectedGame = {this.whenClickSelectedGame}
        gameList={this.state.gameList}
        allGames={this.state.allGames} 
        />
        </div>)   
    }
});


var menuOptions = {
    titles : [
      'All Games',
      'My Games'
      ]
}

var appElement = React.createElement(App, menuOptions);
React.render(appElement, document.getElementById('app'));
