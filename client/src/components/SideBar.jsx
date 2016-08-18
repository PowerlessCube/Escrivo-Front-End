var React = require("react");

var Tabs = require("./Tabs.jsx");
var Content = require("./Content.jsx");
var TabData = require("../tabData.js");

var SideBar = React.createClass({

	getInitialState: function() {
		return {
			tabs: TabData,
			currentTab: 0
		}
	},

	render: function() {
		return (
			<aside>
				Side Bar
				<Tabs
					tabs={this.state.tabs}
				/>
				<Content/>
			</aside>
		)
	}


})

module.exports = SideBar;
