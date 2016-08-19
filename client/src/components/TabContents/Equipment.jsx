var React = require("react");

var EquipmentTab = React.createClass({

	render: function() {
		var displayImages = this.props.tabData.images.map(function(image, index) {
			return (
				<img
					key={index}
					className="equipment-image"
					src={image.img}
				/>
			)
		})

		return (
			<div className="content">
				<h2>{this.props.tabData.title}</h2>
				{displayImages}
			</div>
		)
	}

})

module.exports = EquipmentTab;
