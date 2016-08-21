var React = require("react");

var Tabs = require("./Tabs.jsx");
var Content = require("./Content.jsx");
var TabData = require("../tabData.js");

var SideBar = React.createClass({

	getInitialState: function() {
		return {
			tabs: TabData,
			currentTab: 1,
			map: null
		}
	},

	changeCurrentTab: function(tab) {
		this.setState({currentTab: tab.id});
	},

	render: function() {
		return (
			<aside>
				<Tabs
					tabs={this.state.tabs}
					changeCurrentTab={this.changeCurrentTab}
					currentTab={this.state.currentTab}
				/>
				<Content
					currentTab={this.state.currentTab}
					tabs={this.state.tabs}
					map={this.state.map}
				/>
			</aside>
		)
	}


})

module.exports = SideBar;
