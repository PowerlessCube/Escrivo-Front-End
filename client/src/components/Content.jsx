var React = require("react");

var EquipmentTab = require("./TabContents/Equipment.jsx");
var InstructionsTab = require("./TabContents/Instructions.jsx");
var LocationTab = require("./TabContents/location.jsx");

var Content = React.createClass({

	render: function() {
		return (
			<div className="content">
				Content
				<EquipmentTab/>
				<InstructionsTab/>
				<LocationTab/>
			</div>
		)
	}

})

module.exports = Content;
