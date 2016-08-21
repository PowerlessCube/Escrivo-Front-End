var React = require("react");

var Tab = React.createClass({

	handleClick: function(e) {
		e.preventDefault();
		this.props.handleClick();
	},

	render: function() {
		return (
			<li>
				<a
					className={this.props.isCurrent ? "current" : null}
					onClick={this.handleClick}
				>
					{this.props.title}
				</a>
			</li>
		)
	}

})

module.exports = Tab;
