
var React = require('react');
var ReactDOM = require('react-dom');
var Goban = require('..').Goban;

var DemoApp = React.createClass({
    getInitialState: function() {
	return {position: {"P16": "black"},
		markers: {"P16": "circle"},
		theme: "classic",
		coordSystem: "A1",
		hideBorder: false,
		noMargin: false,
		intersection: "none yet", 
		nextToPlay: "black"};
    },
    handleIntersectionClick: function(intersection) {
	this.setState({intersection: intersection});
    },
    handleClickTheme: function(event) {
	var newTheme = (this.state.theme == "classic") ? "paper" : "classic";
	this.setState({theme: newTheme});
    },
    handleClickCoordSystem: function(event) {
	var newCoordSystem = (this.state.coordSystem == "A1") ? "aa" : "A1";
	this.setState({coordSystem: newCoordSystem});
    },
    handleClickBorder: function(event) {
	var newBorder = (this.state.hideBorder == false) ? true : false;
	this.setState({hideBorder: newBorder});
    },
    handleClickMargin: function(event) {
	var newMargin = (this.state.noMargin == false) ? true : false;
	this.setState({noMargin: newMargin});
    },
    handleClickStones: function(event) {
	var sample = [{"P16": "black"}, {"od": "black", "pp": "white"}];
	var i = Object.keys(this.state.position).length === 1 ? 1 : 0;
	this.setState({position: sample[i]});
    },
    handleClickMarkers: function(event) {
	var sample = [{"P16": "circle"}, {}];
	var i = Object.keys(this.state.markers).length === 1 ? 1 : 0;
	this.setState({markers: sample[i]});
    },
    handleClickBW: function(event) {
	var newColor = (this.state.nextToPlay == "black") ? "white" : "black";
	this.setState({nextToPlay: newColor});
    },
    render: function() {
	return (
		<div>
		  <div id="menu">
		    <h1>react-goban demo</h1>
		<br/>
		    <p>Toggle properties of stateless Goban with simple test cases:</p>
		<div id="result">
		<p>&lt;Goban</p>
		<ul>
		<li><button onClick={this.handleClickTheme}>theme</button> = "{this.state.theme}"</li>
		<li><button onClick={this.handleClickMargin}>noMargin</button> = {this.state.noMargin ? "true" : "false"}</li>
		<li><button onClick={this.handleClickBorder}>hideBorder</button> = {this.state.hideBorder ? "true" : "false"}</li>
		<li><button onClick={this.handleClickCoordSystem}>coordSystem</button> = "{this.state.coordSystem}"</li>
		<li><button onClick={this.handleClickBW}>nextToPlay</button> = "{this.state.nextToPlay}"</li>
		<li><button onClick={this.handleClickStones}>stones</button> = {JSON.stringify(this.state.position)}</li>
		<li><button onClick={this.handleClickMarkers}>markers</button> = {JSON.stringify(this.state.markers)}</li>
		</ul>
		<p>/&gt;</p>
	        </div>
		<p>Last click received from callback: <strong>{this.state.intersection}</strong></p>
		</div>

		  <Goban theme={this.state.theme} stones={this.state.position} markers={this.state.markers}
	                 nextToPlay={this.state.nextToPlay} onIntersectionClick={this.handleIntersectionClick}
	                 hideBorder={this.state.hideBorder} noMargin={this.state.noMargin}
	                 coordSystem={this.state.coordSystem} /> 
		</div>
	);
    }
});

ReactDOM.render(
  <DemoApp />, document.getElementById('content')
);
