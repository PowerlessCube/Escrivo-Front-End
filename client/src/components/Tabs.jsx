var React = require("react");

var Tab = require("./tab.jsx")

var Tabs = React.createClass({

	handleClick: function(tab) {
		this.props.changeCurrentTab(tab);
	},

	render: function() {
		var displayTabs = this.props.tabs.map(function(tab, index) {
			return (
				<Tab
					key={index}
					tabId={tab.id}
					tabImg={tab.tabImg}
					title={tab.title}
					handleClick={this.handleClick.bind(this, tab)}
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
