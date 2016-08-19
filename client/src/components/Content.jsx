var React = require("react");

var EquipmentTab = require("./TabContents/Equipment.jsx");
var InstructionsTab = require("./TabContents/Instructions.jsx");
var LocationTab = require("./TabContents/location.jsx");

var Content = React.createClass({

	render: function() {
		return (
			<div className="content">
				{this.props.currentTab === 1 ? <EquipmentTab/> : null}
				{this.props.currentTab === 2 ? <InstructionsTab/> : null}
				{this.props.currentTab === 3 ? <LocationTab/> : null}
			</div>
		)
	}

})

module.exports = Content;
