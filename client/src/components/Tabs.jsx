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
					changeCurrentTab={this.props.changeCurrentTab}
				/>
			)
		}.bind(this))

		return (
			<nav>
				<ul>
					{displayTabs}
				</ul>
			</nav>
		)
	}


})

module.exports = Tabs;
