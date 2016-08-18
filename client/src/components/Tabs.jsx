var React = require("react");

var Tab = require("./tab.jsx")

var Tabs = React.createClass({

	render: function() {
		var displayTabs = this.props.tabs.map(function(tab, index) {
			return (
				<Tab
					key={index}
					tabImg={tab.tabImg}
					title={tab.title}
				/>
			)
		}.bind(this))

		return (
			<nav className="tabs">
				Tabs
				<ul>
					{displayTabs}
				</ul>
			</nav>
		)
	}


})

module.exports = Tabs;
