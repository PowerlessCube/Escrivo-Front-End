var React = require("react");

var InstructionsTab = React.createClass({

	render: function() {
		return (
			<div className="content">
				<p>{this.props.tabData.text}</p>
			</div>
		)
	}

})

module.exports = InstructionsTab;
