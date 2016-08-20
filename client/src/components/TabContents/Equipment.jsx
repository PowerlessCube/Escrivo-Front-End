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
				{displayImages}
			</div>
		)
	}

})

module.exports = EquipmentTab;
