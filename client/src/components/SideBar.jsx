var React = require("react");

var SideBar = React.createClass({

	getInitialState: function() {
		return {
			SelectedTab: 1
		}
	},

	render: function() {
		return (
			<aside>
				Side Bar
			</aside>
		)
	}


})

module.exports = SideBar;
