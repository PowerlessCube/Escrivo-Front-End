var React = require("react");

var Tabs = require("./Tabs.jsx");
var Content = require("./Content.jsx");
var TabData = require("../tabData.js");

var SideBar = React.createClass({

	changeCurrentTab: function() {
		console.log("I will handle the tab change");
	},

	getInitialState: function() {
		return {
			tabs: TabData,
			currentTab: 0
		}
	},

	render: function() {
		return (
			<aside>
				<Tabs
					tabs={this.state.tabs}
					changeCurrentTab={this.changeCurrentTab}
				/>
				<Content/>
			</aside>
		)
	}


})

module.exports = SideBar;
