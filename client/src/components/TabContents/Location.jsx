var React = require("react");

var LocationTab = React.createClass({

	render: function() {
		return (
			<div className="content location">
				<h2>{this.props.tabData.title}</h2>
			</div>
		)
	}

})

module.exports = LocationTab;
