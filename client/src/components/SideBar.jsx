var React = require("react");

var Tabs = require("./Tabs.jsx");
var Content = require("./Content.jsx");
var TabData = require("../tabData.js");

var SideBar = React.createClass({

	changeCurrentTab: function(tab) {
		this.setState({currentTab: tab.id});
	},

	getInitialState: function() {
		return {
			tabs: TabData,
			currentTab: 1
		}
	},

	render: function() {
		return (
			<aside>
				<Tabs
					tabs={this.state.tabs}
					changeCurrentTab={this.changeCurrentTab}
				/>
				<Content
					currentTab={this.state.currentTab}
					tabs={this.state.tabs}
				/>
			</aside>
		)
	}


})

module.exports = SideBar;
