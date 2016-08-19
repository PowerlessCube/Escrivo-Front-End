var React = require("react");

var Tabs = require("./Tabs.jsx");
var Content = require("./Content.jsx");
var TabData = require("../tabData.js");

var SideBar = React.createClass({

	changeCurrentTab: function(tab) {
		console.log("e.target?", tab);
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
				/>
			</aside>
		)
	}


})

module.exports = SideBar;
