var React = require("react");

var InstructionsTab = React.createClass({

	render: function() {
		return (
			<div className="content">
				<h2>{this.props.tabData.title}</h2>
				<p>{this.props.tabData.text}</p>
			</div>
		)
	}

})

module.exports = InstructionsTab;
