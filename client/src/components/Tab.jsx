var React = require("react");

var Tab = React.createClass({

	render: function() {
		return (
			<li>
				<a href="" className="tab">{this.props.title}</a>
			</li>
		)
	}

})

module.exports = Tab;
