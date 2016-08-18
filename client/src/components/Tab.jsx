var React = require("react");

var Tab = React.createClass({

	render: function() {
		return (
			<li>
				<a href="">{this.props.tabImg}{this.props.title}</a>
			</li>
		)
	}

})

module.exports = Tab;
