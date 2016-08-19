var React = require("react");

var Tab = React.createClass({

	handleClick: function(e) {
		e.preventDefault();
		this.props.handleClick();
	},

	render: function() {
		return (
			<li>
				<a onClick={this.handleClick} className="tab">{this.props.title}</a>
			</li>
		)
	}

})

module.exports = Tab;
