var React = require("react");

var Tabs = require("./Tabs.jsx");
var TabData = require("../tabData.js");

var SideBar = React.createClass({

	getInitialState: function() {
		return {
			tabs: TabData,
			selectedTab: 0
		}
	},

	render: function() {
		return (
			<aside>
				Side Bar
				<Tabs/>
			</aside>
		)
	}


})

module.exports = SideBar;
