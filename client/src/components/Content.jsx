var React = require("react");

var EquipmentTab = require("./TabContents/Equipment.jsx");
var InstructionsTab = require("./TabContents/Instructions.jsx");
var LocationTab = require("./TabContents/location.jsx");

var Content = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.currentTab === 1 ? <EquipmentTab tabData={this.props.tabs[0]}/> : null}
				{this.props.currentTab === 2 ? <InstructionsTab  tabData={this.props.tabs[1]}/> : null}
				{this.props.currentTab === 3 ? <LocationTab  tabData={this.props.tabs[2]}/> : null}
			</div>
		)
	}

})

module.exports = Content;
