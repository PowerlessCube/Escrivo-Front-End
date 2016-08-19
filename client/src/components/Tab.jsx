var React = require("react");

var Tab = React.createClass({

	handleClick: function(e) {
		e.preventDefault();
		console.log("Clicky, clicky!");
	},

	render: function() {
		return (
			<li onClick={this.handleClick}>
				<a href="" className="tab">{this.props.title}</a>
			</li>
		)
	}

})

module.exports = Tab;
